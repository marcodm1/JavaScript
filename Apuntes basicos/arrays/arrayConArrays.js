meses       = new Array();
dias        = new Array();
aguaTotal   = new Array();
nombres     = new Array(); // está

var minimoMes   = 100;
var maximoMes   = 0;
var sumaMes     = 0;
var sumaTotal   = 0;
var minimoTotal = 100;
var maximoTotal = 0;

function crearDias(){
    for (var i=1; i<31; i++){
        dias[i] = Math.floor(Math.random()*1000)+1;
        document.write("dia" + i + " ha llovido = " + dias[i] + "<br>");
        sumaMes += dias[i];

        if (maximoMes < dias[i]){
            maximoMes = dias[i];
        }  
        if (minimoMes > dias[i]){
            minimoMes = dias[i];
        }
    }

    if (minimoTotal > minimoMes){
        minimoTotal = minimoMes;
    }
    if ( maximoTotal < maximoMes){
        maximoTotal = maximoMes;
    }


    sumaTotal += sumaMes;
    document.write("Dia que menos ha llovido = "       + minimoMes + " litro(s)<br>");
    document.write("Dia que mas ha llovido = "         + maximoMes + "<br>");
    document.write("Ha llovido este mes un total de: " + sumaMes + "<br><br>");
    sumaMes = 0;
    minimoMes  = 100
    maximoMes  = 0;
    return dias;
}

function crearMeses(){
    for (var i=0; i<12; i++){
        document.write("------------ El mes "+ nombres[i] + " ------------<br>");
        meses[i] = crearDias();
    }
}

function crearNombres(){
    nombres[0]  = "Enero";
    nombres[1]  = "Febrero";
    nombres[2]  = "Marzo";
    nombres[3]  = "Abril";
    nombres[4]  = "Mayo";
    nombres[5]  = "Junio";
    nombres[6]  = "Julio";
    nombres[7]  = "Agosto";
    nombres[8]  = "Septiembre";
    nombres[9]  = "Octubre";
    nombres[10] = "Noviembre";
    nombres[11] = "Diciembre"; 
    return nombres;  
}

crearNombres();
crearMeses();
document.write("---------------------------------------------------");
document.write("<br> La suma total del año = "  + sumaTotal + "<br>");
document.write("El dia que menos ha llovido = " + minimoTotal + "<br>");
document.write("El dia que mas ha llovido   = " + maximoTotal + "<br>");







