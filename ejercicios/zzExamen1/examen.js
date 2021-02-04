var arrayPersonas   = new Array();
var arrayViejos     = new Array();
var arrayCumpleaños = new Array();
var abuelo          = new Date('12/07/1920');
var error           = true;
var respuesta       = false;
var premio;

class Persona {
    nombre;
    fechaNacimiento;

    constructor(nombre, fechaNacimiento){
        this.nombre          = nombre;
        this.fechaNacimiento = new Date(fechaNacimiento);
    }
}

// ------------ programa --------------

do {
    var persona = crearPersona();
    arrayPersonas.push(persona);
    var respuesta = confirm("Quiere introducir otra persona?");

}while(respuesta);

                                        // listado 

agruparViejos(arrayViejos);
ordenarViejos(arrayViejos);
document.write("La lista de los viejos:<br>");
mostrarViejos(arrayViejos);
document.write("<br><br>");


document.write("La lista de personas, por edades: <br>");
susEdades();
document.write("<br><br>");

document.write("La lista de los cumpleañeros:<br>");
agruparCumpleañeros(arrayCumpleaños);

var total = arrayPersonas.length;
var aleatorio = Math.floor(Math.random()*(total +1)); // random siempre es del 0 al 0.999, asi que * el numero maximo +1
document.write("La persona ganadora es: " + arrayPersonas[aleatorio].nombre);


// -------------- back --------------


function mostrarViejos(arrayViejos){
    for (var i=0; i<arrayViejos.length; i++){
        document.write(arrayViejos[i].nombre + ", es del año:" + arrayViejos[i].fechaNacimiento.getFullYear() + "<br>");
    }
}

function agruparViejos(arrayViejos){
    for (var i=0; i<arrayPersonas.length; i++){

        if (abuelo >= arrayPersonas[i].fechaNacimiento ){
            arrayViejos.push(arrayPersonas[i]);
        }
    }
}

function ordenarViejos(arrayViejos){
    arrayViejos.sort(
        function(personaA, personaB){
            if (personaA.fechaNacimiento < personaB.fechaNacimiento){
                return -1;
            }
            if (personaA.fechaNacimiento > personaB.fechaNacimiento){
                return 1;
            }
            if (personaA.fechaNacimiento = personaB.fechaNacimiento){
                return 0;
            }
        }  
    );
}

function agruparCumpleañeros(){
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth();

    for (var i=0; i<arrayPersonas.length; i++){
        if (arrayPersonas[i].fechaNacimiento.getDate() == dia && arrayPersonas[i].fechaNacimiento.getMonth() == mes ){ 
            arrayCumpleaños.push(arrayPersonas[i]);
        }
    }
    if (arrayCumpleaños.length == 0){
        document.write("Nadie cumple años hoy <br><br>");
    }else {
        mostrarCumpleañeros(arrayCumpleaños);
    }
}

function mostrarCumpleañeros(arrayCumpleaños){
    for (var i=0; i<arrayCumpleaños.length; i++){
        document.write("Es su cumpleaños de " + arrayCumpleaños[i].nombre + "<br><br>");
    }
}


function susEdades(){
    var añoActual = new Date();
    for (var i=0; i<arrayPersonas.length; i++){
        document.write(añoActual.getFullYear() - arrayPersonas[i].fechaNacimiento.getFullYear() + "<br>" );
    }
}


function crearPersona(){
    var nombre = prompt("Nombre de la persona", "Pedro");
    if (!nombre){
        alert("Error: tiene que introducir un nombre");
        crearPersona();
    }
    for (var i = 0; i<arrayPersonas.length; i++) {
        if (arrayPersonas[i].nombre.indexOf(nombre) >= 0){
            alert("Error: no se puede introducir dos veces el mismo nombre.");
            crearPersona();
        }
    }
    var fechaNacimiento = prompt("Fecha de nacimiento ", "10/25/2010");
    if (!comprobarFecha(fechaNacimiento)){
        crearPersona();
    } 
    
    var persona = new Persona(nombre, fechaNacimiento);
    return persona;
}

function comprobarFecha(fecha){ // 12/25/2020
    var arrayFecha      = fecha.split('/');
    var fechaAhora      = new Date();
    var fechaParametro  = new Date(fecha);

    if (arrayFecha[0] > 12 || arrayFecha[0] <1){
        alert("Error: ha introducido un mes menor de 1 o mayor de 12");
        return false;
    }

    if (arrayFecha[1] > 31 || arrayFecha[1] < 1){
        alert("Error: ha introducido un dia menor de 0 o mayor de 31");
        return false;
    }

    if (arrayFecha[2] > fechaAhora.getFullYear()){
        alert("Error: ha introducido año superior al actual");
        return false;
    }

    if (fechaParametro.getTime() >= fechaAhora.getTime()){
        alert("Error: la fecha introducida no es anterio al sistema"); 
        return false;
    }
    return true;
}


    // Date.parse("25/12/2020")           retorna los milisegundos hasta esa fecha
    // var date = new Date('2019-01-01')  retorna un objeto Date
    // var diaX = Date.parse("eldiaquequeramos");