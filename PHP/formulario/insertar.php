//Recuperar los datos del formulario
<?php
include "./conexion.php";

$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$email = $_POST["email"];
$imagen = $_POST["imagen"];
$comentario = $_POST["comentario"];
$valoration__output = $_POST["valoration__output"];


$conexion->query("INSERT INTO formulario (nombre, apellidos, email, imagen, valoration__output, comentario) VALUES ('$nombre', '$apellidos', '$email', '$imagen', '$valoration__output', '$comentario')");

header('location: ../../formulario.php?register=1');
?>