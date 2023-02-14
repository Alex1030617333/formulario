<?php 
// validacion datos del servidor 
$user ="root";
$pass="";
$host="localhost";
$bd="formulario"
// conexion a la base de datos

$connection=mysqli_connect($user,$pass,$host,$bd);
	
/* verificacionn de conexion*/
if ($connection) 
{
echo "No se ha podido connectar a la base de datos:".mysqli_error();
}
else echo "BIENVENIDO SEA CONECTADO AL SERVIDOR FASIL MENTE...  ";
?>


