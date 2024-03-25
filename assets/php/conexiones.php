<?php 
/*

Esto puede funcionar

function conectar($host, $bd_name, $user, $pass) {
    $conn = new PDO('pgsql:host=' . $host . ';dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}


$conn_36 = conectar('10.50.8.36', 'ces', 'syscredito', '4e37b030c9239ad04447ed9000a6a4de');
$conn_163 = conectar('10.50.12.163', 'campunicaweb', 'reportes', 'repcredito');
$conn_117 = conectar('10.50.12.163', 'campunicaweb', 'reportes', 'repcredito');
$conn_163 = conectar('10.50.12.163', 'campunicaweb', 'reportes', 'repcredito');
$conn_163 = conectar('10.50.12.163', 'campunicaweb', 'reportes', 'repcredito');
$conn_163 = conectar('10.50.12.163', 'campunicaweb', 'reportes', 'repcredito');

o esto tambien se puede implementar

class Database {
    private static $instances = array();

    private function __construct() {}

    public static function getInstance($host, $dbname, $user, $pass) {
        $key = md5($host . $dbname . $user . $pass);
        if (!isset(self::$instances[$key])) {
            try {
                $conn = new PDO('pgsql:host=' . $host . ';dbname=' . $dbname, $user, $pass);
                $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
                self::$instances[$key] = $conn;
            } catch (PDOException $e) {
                echo "Error de conexión: " . $e->getMessage();
            }
        }
        return self::$instances[$key];
    }
}

$conn_36 = Database::getInstance('10.50.8.36', 'ces', 'syscredito', '4e37b030c9239ad04447ed9000a6a4de');
$conn_163 = Database::getInstance('10.50.12.163', 'campunicaweb', 'reportes', 'repcredito');



*/
//  -------------------------------------- SERVIDORES PRODCUTIVO ------------------------------------------
function conect_36() // CES
{
    $bd_name = "ces";
    $user = "syscredito";
    $pass = "4e37b030c9239ad04447ed9000a6a4de";
    $conn = new PDO('pgsql:host=10.50.8.36;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}

function conect_163() //Campana Unica
{
    $bd_name = "campunicaweb";
    $user = "reportes";
    $pass = "repcredito";
    $conn = new PDO('pgsql:host=10.50.12.163;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}
function conect_117() // Datos Erroneos
{
    $bd_name = "e_commerce";
    $user = "syscredito";
    $pass = "GdjN2X0w)c4iADheC>Gw(iyS<eGGwvEn4vJcNZa}[[O>2DJ7huAAyh>pcfa1<6Ym";
    $conn = new PDO('pgsql:host=10.50.3.117;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}
function conect_215() // Coppel Pay
{
    $bd_name = "coppelpay";
    $user = "syscredito";
    $pass = "2587fb5cd0e0c6112394cf4b033ce6f7";
    $conn = new PDO('pgsql:host=10.44.1.215;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}
function conect_88() //Actualizacion de Domicilios LyM
{
    $bd_name = "actualizacion_domicilios_lym";
    $user = "reportes";
    $pass = "ff7b3106de28225ca601288654f6c57a";
    $conn = new PDO('pgsql:host=10.44.2.88;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}
function conect_84() //El otro de LyM
{
    $bd_name = "actualizaciondomicilioslym";
    $user = "sysdatos";
    $pass = "f7c0853fd9048a496fa6b70eb21f4fb6";
    $conn = new PDO('pgsql:host=10.27.113.84;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}
function conect_82_conoff() // Confirmacion OFF
{
    $bd_name = "contactabilidadoffline";
    $user = "syscredito";
    $pass = "7ebecdd4f3e6e37a45313561f5abc3a5";
    $conn = new PDO('pgsql:host=10.50.2.82;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}
function conect_82_medallia() //Medallia
{
    $bd_name = "medallia";
    $user = "syscredito";
    $pass = "7ebecdd4f3e6e37a45313561f5abc3a5";
    $conn = new PDO('pgsql:host=10.50.2.82;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}
function conect_126()  //Referencias Incompletas
{
    $bd_name = "referenciasincompletas";
    $user = "reportes";
    $pass = "ff7b3106de28225ca601288654f6c57a";
    $conn = new PDO('pgsql:host=10.44.2.126;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}

function conect_184() // Solicitud de credito Argentina
{
    $bd_name = "solicitudenlineasud";
    $user = "ccventas";
    $pass = "6fc8f75fd8047d07032686cfd1dca20f";
    $conn = new PDO('pgsql:host=10.50.3.184;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
    PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
    return $conn;
}

// ---------------------------- SERVIDORES HISTORICO ---------------------------------------------------
function conect_105() // CES
{
    $bd_name = "CES";
    $user = "syscredito";
    $pass = "0d776c440ab08e493f36f6416e3549ca";
    $conn = new PDO('pgsql:host=10.50.2.105;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}

function conect_105_lym() // LYM
{
    $bd_name = "tramites";
    $user = "syscredito";
    $pass = "0d776c440ab08e493f36f6416e3549ca";
    $conn = new PDO('pgsql:host=10.50.2.105;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}

function conect_105_de() // Datos Erroneos
{
    $bd_name = "e_commerce";
    $user = "syscredito";
    $pass = "0d776c440ab08e493f36f6416e3549ca";
    $conn = new PDO('pgsql:host=10.50.2.105;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}

function conect_105_cpay() //Coppel Pay
{
    $bd_name = "coppel_pay";
    $user = "syscredito";
    $pass = "0d776c440ab08e493f36f6416e3549ca";
    $conn = new PDO('pgsql:host=10.50.2.105;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}
function conect_224() //Confirmacion ON
{
    $bd_name = "credito";
    $user = "syscredito";
    $pass = "2587fb5cd0e0c6112394cf4b033ce6f7";
    $conn = new PDO('pgsql:host=10.50.0.224;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}

function conect_142_campunica() // Las de campanñas Unicas y medallia
{
    $bd_name = "campanaunica";
    $user = "sysconsultas";
    $pass = "847ba52434884eabb440659d2376ef83";
    $conn = new PDO('pgsql:host=10.44.15.142;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}

function conect_142_conoff() // Confirmacion Off
{
    $bd_name = "contactoefectivo";
    $user = "sysconsultas";
    $pass = "847ba52434884eabb440659d2376ef83";
    $conn = new PDO('pgsql:host=10.44.15.142;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}

function conect_142_ref() // Referencias Incompletas
{
    $bd_name = "referenciasincompletas";
    $user = "sysconsultas";
    $pass = "847ba52434884eabb440659d2376ef83";
    $conn = new PDO('pgsql:host=10.44.15.142;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}

function conect_142_sca() // Solicitud de credito Argentina
{
    $bd_name = "e_commerce";
    $user = "sysconsultas";
    $pass = "847ba52434884eabb440659d2376ef83";
    $conn = new PDO('pgsql:host=10.44.15.142;dbname=' . $bd_name, $user, $pass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES | PDO::ATTR_ERRMODE | PDO::ATTR_DEFAULT_FETCH_MODE, 
                        PDO::ERRMODE_EXCEPTION | PDO::FETCH_OBJ);
   # $conn->query("set names utf8;");
    return $conn;
}



function sftp_163()
{
    $connection = ssh2_connect("10.50.12.163", "22");
    if (!$connection) {
        exit("Error en ping al 10.50.12.163 puerto 22");
    }
	$auth = ssh2_auth_password($connection, "syscreditoadm", "RcOJwXhSeMruyiY0FLniZDbhZqmXX191");
    if (!$auth) {
        exit("Error en autenticacion servidor 10.50.12.163 usuario syscreditoadm contraseña fad6eecc746fb2786f8578cf53f98a1b");
    }
	$sftp = ssh2_sftp($connection);
    if (!$sftp) {
        exit("Error en conexion FTP al 10.50.12.163");
    }

	return $sftp;
}

function sftp_36()
{
    $connection = ssh2_connect("10.50.8.36", "22");
	ssh2_auth_password($connection, "syscredito", "6YhZgeu377kEwADBhPysoCVGQHgWAAM5");
	$sftp = ssh2_sftp($connection);

	return $sftp;
}


function sftp_105()
{
    $connection = ssh2_connect("10.50.2.105", "22");
	ssh2_auth_password($connection, "syscredito", "12cyyy95d9fd2ae183cb37b7742meg90");
	$sftp = ssh2_sftp($connection);

	return $sftp;
}

function sftp_88()
{
    $connection = ssh2_connect("10.44.2.88", "22");
	ssh2_auth_password($connection, "reportes", "km8h1igyfmh185");
	$sftp = ssh2_sftp($connection);

	return $sftp;
}


function sftp_84()
{
    $connection = ssh2_connect("10.27.113.84", "22");
	ssh2_auth_password($connection, "sysdesarrollo", "17z562f21412dbdb555c912dbf327mx6");
	$sftp = ssh2_sftp($connection);
    

	return $sftp;
}

function sftp_142()
{
    $connection = ssh2_connect("10.44.15.142", "22");
	ssh2_auth_password($connection, "syscreditoadm", "fad6eecc746fb2786f8578cf53f98a1b");
	$sftp = ssh2_sftp($connection);
    
	return $sftp;
}

function sftp_184()
{
    $connection = ssh2_connect("10.50.3.184", "22");
	ssh2_auth_password($connection, "ccventas", "GD{Y2K2BTv[28f:)[x,lp}K/A");
	$sftp = ssh2_sftp($connection);
    
	return $sftp;
}

?>