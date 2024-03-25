<?php

include '../conexiones.php';

$opc = $_POST['opc'];

switch ($opc)
{
    case 'copymovtos':
        $fecha = trim($_POST['fecha']);
        copiarmovtos($fecha);
        break;
    case 'CopiarDirectorio':
        $campain = trim($_POST['campain']);
        $fecha = trim($_POST['fecha']);
        CopiarDirectorio($fecha);
        break;
    case 'Cobertura':
        $fecha = trim($_POST['fecha']);
        GenerarCobertura($fecha);
        break;
    case 'MovtosTtrab':
        $fecha = trim($_POST['fecha']);
        GenerarMovtosTtrab($fecha);
        break;
}

function copiarmovtos($fecha)
{

    $estado = 0;
    $respuesta = '';

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    #conexiones a las base de datos
    $conn184 = conect_184();
    $conn142 = conect_142_sca();

    #Conexiones sftp 
    $sftp142 = sftp_142();
    $sftp184 = sftp_184();

    #Programador del futuro, si te toca ver esto, no me juzges si vieras la funcion, te sacarias los ojos
    # porque fue lo que hice yo y llegue a la conclusion de que esto era lo unico que hacia, asi que te doy
    # un sabio consejo, al programdaor del pasado no se le ocurrio de otra forma
    $consulta = $conn184->prepare("COPY (SELECT 
						                    ridu_cliente,
						                    rnum_cliente,
						                    rclv_movimiento,
						                    ropc_tipomovimiento, 
						                    rnum_solicitud,
						                    rfec_nacimiento,
						                    rfec_movto,  
						                    '0'||rnum_telefono::text, 
						                    ropc_tipotelefono, 
						                    case when ropc_tipotelefono = 1 then 'F' else 'M' end as ropc_tipored,
						                    rnum_empleado, 
						                    rdes_nombre,   
						                    rdes_apellidopaterno,
						                    rdes_apellidomaterno,
						                    'T'::text as tipo_solicitud,
						                    rnum_tipocartera,
						                    rstatusmov,
						                    rid_campania
					                    FROM fun_obtienemovimientos_cat_arg() 
					                        WHERE rfec_movto::date= '$fecha') 
                                TO '/tmp/serviciosEspeciales/movimientos_solcredito.csv' DELIMITER '|' ");
    $consulta->execute();

    if (!copy("ssh2.sftp://" . $sftp184 . "/tmp/serviciosEspeciales/movimientos_solcredito.csv", "ssh2.sftp://" . $sftp142 . "/tmp/movimientos_solcredito.csv"))
    {

        $estado = 1;
        $mensaje = 'No se pudo copiar Archivo de movimientos';

        $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
        return;
    }
    ;

    $permisos = ssh2_sftp_chmod($sftp142, "/tmp/movimientos_solcredito.csv.csv", 4095);

    $TablaHistorica = "movimientos_solicitud_argentina_" . $year . $month;

    $consulta142 = $conn142->prepare("DELETE FROM $TablaHistorica WHERE fec_movto::date = :fecha");
    $consulta142->bindParam(':fecha', $fecha);
    $consulta142->execute();


    $query142 = $conn142->prepare("COPY $TablaHistorica FROM '/tmp/movimientos_solcredito.csv' delimiter '|'");
    $query142->execute();

    $estado = 0;
    $mensaje = 'Todo Bien🎉🎊🎈';

    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
    header('Content-Type: application/json');
    echo json_encode($endJSON);
    return;

}

function GenerarMovtosTtrab($fecha)
{

    $estado = 0;
    $respuesta = '';

    #conexiones a las base de datos
    $conn142 = conect_142_sca();

    $query = $conn142->prepare("SELECT estado, mensaje FROM fn_clientesdistintos_solicitudcredito('$fecha')");
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

function CopiarDirectorio($fecha)
{


    #conexiones a las base de datos
    $conn184 = conect_184();
    $conn142 = conect_142_sca();

    #Conexiones sftp 
    $sftp142 = sftp_142();
    $sftp184 = sftp_184();

    $fechaMes = date("Ymd", strtotime("$fecha"));

    #Programador del futuro, si te toca ver esto, no me juzges si vieras la funcion, te sacarias los ojos
    # porque fue lo que hice yo y llegue a la conclusion de que esto era lo unico que hacia, asi que te doy
    # un sabio consejo, al programdaor del pasado no se le ocurrio de otra forma
    $consulta = $conn184->prepare("Ccopy (SELECT *,
		                                        'T'::text as tipo_solicitud,
		                                        '$fecha'::date as fecha_copiado
		                                    FROM fun_obtienedirectorio_cat_arg_buena('$fecha') to '/tmp/serviciosEspeciales/Directorio_SolicitudArgentina.csv' delimiter '|' )");
    $consulta->execute();

    if (!copy("ssh2.sftp://" . $sftp184 . "'/tmp/serviciosEspeciales/Directorio_SolicitudArgentina.csv", "ssh2.sftp://" . $sftp142 . "/tmp/Directorio_SolicitudArgentina.csv"))
    {

        $estado = 1;
        $mensaje = 'No se pudo copiar Archivo de Directorio';

        $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
        return;
    }
    ;

    $permisos = ssh2_sftp_chmod($sftp142, "/tmp/Directorio_SolicitudArgentina.csv", 4095);

    $query = $conn142->prepare("SELECT fn_inserta_dir_solcredito_arg($fecha)"); # Programador der futuro, esta funcion es absurda, solo crea la tabla del directorio y es diaria mamon (yo no la hice)
    $query->execute();

    $query142 = $conn142->prepare("COPY directorio_solicitudescredito_argentina_' . $fechaMes. ' FROM '/tmp/Directorio_SolicitudArgentina.csv'");
    $query142->execute();

    /*
     la función fun_dirsolarg se utiliza para asegurar que todos los datos de solicitudes de crédito 
     para un mes específico estén presentes en la tabla principal, 
     insertando cualquier dato faltante de tablas secundarias. 
     Esto es útil para mantener la integridad de los datos y asegurar que no haya días sin registros 
     en el período de tiempo especificado.
    */

    #Esta funcion la pidio que la agregaramos un sujeto de BI que la neta me castra, igual esta funcion no es necesaria
    #Pero este compa lloró para que la pusieramos
    $query142 = $conn142->prepare("SELECT estado, mensaje FROM fun_dirsolarg()");
    $query142->execute();

    while ($rw = $query142->fetch(PDO::FETCH_ASSOC))
    {
        $estado = $rw['estado'];
        $mensaje = $rw['mensaje'];
    }
    ;

    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
    header('Content-Type: application/json');
    echo json_encode($endJSON);
    return;

}

function GenerarCobertura($fecha)
{

    #conexiones a las base de datos
    $conn142 = conect_142_sca();

    $query = $conn142->prepare("SELECT fn_tablageneracion_solicitudcredito_arg('$fecha')");
    $query->execute();

    // while($rw=$query->fetch(PDO::FETCH_ASSOC))
    // {
    //     $estado = $rw['estado'];
    //     $mensaje= $rw['mensaje'];
    // }

    $estado = 0;
    $mensaje = 'Supongo que todo bien 🥴🤔';

    $endJSON = array('estado' => $estado, 'mensaje' => $mensaje);
    header('Content-Type: application/json');
    echo json_encode($endJSON);
}