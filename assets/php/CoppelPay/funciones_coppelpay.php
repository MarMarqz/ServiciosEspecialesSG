<?
include '../conexiones.php';
$GLOBALS["rutasMovimientosL"] = array("\\\\10.50.8.118\\rep_files\\", "\\\\10.50.8.119\\rep_files\\");
$opc = $_POST['opc'];

switch ($opc)
{
    case 'generacion':
        generacion_coppelpay();
        break;
    case 'enviarcorreo':
        break;
    case 'insertarmovimientos':
        $fecha = trim($_POST['fecha']);
        movimientosl_coppelpay($fecha);
        break;
    case 'respaldar':
        $fecha = trim($_POST['fecha']);
        respaldar_coppelpay($fecha);
        break;
}
function generacion_coppelpay(){

}

function movimientosl_coppelpay($fecha){

}

function respaldar_coppelpay($fecha){
    
}
