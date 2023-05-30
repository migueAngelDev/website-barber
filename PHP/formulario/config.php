<?php
define('BD_SERVER', 'localhost');
define('BD_USERNAME', 'root');
define('BD_PASSWORD', '');
define('BD_NAME', 'escuela');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if($link == flase){
    die("ERROR: No se pudo conectar a la base de datos,",mysqli_connect_error());
}
?>