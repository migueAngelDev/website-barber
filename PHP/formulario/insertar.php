//Recuperar los datos del formulario
<?php
include "./conexion.php";

$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$email = $_POST["email"];
$imagen = $_POST["imagen"];
$comentario = $_POST["comentario"];


$conexion->query("INSERT INTO formulario (nombre, apellidos, email, imagen, comentario) VALUES ('$nombre', '$apellidos', '$email', '$imagen', '$comentario')");

header('location: ../../formulario.php?register=1');
?>