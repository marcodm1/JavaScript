<?php
    sleep(2);
    $recibe = json_decode($_GET['x']);

    // $recibeN = intval($recibe); // convierte a int


    // if ($recibe->nombre == "Marco") {
    //     echo "Ese es mi nombre";
    // }else {
    //     echo "Ese no es mi nombre";  
    // }

    $nombre = $recibe->nombre;
    $recibe = json_encode($nombre);
    echo $recibe;
?>

