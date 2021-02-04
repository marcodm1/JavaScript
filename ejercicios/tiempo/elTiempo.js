var fecha = new Date();
 
document.write("Vamos a ver todo sobre este momento:<br>");
mostrarTodo(fecha);

document.write("<br>Le sumamos 24 horas: <br>");
sumarTiempo(fecha, 24);

document.write("<br>Le sumamos 10 minutos: <br>");
sumarTiempo(fecha, 0.16);

document.write("Ahora ponemos una fecha 10/10/2020 para ver la diferencia de tiempo entre una y otra");
var fecha2 = new Date(10/10/2020);
calcularDiferencia(fecha, fecha2);




function mostrarTodo(fecha){
    document.write("Fecha completa: "                     + fecha);
    document.write("<br>Milisegundos desde (1/01/1970): " + fecha.getTime());
    document.write("<br>Segundo: "                        + fecha.getSeconds());
    document.write("<br>Minuto: "                         + fecha.getMinutes());
    document.write("<br>Hora: "                           + fecha.getHours());
    document.write("<br>Dia del mes: "                    + fecha.getDate());
    document.write("<br>Dia de la semana(Lunes = 1): "    + fecha.getDay());
    document.write("<br>Mes (enero = 0): "                + fecha.getMonth());
    document.write("<br>Año:"                             + fecha.getFullYear());
    document.write("<br>Son las: " + fecha.getHours() + "horas " + fecha.getMinutes() + "minutos " + fecha.getSeconds() + "segundos: ");
    document.write(" del dia " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + "<br>");
}

function sumarTiempo(fecha, horas){
    var resultado = fecha.getTime() + (1000 * 60 * 60 * horas);  
    fecha.setTime(resultado);
    document.write("Dia " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
    document.write(" son las: " + fecha.getHours() + "horas " + fecha.getMinutes() + "minutos " + fecha.getSeconds() + "<br>");
}



function calcularDiferencia(fecha, fecha2){ // 546163186344545
    var miEdad  = new Date('04/19/1990');

    var diff = fecha.getFullYear() - fecha2.getFullYear();




    // var seg     =   ;
    // var min     = diff%3600
    // var horas   = Math.trunc(diff/3600000);
    // var dias    = 
    // var mes     = diff%(1000*60*60*24*30*12);
    // var año     = Math.trunc(diff/(1000*60*60*24*30*12));
    

    
    // document.write("<br>La diferencia de edad es de: " + diferencia + "<br>");
}



document.write("<br>Ahora nos dan una fecha de un viejo de 100 años:<br>");
var abuelo   = new Date('12/09/1920');
var abueloMili = abuelo.getTime();
abuelo.setTime(abueloMili);
document.write(abuelo + "<br>");

document.write("<br>Ahora vamos a sumarle al abuelo 1 año:<br>");
var viejo2 = new Date(abueloMili + (1000*60*60*24*365));
document.write(viejo2 + "<br>");

//____________________________________________________________________________

document.write("<br>Ahora calcular el tiempo de carrera:<br>");

var salida      = new Date("11/25/2020");
salida.setTime  = salida.getTime() + (1000*60*60*10); // empieza el dia 11 a las 10

var llegada = new Date(salida.getTime() + (1000*60*60*10));
// var llegadaEnDiezHoras = llegada.getTime() + (1000*60*60*10); // termina el dia 11 a las 10 y 10 minutos
// esta mal la hora de inicio
document.write("La salida es a las: " + salida + "<br>");
document.write("La llegada es a las: " + llegada + "<br>");

var tiempoCarreraMili = llegada - salida;
// document.write("La carrera son: " tiempoCarreraMili + " milisegundos.");

var segundos = Math.trunc(tiempoCarreraMili/1000);          
var minutos  = Math.trunc(tiempoCarreraMili/(1000*60));             
var horas    = Math.trunc(tiempoCarreraMili/3600000); 

document.write("La carrera va a durar:" + horas + "h, " + minutos + "min, " + segundos + "segundos.<br>");

//____________________________________________________________________________




// var milisegundos = -7;
// var cumple = new Date(milisegundos);
// var hoy = new date();
// var anios = hoy.getFullYear() - cumple.getFullYear() -1;
// if (cumple.getMonth() < hoy.getMonth()){
//     anios++;
// }else{
//     if(cumple.getMonth() = hoy.hetMonth(){
//         if(cumple.getDay() <= hoy.gettDay){
//             // no lo he terminado
//         }
//     }
// }



// // dfsda
// var hoy2 = new Date();
// var hh   = new Date("04/19/1990");
// document.write(hoy2.getFullYear() - hh.getFullYear());
// document.write("<br>");

// var miNacimiento = '19/04/1990';
// document.write("Mi fecha de cumpleaños es el " + miNacimiento + "<br>");

// var miNanicientoMili = Date.parse(miNacimiento);
// document.write("Equivale a: " + miNanicientoMili.getTime() + "<br>");
// var fechaExacta      = fecha;
// document.write("<br>La fecha en milisegundos es:" + diaParametro);

// document.write("<br><br>");

// document.write("<br><br><br><br>---------------------------<br><br>");


// var diaAhora = new Date();
// document.write(diaAhora.getTime());

// if(diaParametro < diaAhora){
//     document.write("gg");
// }else{
//     document.write("pp");
// }

// var diaAHORAMISMO = new Date(2020, 12, 5, 22, 51, 00, 0);


// en el examen va a pedir a lo mejor ordenar tablas por fecha y demas

// otro ejemplo 
//  var mili = 100000;
//  var fecha = new Date(mili);

// revisar un ejercicio parecido a este
// edad de un señor en milisegundos.
// fecha de nacimiento en milisegundos hasta los milisegundos actuales
// cojo los milisegundos de fecha de nacimiento, y se los resto a los milisegundos de hoy
// var fechaNacimiento = new Date(...);
// var fechaHoy = new Date();
// document.write(dechaNacimiento.getTime() - fechaHoy.getTime(); 

//-------------------

