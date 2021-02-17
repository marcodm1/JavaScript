<?php
    if (!isset($_GET['nombre']) ) {
        echo "no existe";
    }else {
        $objetoJson = json_decode($_GET['valoresObjeto']);

        var_dump($objetoJson);

        // if (!isset($_GET['valoresObjeto']) ){
        //     echo "No se ha recibido el get de x";
        // }else {
        //     if ($_GET['valoresObjeto'] >= 18) {

        //     }
        // }
    }
    

?>