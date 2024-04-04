<?php

// include('./config.php');
include '../conexiones.php';
$GLOBALS["rutasMovimientosL"] = array("\\\\10.50.8.118\\rep_files\\", "\\\\10.50.8.119\\rep_files\\");
$opc = $_POST['opc'];

switch ($opc)
{
    case 'generaregion':
        $regiones = array($_POST['region']);
        generaregion($regiones);
        break;
    case 'generacion':
        break;
    case 'insertarmovimientos':
        $fecha = trim($_POST['fecha']);
        movimientosl($fecha);
        break;
    case 'respaldar':
        $fecha = trim($_POST['fecha']);
        respaldarlym($fecha);
        break;
}

function generaregion($regiones) // Aun no se si funcione xD
{
    $respuesta = '';
    $estado = 0;

    $conn = conect_88();

    // Asegúrate de que $regiones es un array y no un array de arrays
    if (is_array($regiones[0]))
    {
        $regionesStr = implode(", ", $regiones[0]);
    }
    else
    {
        $regionesStr = implode(", ", $regiones);
    }

    // volvemos a sus valores por defecto
    $query1 = $conn->prepare("UPDATE cat_ciudades_lym_nueva SET generado =  0 WHERE generado =  1");
    $query1->execute();

    // agregamos un distintivo para saber cuáles vamos a generar
    $query = $conn->prepare("UPDATE cat_ciudades_lym_nueva SET generado =  1 WHERE nom_region IN ($regionesStr)");

    // Ejecutar la consulta solo una vez
    try
    {
        $query->execute();
        $result = $query->rowCount();
        return $result;
    }
    catch (Exception $err)
    {
        $estado = $err->getCode();
        $mensaje = $err->getMessage();
        $respuesta = ['estado' => $estado, 'mensaje' => $mensaje];
        return $respuesta;
    }
    finally
    {
        // No es necesario retornar la conexión aquí
    }

    $estado = 0;
    $respuesta = 'Se actuliazaron la regiones';
    // No llegará a este punto si la consulta falla o si se retorna antes
    $endJSON = array('estado' => $estado, 'respuesta' => $respuesta);
    header('Content-Type: application/json');
    echo json_encode($endJSON);
}

function movimientosl($fecha) # Esta vaina ya jala y mejor que el sistema anterior
{
    $mensaje = '';
    $estado = 0;

    $conn88 = conect_88();
    $sftp88 = sftp_88();

    $conn84 = conect_84();
    $sftp84 = sftp_84();

    $fechaFormateada = substr($fecha, 5, 2) . substr($fecha, 8, 2) . substr($fecha, 2, 2);

    $rutaDestinoProductivo = "ssh2.sftp://$sftp88/tmp/Servicios Especiales/";
    $archivorep = 'CL_SCM_ACTUALIZADOMICILIOS_LYM_20231018*_' . $fechaFormateada . '_*.rep';

    $archivoEncontrado = false;
    foreach ($GLOBALS["rutasMovimientosL"] as $ruta)
    {
        foreach (glob($ruta . $archivorep) as $file)
        {
                $archivoEncontrado = true;
                $archivoDestino = $rutaDestinoProductivo . basename($file);
                if (!copy($file, $archivoDestino))
                {
                    $estado = 1;
                    $mensaje = 'No se pudo pasar el archivo al servidor productivo';

                    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
                    header('Content-Type: application/json');
                    echo json_encode($endJSON);
                    return;
                }
                else
                {
                    $archivoNombre = (substr($file, 24));
                    $permisos = ssh2_sftp_chmod($sftp88, "/tmp/Servicios Especiales/$archivoNombre", 4095);
                    if (!$permisos)
                    {
                        $estado = 1;
                        $mensaje = ' ARCHIVOS REP SIN PERMISOS DE LECTURA';

                        $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
                        header('Content-Type: application/json');
                        echo json_encode($endJSON);
                        return;
                    }

                    $query84 = $conn84->prepare("SELECT fun_copiado_historico('$fecha')");
                    $query84->execute();


                    if (!copy("ssh2.sftp://" . $sftp84 . "/tmp/Servicios Especiales/Movimientos_LyM.csv", "ssh2.sftp://" . $sftp88 . "/tmp/Servicios Especiales/Movimientos_LyM.csv"))
                    {

                        $estado = 1;
                        $mensaje = 'No se pudo copiar Archivo de movimientos';

                        $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
                        header('Content-Type: application/json');
                        echo json_encode($endJSON);
                        return;
                    }
                    ;
                    #quiero darle permisos pero no lo esta haciendo, que pedo?
                    $permisos = ssh2_sftp_chmod($sftp88, "/tmp/Servicios Especiales/Movimientos_LyM.csv", 4095);

                    $query88 = $conn88->prepare("SELECT estado, mensaje FROM fun_cierre_movimientosl_lym('$archivoNombre','$fecha')");
                    $query88->execute();

                    while ($rw = $query88->fetch(PDO::FETCH_ASSOC))
                    {
                        $estado = $rw['estado'];
                        $mensaje = $rw['mensaje'];
                    }
                    ;

                    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);

                    // $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
                    // header('Content-Type: application/json');
                    // echo json_encode($endJSON);
                    if ($estado != 0)
                    {
                        $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
                        header('Content-Type: application/json');
                        echo json_encode($endJSON);
                        return;
                    }
                }
        }
    }

    if (!$archivoEncontrado) {
        $estado = 1;
        $mensaje = ' No se encontro el archivo rep del dia';
    }

    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
    header('Content-Type: application/json');
    echo json_encode($endJSON);
}

function respaldarlym($fecha) # Se simplifico un poco mas el flujo de este apartado
{

    $mensaje = '';
    $estado = 0;

    // $conn88 = conect_88();
    $conn105 = conect_105_lym();
    $sftp88 = sftp_88();
    $sftp105 = sftp_105();
    $conn84 = conect_84();
    $sftp84 = sftp_84();

    #identificamos donde estan todos los archivos
    $archivosOrigen = [
        "ssh2.sftp://" . $sftp88 . "/tmp/Servicios Especiales/RespaldoGeneracion_LyM.csv" => "ssh2.sftp://" . $sftp105 . "/tmp/Servicios Especiales/RespaldoGeneracion_LyM.csv",
        "ssh2.sftp://" . $sftp88 . "/tmp/Servicios Especiales/Movimientos_LyM105.csv" => "ssh2.sftp://" . $sftp105 . "/tmp/Servicios Especiales/Movimientos_LyM105.csv",
        "ssh2.sftp://" . $sftp88 . "/tmp/Servicios Especiales/RespaldoDirectorio_LyM.csv" => "ssh2.sftp://" . $sftp105 . "/tmp/Servicios Especiales/RespaldoDirectorio_LyM.csv",
        "ssh2.sftp://" . $sftp88 . "/tmp/movtosl.csv" => "ssh2.sftp://" . $sftp84 . "/tmp/movtosl.csv"
    ];

    foreach ($archivosOrigen as $origen => $destino)
    {
        if (!copy($origen, $destino))
        {
            $estado = 1;
            $mensaje = 'No se pudo copiar los Archivos de respaldo al historico';

            // $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
            // header('Content-Type: application/json');
            // echo json_encode($endJSON);
            break; // Detiene la ejecución después del primer error
        }
    }

    #identificamos todos los archivos
    $archivos = [
        "/tmp/Servicios Especiales/RespaldoGeneracion_LyM.csv",
        "/tmp/Servicios Especiales/Movimientos_LyM105.csv",
        "/tmp/Servicios Especiales/RespaldoDirectorio_LyM.csv",
        "/tmp/movtosl.csv"
    ];
    #otorganos permisos a todos los archivos
    foreach ($archivos as $archivo)
    {
        ssh2_sftp_chmod($sftp105, $archivo, 4095);
        ssh2_sftp_chmod($sftp84, $archivo, 4095);
    }

    # esto lo pongo para no pasarlo manualmente los movimientos al 84
    $query1 = $conn84->prepare("Delete from movimientos_actualizadomiciliosa_lym where num_agente = 99999999 and fec_horainicio::Date = :fecha");
    $query1->bindParam(':fecha', $fecha);
    $query1->execute();

    # Insertamos los movtos despues de eliminar si es que habia de ese dia, no quize ponerlo en una funcion y ya
    $query2 = $conn84->prepare("copy movimientos_actualizadomiciliosa_lym from '/tmp/movtosl.csv' delimiter '|'");
    $query2->execute();

    #ejecutamos la funcion de cierre
    $query = $conn105->prepare("SELECT estado, mensaje FROM fun_copiamovimientoscierre_lym('$fecha')");
    $query->execute();

    while ($rw = $query->fetch(PDO::FETCH_ASSOC))
    {
        $estado = $rw['estado'];
        $mensaje = $rw['mensaje'];
    }

    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
    header('Content-Type: application/json');
    echo json_encode($endJSON);


}


?>