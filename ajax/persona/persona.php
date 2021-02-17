<?php
    // crear un objeto con lo que le quiero enviar
    class Persona {
        public $nombre;
        public $edad;

        public function __constructor() {

        }
    }
  

    $persona1 = new Persona();
    $persona2 = new Persona();


    if (!isset($_GET['x']) ){
        echo "No se ha recibido el get de x";
    }else {
        if ($persona1.edad >= 18) {

        }
    }
    


?>