<?php
	
	$movimientos = array  (
		array("2019-01-15", "Apertura de cuenta", 1200),
		
		array("2019-01-17", "Ingreso en efectivo", 100)
	);

	
	// para recoger el body, o lo que le envia con "peticion.send(objJson);"
    $num = file_get_contents('php://input'); // porque ese parametro?

    $num = json_decode($num); // lo convierte en objeto php

    if ($num == 1) {
        $array = json_encode($movimientos[0]);
        echo $array;
    }else if ($num == 2){
        $array = json_encode($movimientos[1]);
        echo $array;
    }else {
        $array = json_encode($movimientos);
        echo $array;
    }
    
  


?>