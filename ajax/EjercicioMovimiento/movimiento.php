<?php
    $json           = $_GET['x'];
    $jsonMovimiento = json_decode($json); 
    $a = json_encode($jsonMovimiento);

    echo $a;

?>
