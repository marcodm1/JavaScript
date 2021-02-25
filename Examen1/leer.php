<?php
	
	// $movimientos = array  (
	// 	array("2019-01-15", "Apertura de cuenta", 1200),
		
	// 	array("2019-01-17", "Ingreso en efectivo", 100)
	// );
	
	class Persona {
        public $edad;
        public function __construct($edad){
            $this->edad = "Te llamas " . $edad;
        }
    }
    $edad = file_get_contents('php://input'); // para recoger el body, o lo que le envia con "peticion.send(objJson);"

    $edad = json_decode($edad); // lo convierte en objeto php

    $edad = new Persona($edad); // lo convierto de objeto a objeto Persona
    
    $edad = json_encode($edad);

    echo $edad;



?>