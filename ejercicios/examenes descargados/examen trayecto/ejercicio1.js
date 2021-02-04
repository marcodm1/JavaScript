class Trayecto {
    media();    // devuelve velocidad media en kms/h        
    duracion(); // devuelve duracion de la ruta en mili
    constructor(descripcion, kms, calorias, salida, llegada){
        this.descripcion = descripcion; // texto 
        this.kms         = kms;         // de la ruta
        this.calorias    = calorias;    // consumidas
        this.salida      = salida;      // objeto Date()
        this.llegada     = llegada;     // objeto Date()
    }
}
function media(){}
function duracion(){}
function masTrayectos(arrayTrayectos) {
    var descripcion = prompt("Indique el nombre al trayecto que ha realizado", "Paseo por el monte");;
    var kms         = prompt("Indique la cantidad de kms que ha recorrido"   , 60);
    var calorias    = prompt("Indique la cantidad de calorias perdidas"      , 1000);
    var año         = prompt("Indique en que año realizo el trayecto"        , 2020);
    var mes         = prompt("Indique en que mes realizo el trayecto"        , 10);
    var dia         = prompt("Indique en que dia realizo el trayecto"        , 25);
    var horas       = prompt("Indique en que hora realizo el trayecto"       , 5);
    var minutos     = prompt("Indique en que minuto realizo el trayecto"     , 50);
    var segundos    = prompt("Indique en que segundo realizo el trayecto"    , 55);
    var salida      = new Date(año, mes, dia, hora, minuto, segundo);
    var llegada     ;

}
class Bicicleta {
    diaMasRapido(); // Devuelve un objeto Date con la fecha de salida con mejor media
    tiempoTotal();  // Devuelve el total del tiempo de todas las rutas en mili
    constructor(modelo, fechaAdquisicion, rutas) {
        this.modelo           = modelo;           
        this.fechaAdquisicion = fechaAdquisicion;       
        this.rutas            = rutas;             
    }
}
function diaMasRapido(){}
function tiempoTotal(){}


function introducirDatos(arrayBicicletas, arrayTrayectos) {
    var modelo = prompt("Escriba el modelo de su bicicleta" , "z3000");
    var año    = prompt("Indique en que año la compro"      , 2015);
    var mes    = prompt("Indique que mes la compro"         , 6);
    var año    = prompt("Indique que dia del mes la compro" , 25);
    var fechaAdquisicion = new Date(año, mes, dia);
    do {
        masTrayectos(arrayTrayectos);
        otroTrayecto = confirm("Desea introducir mas trayectos para esta bici?");
    } while(otroTrayecto == true);
    var bici = new Bicicleta(modelo, fechaAdquisicion, arrayTrayectos);
    arrayBicicletas.push(bici);
}
function mostrarAñoMasRapido() {}
function tiempoTotalRodando() {}

                    // main
var arrayBicicletas = new Array();
var arrayTrayectos  = new Array();

// bucle 1 para las bicis
var masBicicletas = false;
alert("Vamos a intoducir datos de una bicicleta:");
do {
    introducirDatos(arrayBicicletas, arrayTrayectos);
    alert("Desea introducir datos para otra bicicleta?");

} while(masBicicletas = true);

/*	
    Para las salidas y llegadas de cada ruta se pedirá, además, hora y minutos y se comprobará:
    • Que el mes es un valor entre 1 y 12. Se volverá a pedir el mes en caso contrario.
    • Que el día es un valor entre 1 y 31. Se volverá a pedir el día en caso contrario.
    • Que la hora es un valor entre 0 y 23. Se volverá a pedir la hora en caso contrario.
    • Que los minutos son un valor entre 0 y 59. Si no, se volverán a pedir los minutos.
    • Que la llegada es posterior a la salida y ambas posteriores a la fecha de adquisición. Se volverán a 
        pedir las fechas (de salida y llegada) en caso contrario.

Un enlace “Mostrar año más rápido” que mostrará la “edad de la bicicleta” en años cuando se hizo la mejor media.

Un enlace “Tiempo total rodando” que mostrará el dato en la forma: 23:45 horas.



*/
