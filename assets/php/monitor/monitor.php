<?php
include '../conexiones.php';

$opc = $_POST['opc'];

switch ($opc)
{
    case 'ces_campain':
        $fecha = trim($_POST['fecha']);
        $campain = trim($_POST['campain']);
        ces_campain($fecha, $campain);
        break;
    case 'medallia':
        $fecha = trim($_POST['fecha']);
        medallia($fecha);
        break;
    case 'coppel_pay':
        $fecha = trim($_POST['fecha']);
        coppel_pay($fecha);
        break;
    case 'lym':
        $fecha = trim($_POST['fecha']);
        lym($fecha);
        break;
    case 'datos_erroneos':
        $fecha = trim($_POST['fecha']);
        datos_erroneos($fecha);
        break;
    case 'referencias_incompletas':
        $fecha = trim($_POST['fecha']);
        referencias_incompletas($fecha);
        break;
    case 'solicitud_de_credito_argentina':
        $fecha = trim($_POST['fecha']);
        solicitud_de_credito_argentina($fecha);
        break;
    case 'confirmacion_off':
        $fecha = trim($_POST['fecha']);
        confirmacion_off($fecha);
        break;
    case 'confirmacion_on':
        $fecha = trim($_POST['fecha']);
        confirmacion_on($fecha);
        break;
    case 'campanas_unicas':
        $fecha = trim($_POST['fecha']);
        $campain = trim($_POST['campain']);
        campanas_unicas($fecha, $campain);
        break;
    case 'supervision_telefonica_argentina':
        $fecha = trim($_POST['fecha']);
        supervision_telefonica_argentina($fecha);
        break;
    case 'buscararchivo':
        buscararchivo();
        break;
}

function ces_campain($fecha, $campain)
{

    $conn36 = conect_36();
    $conn105_ces = conect_105();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $directorioproductivo = array(
        'ABONOARGENTINA' => 'directorio_abonoargentina',
        'CLUBPROTECCIONFAMILIAR' => 'directorio_clubproteccionfamiliar',
        'CREDITOAUTOMOTRIZ' => 'directorio_creditoautomotriz',
        'DISTRIBUCIONARGENTINA' => 'directorio_distribucionargentina',
        'ESTADOCUENTAAFORE' => 'directorio_estadocuentaafore',
        'TRASPASOS' => 'directorio_traspasos'
    );

    $generacionproductivo = array(
        'ABONOARGENTINA' => 'generacion_abonoargentina',
        'CLUBPROTECCIONFAMILIAR' => 'generacion_clubproteccionfamiliar',
        'DISTRIBUCIONARGENTINA' => 'generacion_distribucionargentina',
        'CREDITOAUTOMOTRIZ' => 'generacion_creditoautomotriz',
        'ESTADOCUENTAAFORE' => 'generacion_estadocuentaafore',
        'TRASPASOS' => 'directorio_traspasos'
    );

    $movimientosproductivo = array(
        'ABONOARGENTINA' => 'movimientos_abonoargentina_detalles',
        'CLUBPROTECCIONFAMILIAR' => 'movimientos_club_proteccion_fam_detalles',
        'DISTRIBUCIONARGENTINA' => 'movimientos_distribucionargentina_detalles',
        'CREDITOAUTOMOTRIZ' => 'movimientos_creditoautomotriz_detalles',
        'ESTADOCUENTAAFORE' => 'movimientos_estadodecuentaafore_detalles',
        'TRASPASOS' => 'mov_traspasos_detalles'
    );

    $directorioTabla = $directorioproductivo[$campain] ?? null;
    $generacionTabla = $generacionproductivo[$campain] ?? null;
    $movimientosTabla = $movimientosproductivo[$campain] ?? null;

    if ($campain == 'CREDITOAUTOMOTRIZ')
    {
        // Construye las consultas SQL utilizando las tablas obtenidas
        $queryprod = $conn36->prepare('SELECT
    (SELECT COUNT(*) FROM ' . $generacionTabla . ') as generacion,
    (SELECT COUNT(*) FROM ' . $directorioTabla . ') as directorio,
    (SELECT COUNT(*) FROM ' . $movimientosTabla . ' WHERE fec_movto = :fecha) as movimientos
');

        $queryprod->bindParam(':fecha', $fecha);
        $queryprod->execute();
        $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);
    }
    else
    {
        // Construye las consultas SQL utilizando las tablas obtenidas
        $queryprod = $conn36->prepare('SELECT
                    (SELECT COUNT(*) FROM ' . $generacionTabla . ') as generacion,
                    (SELECT COUNT(*) FROM ' . $directorioTabla . ') as directorio,
                    (SELECT COUNT(*) FROM ' . $movimientosTabla . ' WHERE fecha_movto = :fecha) as movimientos
        ');

        $queryprod->bindParam(':fecha', $fecha);
        $queryprod->execute();
        $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    }
    //print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );

    $directoriohistorico = array(
        'ABONOARGENTINA' => 'directorio_abonoargentina',
        'CLUBPROTECCIONFAMILIAR' => 'directorio_clubproteccionfamiliar',
        'CREDITOAUTOMOTRIZ' => 'directorio_creditoautomotriz',
        'DISTRIBUCIONARGENTINA' => 'directorio_distribucionargentina',
        'ESTADOCUENTAAFORE' => 'directorio_estadocuentaafore',
        'TRASPASOS' => 'directorio_traspasos'
    );

    $generacionhistorico = array(
        'ABONOARGENTINA' => 'generacion_abonoargentina',
        'CLUBPROTECCIONFAMILIAR' => 'generacion_clubproteccionfamiliar',
        'DISTRIBUCIONARGENTINA' => 'generacion_distribucionargentina',
        'CREDITOAUTOMOTRIZ' => 'generacion_creditoautomotriz',
        'ESTADOCUENTAAFORE' => 'generacion_estadocuentaafore',
        'TRASPASOS' => 'carga_traspasos'
    );

    $movimientoshistorico = array(
        'ABONOARGENTINA' => 'movimientos_abonoargentina',
        'CLUBPROTECCIONFAMILIAR' => 'movimientos_clubproteccionfamiliar',
        'DISTRIBUCIONARGENTINA' => 'movimientos_distribucionargentina',
        'CREDITOAUTOMOTRIZ' => 'movimientos_creditoautomotriz',
        'ESTADOCUENTAAFORE' => 'movimientos_estadocuentaafore',
        'TRASPASOS' => 'mov_traspasos'
    );

    $directorioTablahis = $directoriohistorico[$campain] ?? null;
    $generacionTablahis = $generacionhistorico[$campain] ?? null;
    $movimientosTablahis = $movimientoshistorico[$campain] ?? null;

    if ($campain == 'CREDITOAUTOMOTRIZ')
    { // es la unica campaña con el nombre de la columna diferente 

        $queryhist = $conn105_ces->prepare('SELECT
                (SELECT COUNT(*) FROM ' . $generacionTablahis . '_' . $year . $month . ' WHERE fec_generado = :fecha) as generacion_historico,
                (SELECT COUNT(*) FROM ' . $directorioTablahis . '_' . $year . $month . ' WHERE fec_copiado::date = :fecha::date) as directorio_historico,
                (SELECT COUNT(*) FROM ' . $movimientosTablahis . '_' . $year . $month . ' WHERE fec_movto = :fecha::date) as movimientos_historico
    ');

        $queryhist->bindParam(':fecha', $fecha);
        $queryhist->execute();

    }
    else
    {
        $queryhist = $conn105_ces->prepare('SELECT
                    (SELECT COUNT(*) FROM ' . $generacionTablahis . '_' . $year . $month . ' WHERE fec_copiado::date = :fecha) as generacion_historico,
                    (SELECT COUNT(*) FROM ' . $directorioTablahis . '_' . $year . $month . ' WHERE fec_copiado::date = :fecha) as directorio_historico,
                    (SELECT COUNT(*) FROM ' . $movimientosTablahis . '_' . $year . $month . ' WHERE fecha_movto = :fecha) as movimientos_historico
        ');

        $queryhist->bindParam(':fecha', $fecha);
        $queryhist->execute();

    }
    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);
    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);

}
function medallia($fecha)
{

    $conn82 = conect_82_medallia();
    $conn142 = conect_142_campunica();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn82->prepare('SELECT
    (SELECT COUNT(*) FROM carga_medallia_reciclado WHERE fecha_generacion::date = :fecha) as generacion,
    (SELECT COUNT(*) FROM mae_directoriogeneralmedallia) as directorio,
    (SELECT COUNT(*) FROM movimientos_medallia_detalles WHERE fec_movto::date = :fecha) as movimientos
');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );


    $queryhist = $conn142->prepare('SELECT
(SELECT COUNT(*) FROM carga_medallia_' . $year . $month . ' WHERE fecha_generacion = :fecha ) as generacion_historico,
(SELECT COUNT(*) FROM DirectorioGeneralMedallia_' . $year . $month . ' WHERE fec_fechainsercion::Date = :fecha) as directorio_historico,
(SELECT COUNT(*) FROM Movimientos_Medallia_' . $year . $month . ' WHERE fec_movto::Date = :fecha) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
// echo json_encode($resultados_historico);
// echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);


}
function coppel_pay($fecha)
{

    $conn215 = conect_215();
    $conn105_cpay = conect_105_cpay();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn215->prepare('SELECT
    (SELECT COUNT(*) FROM mae_Coppelpay) as generacion,
    (SELECT COUNT(*) FROM mae_Coppelpay) as directorio,
    (SELECT COUNT(*) FROM movimientos_coppelpay_detalles WHERE fecha_hora_inicio::date = :fecha) as movimientos
');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );


    $queryhist = $conn105_cpay->prepare('SELECT
(SELECT COUNT(*) FROM Directorio_CoppelPay_' . $year . $month . ' WHERE fecha_copiado::Date = :fecha) as generacion_historico,
(SELECT COUNT(*) FROM Directorio_CoppelPay_' . $year . $month . ' WHERE fecha_copiado::Date = :fecha) as directorio_historico,
(SELECT COUNT(*) FROM Movimientos_CoppelPay_' . $year . $month . ' WHERE fecha_hora_inicio::Date = :fecha) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
// echo json_encode($resultados_historico);
// echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);

}
function lym($fecha)
{

    $conn88 = conect_88();
    $conn105_lym = conect_105_lym();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn88->prepare('SELECT
                    (SELECT COUNT(*) FROM his_generacionlym where fec_copiado = :fecha) as generacion,
                    (SELECT COUNT(*) FROM his_directoriolym where fec_depositado = :fecha) as directorio,
                    (SELECT COUNT(*) FROM his_movimientos_actualizacion_lym WHERE fec_horainicio::date = :fecha) as movimientos
    ');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );


    $queryhist = $conn105_lym->prepare('SELECT
                (SELECT COUNT(*) FROM his_generacionlym_' . $year . $month . ' WHERE fec_copiado = :fecha) as generacion_historico,
                (SELECT COUNT(*) FROM his_directoriolym_' . $year . $month . ' WHERE fec_depositado = :fecha) as directorio_historico,
                (SELECT COUNT(*) FROM mov_actualizadomicilios_' . $year . $month . ' WHERE fec_horainicio::date = :fecha) as movimientos_historico
    ');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
    // echo json_encode($resultados_historico);
    // echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);
}

function datos_erroneos($fecha)
{

    $conn117 = conect_117();
    $conn105_de = conect_105_de();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn117->prepare('SELECT
    (SELECT COUNT(*) FROM generacion_datoserroneos) as generacion,
    (SELECT COUNT(*) FROM directorio_datoserroneos_respaldo where fecha_insercion = :fecha) as directorio,
    (SELECT COUNT(*) FROM movimientos_datoserroneos_detalles WHERE hora_inicio::date = :fecha) as movimientos
');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );


    $queryhist = $conn105_de->prepare('SELECT
(SELECT COUNT(*) FROM generacion_datoserroneos_' . $year . $month . ' WHERE fec_generacion::Date = :fecha) as generacion_historico,
(SELECT COUNT(*) FROM directorio_datoserroneos_' . $year . $month . ' WHERE fecha_insercion = :fecha) as directorio_historico,
(SELECT COUNT(*) FROM movimientos_datoserroneos_' . $year . $month . ' WHERE hora_inicio::date = :fecha) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
// echo json_encode($resultados_historico);
// echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);


}

function referencias_incompletas($fecha)
{

    $conn126 = conect_126();
    $conn142_ref = conect_142_ref();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn126->prepare('SELECT
    (SELECT COUNT(*) FROM generacion_referencias_incompletas_' . $year . $month . ' where fec_generacion::date = :fecha) as generacion,
    (SELECT COUNT(*) FROM directorio_referenciasincompletas_respaldo  where fec_generacion::date = :fecha) as directorio,
    (SELECT COUNT(*) FROM his_clientestrabajadosreferenciasincompletascat  where fec_llamada::Date = :fecha) as movimientos
');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );


    $queryhist = $conn142_ref->prepare('SELECT
(SELECT COUNT(*) FROM his_generacion_referencias_incompletas_' . $year . $month . ' WHERE fec_generacion::Date = :fecha) as generacion_historico,
(SELECT COUNT(*) FROM Mov_CarteraReferenciasIncompletasCAT_' . $year . $month . ' WHERE fec_generacion::date = :fecha) as directorio_historico,
(SELECT COUNT(*) FROM Mov_ClientesTrabajadosReferenciasIncompletasCAT_' . $year . $month . ' WHERE fec_llamada::Date = :fecha) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
// echo json_encode($resultados_historico);
// echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);

}

function solicitud_de_credito_argentina($fecha)
{

    $conn184 = conect_184();
    $conn142_sca = conect_142_sca();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn184->prepare('SELECT
    (SELECT COUNT(*) FROM ctl_registro_cliente) as generacion,
    (SELECT COUNT(*) FROM ctl_registro_cliente) as directorio,
    (SELECT COUNT(*) FROM mov_solicitudcreditoenlineahist where fec_movto::date = :fecha) as movimientos
');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );


    $queryhist = $conn142_sca->prepare('SELECT
(SELECT COUNT(*) FROM tablageneracion_solicitud_argentina_' . $year . $month . ' WHERE fecha_copiado = :fecha) as generacion_historico,
(SELECT COUNT(*) FROM directorio_solicitudescredito_argentina_' . $year . $month . ' WHERE created_at::date = :fecha) as directorio_historico,
(SELECT COUNT(*) FROM movimientos_solicitud_argentina_' . $year . $month . ' WHERE fec_movto::Date = :fecha) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
// echo json_encode($resultados_historico);
// echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);
}

function confirmacion_off($fecha)
{

    $conn82 = conect_82_conoff();
    $conn142_conoff = conect_142_conoff();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn82->prepare('SELECT
    (SELECT COUNT(*) FROM ctl_directoriocontactabilidad) as generacion,
    (SELECT COUNT(*) FROM ctl_directoriocontactabilidad) as directorio,
    (SELECT COUNT(*) FROM mov_clientestrabajadoscontactabilidad_his where fec_horainicio::date = :fecha) as movimientos
');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );


    $queryhist = $conn142_conoff->prepare('SELECT
(SELECT COUNT(*) FROM intentos_confirmacion_off_' . $year . $month . ' WHERE fecha_depositado = :fecha) as generacion_historico,
(SELECT COUNT(*) FROM ctl_directorioconfirmacionoff_' . $year . $month . ' WHERE fec_copiado = :fecha::date) as directorio_historico,
(SELECT COUNT(*) FROM Mov_ClientesTrabajadosConfirmacionOff_' . $year . $month . ' WHERE fec_horainicio::date = :fecha::date) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    //print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
// echo json_encode($resultados_historico);
// echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);

}

function confirmacion_on($fecha)
{

    $conn224 = conect_224();
    $conn142_conoff = conect_142_sca();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn224->prepare('SELECT
    (SELECT COUNT(*) FROM Mae_Confirmacion_On where idu_fec_alta_telefono::date = :fecha) as generacion,
    (SELECT COUNT(*) FROM Mae_Confirmacion_On where idu_fec_alta_telefono::date = :fecha) as directorio,
    (SELECT COUNT(*) FROM mov_clientestrabajadosconfirmacionon WHERE fec_horainicio::Date = :fecha) as movimientos
');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosProd);

    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );


    $queryhist = $conn142_conoff->prepare('SELECT
(SELECT COUNT(*) FROM Mae_Confirmacion_On_' . $year . $month . ' WHERE idu_fec_alta_telefono::date = :fecha) as generacion_historico,
(SELECT COUNT(*) FROM Mae_Confirmacion_On_' . $year . $month . ' WHERE idu_fec_alta_telefono::date = :fecha) as directorio_historico,
(SELECT COUNT(*) FROM movimientos_confirmacion_online_' . $year . $month . ' WHERE fec_fin_llamada = :fecha) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
// echo json_encode($resultados_historico);
// echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);

}

function campanas_unicas($fecha, $campain)
{

    $conn163 = conect_163();
    $conn142 = conect_142_campunica();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);

    $queryprod = $conn163->prepare('SELECT
    (SELECT COUNT(*) FROM ' . $campain . '_historica where fecha_carga_admin_campana::date = :fecha) as generacion,
    (SELECT COUNT(*) FROM ' . $campain . '_historica where fecha_carga_admin_campana::date = :fecha) as directorio,
    (SELECT COUNT(*) FROM campanaunica_resultados where nomcampana = :campain and fechamovto = :fecha) as movimientos
');
    $queryprod->bindParam(':fecha', $fecha);
    $queryprod->bindParam(':campain', $campain);
    $queryprod->execute();
    $resultadosProd = $queryprod->fetchAll(PDO::FETCH_ASSOC);
    // print_r($resultadosProd);


    // Combina los resultados en un solo array asociativo
    $resultados_productivo = array(
        'generacion' => $resultadosProd[0]['generacion'],
        'directorio' => $resultadosProd[0]['directorio'],
        'movimientos' => $resultadosProd[0]['movimientos']
    );

    //no hay directorio ni generacion en el historico
    $queryhist = $conn142->prepare('SELECT
(SELECT COUNT(*) FROM campanaunica_resultados_' . $year . $month . ' where nomcampana = :campain and fechamovto = :fecha limit 0) as generacion_historico, 
(SELECT COUNT(*) FROM campanaunica_resultados_' . $year . $month . ' where nomcampana = :campain and fechamovto = :fecha limit 0) as directorio_historico,
(SELECT COUNT(*) FROM campanaunica_resultados_' . $year . $month . ' where nomcampana = :campain and fechamovto = :fecha) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->bindParam(':campain', $campain);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    //  print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );

    // Devuelve los resultados en formato JSON
// echo json_encode($resultados_historico);
// echo json_encode($resultados_productivo);

    $combinedResults = array(
        'productivo' => $resultados_productivo,
        'historico' => $resultados_historico
    );

    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($combinedResults);

}

function supervision_telefonica_argentina($fecha)
{

    $conn142_sta = conect_142_sca();

    $year = substr($fecha, 0, 4);
    $month = substr($fecha, 5, 2);


    $queryhist = $conn142_sta->prepare('SELECT
(SELECT COUNT(*) FROM Mae_Confirmacion_On_' . $year . $month . ' WHERE idu_fec_alta_telefono::date = :fecha) as generacion_historico,
(SELECT COUNT(*) FROM Mae_Confirmacion_On_' . $year . $month . ' WHERE idu_fec_alta_telefono::date = :fecha) as directorio_historico,
(SELECT COUNT(*) FROM movimientos_confirmacion_online_' . $year . $month . ' WHERE fec_fin_llamada = :fecha) as movimientos_historico
');

    $queryhist->bindParam(':fecha', $fecha);
    $queryhist->execute();

    $resultadosHist = $queryhist->fetchAll(PDO::FETCH_ASSOC);

    // print_r($resultadosHist);

    // Combina los resultados en un solo array asociativo
    $resultados_historico = array(
        'generacion' => $resultadosHist[0]['generacion_historico'],
        'directorio' => $resultadosHist[0]['directorio_historico'],
        'movimientos' => $resultadosHist[0]['movimientos_historico']
    );
    // print_r($combinedResults);

    // Encode the combined results as JSON and output them
    header('Content-Type: application/json');
    echo json_encode($resultados_historico);
}

function buscararchivo(){
    
}


?>