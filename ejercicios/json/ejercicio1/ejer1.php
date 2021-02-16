<?php
    $myObj->name = "John";
    $myObj->age = 30;
    $myObj->city = "New York";

    $myJSON = json_encode($myObj); // convierte el objeto de php en cadena json

    echo $myJSON; // lo envia
?>



<?php
    $myArr = array("John", "Mary", "Peter", "Sally"); // array php

    $myJSON = json_encode($myArr); // crea un json del array

    echo $myJSON; // lo enviamos
?>