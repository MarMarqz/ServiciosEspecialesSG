<?php

include '../conexiones.php';

$opc = $_POST['opc'];
// $fecha = $_POST['fecha'];

// $fechaFormateada = substr($fecha, 5, 2) . substr($fecha, 8, 2) . substr($fecha, 2, 2);
// $arrayRutasREP = ["\\\\10.50.8.118\\rep_files\\", "\\10.50.8.119\\rep_files\\"];

// $traspasosrep = "CL_CUE_TRASPASOSAFORECOPPEL_20210426_2406_1682_2284_147_";
// $nombreREP = $traspasosrep . "*" . $fechaFormateada . "*" . ".rep";
$GLOBALS["rutasMovimientosL"] = array("\\\\10.50.8.118\\rep_files\\", "\\\\10.50.8.119\\rep_files\\");


switch ($opc)
{
    case 'generacion_ces':
        $archivo = 'archivo';
        generacion_ces($archivo);
        break;
    case 'movtosl':
        $campain = trim($_POST['campain']);
        $fecha = trim($_POST['fecha']);
        movimentosl($campain, $fecha);
        break;
    case 'copiarmovtosViMo':
        $campain = trim($_POST['campain']);
        $fecha = trim($_POST['fecha']);
        copiarmovtosViMo($campain, $fecha);
        break;
    case 'direcmovtos':
        $fecha = trim($_POST['fecha']);
        $campain = trim($_POST['campain']);
        direcmovtos($fecha, $campain);
        break;
    case 'respaldageneracion':
        $fecha = trim($_POST['fecha']);
        $campain = trim($_POST['campain']);
        respaldageneracion($campain, $fecha);
        break;
}

function generacion_ces($archivo, )
{
    
    $conn36 = conect_36();
    $sftp36 = sftp_36();

    $rutaProyecto = __DIR__ . '/BasesCES/';
    $rutaListas = __DIR__ .'/Listas De Marcacion/';
    $archivoDestino = $rutaProyecto . basename($_FILES[$archivo]['name']);

    $posicionUltimoGuionBajo = strrpos(basename($archivoDestino), "_");
    #Extrae la parte del nombre del archivo antes del último guion bajo
    $nombrecampana = substr(basename($archivoDestino), 0, $posicionUltimoGuionBajo);
    #$endJSON = array('estado' => 0, 'mensaje' => $nombrecampana);
#para cargar el directorio de traspasos -> fun_cargar_base2
    $campanaces = array(
        'abonoargentina',
        'club_de_proteccion_familiar',
        'CREDITOAUTOMOTRIZ',
        'distribucionargentina',
        'estado_de_cuenta_afore',
        'traspasos'
    );

    if (in_array($nombrecampana, $campanaces))
    {

        #Le ponemos los nombres a como los toma la funcion de generacion
        $campanaces = array(
            'abonoargentina' => 'base_abonoargentina.csv',
            'club_de_proteccion_familiar' => 'base_clubProteccionFamiliar.csv',
            'CREDITOAUTOMOTRIZ' => 'base_creditoautomotriz.csv',
            'distribucionargentina' => 'base_distribucionargentina.csv',
            'estado_de_cuenta_afore' => 'base_clubProteccionFamiliar.csv',
            'traspasos' => 'base_traspasos.csv'
        );

        $nombrebase = $campanaces[$nombrecampana] ?? null;

        if (!is_dir($rutaProyecto))
        {
            mkdir($rutaProyecto, 0777, true);
        }

        if (!move_uploaded_file($_FILES[$archivo]['tmp_name'], $archivoDestino))
        {
            $endJSON = array('estado' => 1, 'mensaje' => 'No se pudo pasar el archivo a la carpeta del proyecto');
            return;
        }

        $resFile = fopen("ssh2.sftp://$sftp36/tmp/" . $nombrebase, 'w');
        if (!$resFile)
        {
            $endJSON = array('estado' => 1, 'mensaje' => 'Error al abrir el archivo remoto.');
            return;
        }

        $data_to_send = file_get_contents($archivoDestino);
        if ($data_to_send === false)
        {
            $endJSON = array('estado' => 1, 'mensaje' => 'Error al leer el archivo local.');
            return;
        }

        fwrite($resFile, $data_to_send);
        fclose($resFile);

        $rutaArchivoSFTP = "/tmp/" . $nombrebase;
        if (!ssh2_sftp_chmod($sftp36, $rutaArchivoSFTP, 0777))
        {
            $endJSON = array('estado' => 1, 'mensaje' => 'Error al cambiar los permisos del archivo en el servidor SFTP.');
        }

        # Los parametros de fecha son inecesarion pero las funciones lo reciben como parametro igual ni la usan
        $funciongeneracion = array(
            'abonoargentina' => 'SELECT estado, mensaje FROM generacion_abonoargentina(current_date)',
            'club_de_proteccion_familiar' => 'SELECT estado, mensaje FROM fun_generacion_clubproteccionfamiliar_genesys(current_date)',
            'CREDITOAUTOMOTRIZ' => '',
            'distribucionargentina' => 'SELECT estado, mensaje FROM fun_distribucionargentina_generacion(current_date)',
            'estado_de_cuenta_afore' => 'SELECT estado, mensaje FROM fun_generacion_estadocuentaafore(current_date)',
            'traspasos' => 'SELECT estado, mensaje FROM fun_generacion_traspasos()'
        );

        $funcion = $funciongeneracion[$nombrecampana] ?? false;

        if ($funcion)
        {
            $query = $conn36->prepare($funcion);
            if ($query->execute())
            {
                $endJSON = ['estado' => 0, 'mensaje' => ''];
                while ($rw = $query->fetch(PDO::FETCH_ASSOC))
                {
                    if ($funcion == $funciongeneracion['abonoargentina'])
                    {
                        $endJSON['mensaje'] = $rw['Resultados Generados'];
                    }
                    else
                    {
                        $endJSON['estado'] = $rw['estado'];
                        $endJSON['mensaje'] = $rw['mensaje'];
                    }
                }
                header('Content-Type: application/json');
                echo json_encode($endJSON);
                return;
            }
        }

        $listasces = array(
            'abonoargentina' => "ssh2.sftp://$sftp36/tmp/Servicios Especiales/CL_CUE_ABONOARGENTINA2021_20210721.csv",
            'club_de_proteccion_familiar' => "ssh2.sftp://$sftp36/tmp/CL_CUE_CLUBPROTECCIONFAMILIAR_20200706.csv",
            'CREDITOAUTOMOTRIZ' => "ssh2.sftp://$sftp36/tmp/CL_CUE_CREDITOAUTOMOTRIZ.csv",
            'distribucionargentina' => "ssh2.sftp://$sftp36/tmp/CL_CUE_DISTRIBUCIONARG_20200715.csv",
            'estado_de_cuenta_afore' => "ssh2.sftp://$sftp36/tmp/CL_CUE_ESTADODECUENTACES_20191104.csv",
            'traspasos' => "ssh2.sftp://$sftp36/tmp/CL_CUE_TRASPASOSAFORECOPPEL_20210426.csv"
        );

        $rutaArchivo = $listasces[$nombrecampana] ?? false;
        #tomomos el nombre de la lista del array de arriba
        $lista = basename($rutaArchivo);

        if ($rutaArchivo)
        {
            copy($rutaArchivo,"../CES/Listas De Marcacion/$lista");
            $endJSON['lista'] = $lista ?? "Yo abia ... si ves esto. Favor de avisar a Brandon Rodríguez";
        }


    }
    else
    {
        $endJSON = array('estado' => 1, 'mensaje' => 'No se pudo continuar debido a que no es un archivo de algunas de las campañas que se pueden generar aqui');
    }

    header('Content-Type: application/json');
    // echo json_encode($endJSON);
    echo json_encode($endJSON);
}

function movimentosl($campain, $fecha)
{
    $mensaje = '';
    $estado = 0;

    $conn36 = conect_36();
    $sftp36 = sftp_36();

    $fechaFormateada = substr($fecha, 5, 2) . substr($fecha, 8, 2) . substr($fecha, 2, 2);

    $rutaDestinoProductivo = "ssh2.sftp://$sftp36/tmp/";
    $campainsrep = array(
        'ABONOARGENTINA' => 'CL_CUE_ABONOARGENTINA2021_20210721*_' . $fechaFormateada . '_*.rep',
        'CLUBPROTECCIONFAMILIAR' => 'CL_CUE_CLUBPROTECCIONFAMILIAR_20200706*_' . $fechaFormateada . '_*.rep',
        'CREDITOAUTOMOTRIZ' => 'CL_SE_AUTOPPEL_20230512*_' . $fechaFormateada . '_*.rep',
        'DISTRIBUCIONARGENTINA' => 'CL_CUE_DISTRIBUCIONARG_20200715*_' . $fechaFormateada . '_*.rep',
        'ESTADOCUENTAAFORE' => 'CL_CUE_ESTADODECUENTACES_20191104*_' . $fechaFormateada . '_*.rep',
        'TRASPASOS' => 'CL_CUE_TRASPASOSAFORECOPPEL_20210426*_' . $fechaFormateada . '_*.rep'
    );

    $archivorep = $campainsrep[$campain] ?? null;

    $archivoEncontrado = false;
    foreach ($GLOBALS["rutasMovimientosL"] as $ruta)
    {
        foreach (glob($ruta . $archivorep) as $file)
        {
            $archivoEncontrado = true;
            $archivoDestino = $rutaDestinoProductivo . basename($file);
            if (!copy($file, $archivoDestino))
            {
                $estado = 0;
                $mensaje = 'No se pudo pasar el archivo al servidor productivo';

                $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
                header('Content-Type: application/json');
                echo json_encode($endJSON);
                break;
            }
            else
            {
                $archivoNombre = (substr($file, 24));
                $permisos = ssh2_sftp_chmod($sftp36, "/tmp/$archivoNombre", 4095);
                if (!$permisos)
                {

                    $estado = 0;
                    $mensaje = 'No se pudo dar permisos al rep reportar a Brandon Rodriguez';

                    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
                    header('Content-Type: application/json');
                    echo json_encode($endJSON);
                    break;
                }
                ;

                $funcionmovtosl = array(
                    'ABONOARGENTINA' => "SELECT mensaje_salida, estado_salida FROM fun_movimientos_l_cp_cue_abonoargentina2021_20210721('" . $fecha . "','" . $archivoNombre . "','cp_cue_abonoargentina2021_20210721')",
                    'CLUBPROTECCIONFAMILIAR' => "SELECT mensaje_salida, estado_salida FROM fun_movimientos_l_cp_cue_clubproteccionfamiliar_20200706('" . $fecha . "','" . $archivoNombre . "','cp_cue_clubproteccionfamiliar_20200706')",
                    'CREDITOAUTOMOTRIZ' => "SELECT mensaje_salida, estado_salida FROM fun_movimientos_l_cp_cue_autoppel_20230512('" . $fecha . "','" . $archivoNombre . "','cp_cue_autoppel_20230512')",
                    'DISTRIBUCIONARGENTINA' => "SELECT mensaje_salida, estado_salida FROM fun_movimientos_l_cp_cue_distribucionarg_20200715('" . $fecha . "','" . $archivoNombre . "','cp_cue_distribucionarg_20200715')",
                    'ESTADOCUENTAAFORE' => "SELECT mensaje_salida, estado_salida FROM fun_movimientos_l_cp_cue_estadodecuentaces_20191104('" . $fecha . "','" . $archivoNombre . "','cp_cue_estadodecuentaces_20191104')",
                    'TRASPASOS' => "SELECT mensaje_salida, estado_salida FROM fun_movimientosl_traspasos('" . $archivoNombre . "','" . $fecha . "')"
                );
                $funcionmovimientos = $funcionmovtosl[$campain] ?? null;

                $query = $conn36->prepare($funcionmovimientos);
                $query->execute();

                while ($rw = $query->fetch(PDO::FETCH_ASSOC))
                {
                    $estado = $rw['estado_salida'];
                    $mensaje = $rw['mensaje_salida'];
                }
                ;

                if ($estado == 0)
                {

                    header('Content-Type: application/json');
                    echo json_encode(array('estado' => $estado, 'mensaje' => $mensaje . "\nFavor de reportar a Brandon Rodríguez /br/br👻"));
                    break;
                }
            }
        }
    }

    if (!$archivoEncontrado)
    {
        $estado = 0;
        $mensaje = ' No se encontro el archivo rep del dia';
    }

    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
    header('Content-Type: application/json');
    echo json_encode($endJSON);
}


function direcmovtos($fecha, $campain)
{

    #Me gustaria declararle mi amor pero solo puedo declarar variables

    $conn36 = conect_36();
    $sftp36 = sftp_36();
    $conn105 = conect_105();
    $sftp105 = sftp_105();

    #Respaldar los movimientos y directorio
    $query = $conn36->prepare("SELECT fun_cierre_ces(1,'" . $campain . "','" . $fecha . "')");
    $query->execute();

    $nombrearchivo = strtolower($campain);
    #identificamos donde estan todos los archivos
    $archivos = [
        "ssh2.sftp://" . $sftp36 . "/tmp/Servicios Especiales/movimientos_" . $nombrearchivo . ".csv" => "ssh2.sftp://" . $sftp105 . "/tmp/Servicios Especiales/movimientos_" . $nombrearchivo . ".csv",
        "ssh2.sftp://" . $sftp36 . "/tmp/Servicios Especiales/directorio_" . $nombrearchivo . ".csv" => "ssh2.sftp://" . $sftp105 . "/tmp/Servicios Especiales/directorio_" . $nombrearchivo . ".csv",
    ];
    #Enviamos los archivos al servidor historico
    foreach ($archivos as $origen => $destino)
    {
        if (!copy($origen, $destino))
        {
            $estado = 0;
            $mensaje = 'No se pudo copiar los Archivos de respaldo al historico';
            break; // Detiene la ejecución después del primer error
        }
    }
    # Ubicamos los archivos
    $archivos = [
        "/tmp/Servicios Especiales/movimientos_" . $nombrearchivo . ".csv",
        "/tmp/Servicios Especiales/directorio_" . $nombrearchivo . ".csv"
    ];
    #otorganos permisos a todos los archivos
    foreach ($archivos as $archivo)
    {
        ssh2_sftp_chmod($sftp105, $archivo, 4095);
    }

    $funcionrespaldomov = array(
        'ABONOARGENTINA' => "SELECT estado_salida, mensaje_salida FROM fun_abonoargentina_insertar_movimientos('" . $fecha . "')",
        'CLUBPROTECCIONFAMILIAR' => "SELECT estado_salida, mensaje_salida FROM fun_clubproteccionfamiliar_insertar_movimientos('" . $fecha . "')",
        'CREDITOAUTOMOTRIZ' => "SELECT estado_salida, mensaje_salida FROM fun_creditoautomotriz_insertar_movimientos('" . $fecha . "')",
        'DISTRIBUCIONARGENTINA' => "SELECT estado_salida, mensaje_salida FROM fun_distribucionargentina_insertar_movimientos('" . $fecha . "')",
        'ESTADOCUENTAAFORE' => "SELECT estado_salida, mensaje_salida FROM fun_estadocuentaafore_insertar_movimientos('" . $fecha . "')",
        'TRASPASOS' => "SELECT mensaje_salida, estado_salida FROM fun_cierre_traspasos(1,'" . $fecha . "')"
    );
    $funcionmovimientos = $funcionrespaldomov[$campain] ?? null;

    $query = $conn105->prepare($funcionmovimientos);
    $query->execute();

    while ($rw = $query->fetch(PDO::FETCH_ASSOC))
    {
        $estado = $rw['estado_salida'];
        $mensaje = $rw['mensaje_salida'];
    }
    if ($estado != 1)
    {
        header('Content-Type: application/json');
        echo json_encode(array('estado' => $estado, 'mensaje' => $mensaje));
        return;
    }
    else
    {

        $funcionrespaldodir = array(
            'ABONOARGENTINA' => "SELECT estado_salida, mensaje_salida FROM fun_abonoargentina_insertar_directorio('" . $fecha . "')",
            'CLUBPROTECCIONFAMILIAR' => "SELECT estado_salida, mensaje_salida FROM fun_clubproteccionfamiliar_insertar_directorio('" . $fecha . "')",
            'CREDITOAUTOMOTRIZ' => "SELECT estado_salida, mensaje_salida FROM fun_creditoautomotriz_insertar_directorio('" . $fecha . "')",
            'DISTRIBUCIONARGENTINA' => "SELECT estado_salida, mensaje_salida FROM fun_distribucionargentina_insertar_directorio('" . $fecha . "')",
            'ESTADOCUENTAAFORE' => "SELECT estado_salida, mensaje_salida FROM fun_estadocuentaafore_insertar_directorio('" . $fecha . "')",
            'TRASPASOS' => "SELECT mensaje_salida, estado_salida FROM fun_cierre_traspasos(2,'" . $fecha . "')"
        );
        $funciondirectorio = $funcionrespaldodir[$campain] ?? null;

        $query = $conn105->prepare($funciondirectorio);
        $query->execute();

        while ($rw = $query->fetch(PDO::FETCH_ASSOC))
        {
            $estado = $rw['estado_salida'];
            $mensaje = $rw['mensaje_salida'];
        }

    }

    header('Content-Type: application/json');
    echo json_encode(array('estado' => $estado, 'mensaje' => $mensaje));
}

// function copiarmovtosViMo($campain, $fecha)
// {

//     $mensaje = '';
//     $estado = 0;

//     $conn163 = conect_163();
//     $conn105 = conect_105();
//     $sftp163 = sftp_163();
//     $sftp105 = sftp_105();

//     $nombrecampana = array(
//         'CLUB_VIAL' => 'CP_CUE_CLUB_VIAL_20230814',
//         'CLUB_MOTOS' => 'CP_CUE_CLUB_MOTOS_20230814',
//         'CLUB_SALUD' => 'CP_CUE_CLUB_SALUD_20230814',
//         'OPERACIONARGENTINA' => 'CP_CUE_OPERACIONARGENTINA_20231009',
//         'PRESTAMOALINEADO' => 'CP_CUE_PRESTAMOALINEADO_20240105',
//         'EVALUACIONCANALESALTERNOS' => 'CP_CUE_EVALUACIONCANALESALTERNOS_20220630'
//     );

//     $campana = $nombrecampana[$campain] ?? null;

//     $query = $conn163->prepare("SELECT COUNT(*) FROM campanaunica_resultados where nomcampana = :campana AND fechamovto = :fecha");

//     $query->bindParam(':fecha', $fecha);
//     $query->bindParam(':campana', $campana);
//     $query->execute();
//     $result = $query->fetchColumn();

//     if ($result > 0)
//     {

//         $query = $conn163->prepare("SELECT estado, mensaje FROM cierre_club_proteccion_controlinformes('$campain','$fecha')");
//         $query->execute();

//         $result = $query->fetchColumn();

//         while ($rw = $query->fetch(PDO::FETCH_ASSOC))
//         {
//             $estado = $rw['estado'];
//             $mensaje = $rw['mensaje'];
//         }
//         ;

//         $endJSON = array('estado' => $estado, 'respuesta' => $mensaje);
//         if ($estado != 0)
//         {

//             $endJSON = array('estado' => $estado, 'respuesta' => $mensaje);
//             header('Content-Type: application/json');
//             echo json_encode($endJSON);
//             return;
//         }
//         else
//         {
//             if (!copy("ssh2.sftp://" . $sftp163 . "/tmp/" . $campain . "_CI.csv", "ssh2.sftp://" . $sftp105 . "/tmp/" . $campain . "_CI.csv"))
//             {

//                 $estado = 0;
//                 $mensaje = 'No se pudo copiar Archivo';

//                 $endJSON = array('estado' => $estado, 'respuesta' => $mensaje);
//                 header('Content-Type: application/json');
//                 echo json_encode($endJSON);
//                 return;
//             }

//             $permisos = ssh2_sftp_chmod($sftp105, "/tmp/" . $campain . "_CI.csv", 4095);
//             if (!$permisos)
//             {

//                 $estado = 1;
//                 $mensaje = 'No se pudo dar permisos al Arcvhivo reportar a Brandon Rodriguez';

//                 $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
//                 header('Content-Type: application/json');
//                 echo json_encode($endJSON);
//                 return;
//             }

//             $query2 = $conn105->prepare("SELECT estado, mensaje FROM cierre_club_proteccion_controlinformes('$campain','$fecha')");
//             $query2->execute();

//             while ($rw = $query2->fetch(PDO::FETCH_ASSOC))
//             {
//                 $estado = $rw['estado'];
//                 $mensaje = $rw['mensaje'];
//             }
//             $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
//             if ($estado != 0)
//             {

//                 // $endJSON = array('estado' => $estado, 'respuesta' => $respuesta);
//                 header('Content-Type: application/json');
//                 echo json_encode($endJSON);
//                 return;
//             }
//         }
//     }
//     else
//     {
//         $estado = 0;
//         $mensaje = 'No hay movimientos del dia en el servidor productivo';
//         $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
//         header('Content-Type: application/json');
//         echo json_encode($endJSON);
//         return;
//     }
// }

function respaldageneracion($campain, $fecha)
{
    $conn36 = conect_36();
    $sftp36 = sftp_36();
    $conn105 = conect_105();
    $sftp105 = sftp_105();

    $query = $conn36->prepare("SELECT fun_cierre_ces(2,'" . $campain . "','" . $fecha . "')");
    $query->execute();

    $nombrearchivo = strtolower($campain);
    #identificamos donde estan todos los archivos
    $archivos = [
        "ssh2.sftp://" . $sftp36 . "/tmp/Servicios Especiales/generacion_" . $nombrearchivo . ".csv" => "ssh2.sftp://" . $sftp105 . "/tmp/Servicios Especiales/generacion_" . $nombrearchivo . ".csv"
    ];

    foreach ($archivos as $origen => $destino)
    {
        if (!copy($origen, $destino))
        {
            $estado = 0;
            $mensaje = 'No se pudo copiar los Archivos de respaldo al historico';
            break; // Detiene la ejecución después del primer error
        }
    }
    # Ubicamos los archivos
    // $archivos = [
    //     "/tmp/Servicios Especiales/generacion" . $nombrearchivo . ".csv"
    // ];

    $permisos = ssh2_sftp_chmod($sftp105, "/tmp/Servicios Especiales/generacion_" . $nombrearchivo . ".csv", 4095);
    if (!$permisos)
    {

        $estado = 0;
        $mensaje = 'No se pudo dar permisos al archivo en el servidor 10.50.2.105 en la ruta /tmp/Servicios Especiales';

        $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
        header('Content-Type: application/json');
        echo json_encode($endJSON);
    };
    #otorganos permisos a todos los archivos
    // foreach ($archivos as $archivo)
    // {
    //     ssh2_sftp_chmod($sftp105, $archivo, 4095);
    // }

    $funcionrespaldogen = array(
        'ABONOARGENTINA' => "SELECT mensaje_salida, estado_salida FROM fun_abonoargentina_insertar_generacion('" . $fecha . "')",
        'CLUBPROTECCIONFAMILIAR' => "SELECT mensaje_salida, estado_salida FROM fun_clubproteccionfamiliar_insertar_generacion('" . $fecha . "')",
        'CREDITOAUTOMOTRIZ' => "SELECT mensaje_salida, estado_salida FROM fun_creditoautomotriz_insertar_generacion('" . $fecha . "')",
        'DISTRIBUCIONARGENTINA' => "SELECT mensaje_salida, estado_salida FROM fun_distribucionargentina_insertar_generacion('" . $fecha . "')",
        'ESTADOCUENTAAFORE' => "SELECT mensaje_salida, estado_salida FROM fun_estadocuentaafore_insertar_generacion('" . $fecha . "')",
        'TRASPASOS' => "SELECT mensaje_salida, estado_salida FROM fun_cierre_traspasos(3,'" . $fecha . "')"
    );

    $funciongeneracion = $funcionrespaldogen[$campain] ?? null;

    $query = $conn105->prepare($funciongeneracion);
    $query->execute();

    while ($rw = $query->fetch(PDO::FETCH_ASSOC))
    {
        $estado = $rw['estado_salida'];
        $mensaje = $rw['mensaje_salida'];
    }
    header('Content-Type: application/json');
    echo json_encode(array('estado' => $estado, 'mensaje' => $mensaje));

}
