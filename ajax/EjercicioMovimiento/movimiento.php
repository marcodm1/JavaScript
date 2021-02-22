<?php
    class Movimiento {
        public $fecha;
        public $descripcion;
        public $importe;
        public $saldo;

        public function __constructor($fecha, $descripcion, $importe, $saldo){
            $this->fecha       = $fecha;
            $this->descripcion = $descripcion;
            $this->importe     = $importe;
            $this->saldo       = $saldo;
        }
    }
    
    // var fecha       = document.getElementById("strFecha").value; // devuevle un objeto del id
    // var descripcion = document.getElementById("strDesc").value;
    // var importe     = document.getElementById("intImporte").value;
    // var saldo       = document.getElementById("intSaldo").value;
    // var movimiento  = new Movimiento(fecha, descripcion, importe, saldo);

    // return movimiento;
    

    $json           = $_GET['x'];
    $jsonMovimiento = json_decode($json); // lo convierte en objeto php

    $movimiento = new Movimiento($jsonMovimiento->fecha, $jsonMovimiento->descripcion, $jsonMovimiento->importe, $jsonMovimiento->saldo); // lo convierto de objeto a objeto persona

    $a = json_encode($jsonMovimiento);

    echo $a;
    
   

    // $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';  // esto es un objeto JSON
    // $objPHP = json_decode($json);               // decode() lo convierte a objeto PHP
    // var_dump($objPHP);                          // lo muestra

    // $json1 = json_encode($objPHP);              // encode convierte objeto PHP a objeto JSON
    // var_dump($json1);                           // lo muestra
    
?>
