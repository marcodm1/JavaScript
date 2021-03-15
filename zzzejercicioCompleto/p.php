<?php
    $recibe = $_GET['x'];
    $recibe = json_decode($recibe);

    // $recibeN = intval($recibe); // convierte a int


    if ($recibe == "1") {
        echo $recibe + 10;
    }else {
        echo $recibe + 20;  
    }
?>