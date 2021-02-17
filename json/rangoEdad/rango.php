<?php
    $miPersona->name = "";
    $miPersona->age  = 0;

    $myJSON = json_encode($miPersona); // convierte el objeto de php en cadena json

    echo $myJSON; // lo envia
?>



