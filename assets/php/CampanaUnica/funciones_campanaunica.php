<?php
include '../conexiones.php';

$opc = $_POST['opc'];

switch ($opc)
{
    case 'copiarmovtosViMo':
        $campain = trim($_POST['campain']);
        $fecha = trim($_POST['fecha']);
        copiarmovtosViMo($campain, $fecha);
        break;
}
function copiarmovtosViMo($campain, $fecha)
{
    $estado = 0; 
    $mensaje = '';

    $conn163 = conect_163();
    $conn105 = conect_105();
    $sftp163 = sftp_163();
    $sftp105 = sftp_105();

    $nombrecampana = array(
        'CLUB_VIAL' => 'CP_CUE_CLUB_VIAL_20230814',
        'CLUB_MOTOS' => 'CP_CUE_CLUB_MOTOS_20230814',
        'CLUB_SALUD' => 'CP_CUE_CLUB_SALUD_20230814',
        'OPERACIONARGENTINA' => 'CP_CUE_OPERACIONARGENTINA_20231009',
        'PRESTAMOALINEADO' => 'CP_CUE_PRESTAMOALINEADO_20240105',
        'EVALUACIONCANALESALTERNOS' => 'CP_CUE_EVALUACIONCANALESALTERNOS_20220630'
    );

    $campana = $nombrecampana[$campain] ?? null;

    $query = $conn163->prepare("SELECT COUNT(*) FROM campanaunica_resultados where nomcampana = :campana AND fechamovto = :fecha");

    $query->bindParam(':fecha', $fecha);
    $query->bindParam(':campana', $campana);
    $query->execute();
    $result = $query->fetchColumn();

    if ($result > 0)
    {

        $query = $conn163->prepare("SELECT estado, mensaje FROM cierre_club_proteccion_controlinformes('$campain','$fecha')");
        $query->execute();

        $result = $query->fetchColumn();

        while ($rw = $query->fetch(PDO::FETCH_ASSOC))
        {
            $estado = $rw['estado'];
            $mensaje = $rw['mensaje'];
        }
        ;

        $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
        if ($estado != 0)
        {

            $endJSON = array('estado' => $estado, 'respuesta' => $mensaje);
            header('Content-Type: application/json');
            echo json_encode($endJSON);
            return;
        }
        else
        {
            if (!copy("ssh2.sftp://" . $sftp163 . "/tmp/" . $campain . "_CI.csv", "ssh2.sftp://" . $sftp105 . "/tmp/" . $campain . "_CI.csv"))
            {

                $estado = 0;
                $mensaje = 'No se pudo copiar Archivo';

                $endJSON = array('estado' => $estado, 'respuesta' => $mensaje);
                header('Content-Type: application/json');
                echo json_encode($endJSON);
                return;
            }

            $permisos = ssh2_sftp_chmod($sftp105, "/tmp/" . $campain . "_CI.csv", 4095);
            if (!$permisos)
            {

                $estado = 1;
                $mensaje = 'No se pudo dar permisos al Arcvhivo reportar a Brandon Rodriguez';

                $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
                header('Content-Type: application/json');
                echo json_encode($endJSON);
                return;
            }

            $query2 = $conn105->prepare("SELECT estado, mensaje FROM cierre_club_proteccion_controlinformes('$campain','$fecha')");
            $query2->execute();

            while ($rw = $query2->fetch(PDO::FETCH_ASSOC))
            {
                $estado = $rw['estado'];
                $mensaje = $rw['mensaje'];
            }
            $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
            if ($estado != 0)
            {

                // $endJSON = array('estado' => $estado, 'respuesta' => $respuesta);
                header('Content-Type: application/json');
                echo json_encode($endJSON);
                return;
            }
        }
    }
    else
    {
        $estado = 0;
        $mensaje = 'No hay movimientos del dia en el servidor productivo';
        $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
        header('Content-Type: application/json');
        echo json_encode($endJSON);
        return;
    }
}