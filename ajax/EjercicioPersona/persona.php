<?php
    class Persona {
        public $nombre;
        public $edad;
        public function __construct($nombre, $edad){
            $this->nombre = "Te llamas " . $nombre;
            $this->edad   = "Tienes " . $edad;
        }
    }
    $json = file_get_contents('php://input'); // para recoger el body, o lo que le envia con "peticion.send(objJson);"

    $jsonPERSONA = json_decode($json); // lo convierte en objeto php

    $persona = new Persona($jsonPERSONA->nombre, $jsonPERSONA->edad); // lo convierto de objeto a objeto persona
    
    $a = json_encode($persona);

    echo $a;
    
   

    // $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';  // esto es un objeto JSON
    // $objPHP = json_decode($json);               // decode() lo convierte a objeto PHP
    // var_dump($objPHP);                          // lo muestra

    // $json1 = json_encode($objPHP);              // encode convierte objeto PHP a objeto JSON
    // var_dump($json1);                           // lo muestra
    
?>
