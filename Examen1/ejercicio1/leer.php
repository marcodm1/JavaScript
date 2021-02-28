<?php
	
	$movimientos = array  (
		array("2019-12-22", "Apertura de cuenta" , 0),
        array("2020-11-31", "Ingreso en efectivo", 1200),
        array("2021-08-30", "Ingreso en efectivo", 1000),
        array("2018-01-10", "Ingreso en efectivo", 800),
		array("2019-01-17", "Ingreso en efectivo", 100)
	);

    $tabla    = array();
    $recibe   = file_get_contents('php://input');
    $num      = json_decode($recibe); // lo convierte en objeto php
      
    for ($i = 0; $i < $num; $i++) {
        array_push($tabla, $movimientos[$i]);
    }
    $tabla = json_encode($tabla);
    echo $tabla;
?> 