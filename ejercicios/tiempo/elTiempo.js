// var fecha = new Date();
 
//document.write("Vamos a ver todo sobre este momento:<br>");
//mostrarTodo(fecha);

//document.write("<br>Le sumamos 24 horas: <br>");
//sumarTiempo(fecha, 24);

//document.write("<br>Le sumamos 10 minutos: <br>");
//sumarTiempo(fecha, 0.16);

///document.write("Ahora ponemos una fecha 10/10/2020 para ver la diferencia de tiempo entre una y otra");
// var fecha2 = new Date(10/10/2020);
//calcularDiferencia(fecha, fecha2);




// function mostrarTodo(fecha){
//     document.write("Fecha completa: "                     + fecha);
//     document.write("<br>Milisegundos desde (1/01/1970): " + fecha.getTime());
//     document.write("<br>Segundo: "                        + fecha.getSeconds());
//     document.write("<br>Minuto: "                         + fecha.getMinutes());
//     document.write("<br>Hora: "                           + fecha.getHours());
//     document.write("<br>Dia del mes: "                    + fecha.getDate());
//     document.write("<br>Dia de la semana(Lunes = 1): "    + fecha.getDay());
//     document.write("<br>Mes (enero = 0): "                + fecha.getMonth());
//     document.write("<br>Año:"                             + fecha.getFullYear());
//     document.write("<br>Son las: " + fecha.getHours() + "horas " + fecha.getMinutes() + "minutos " + fecha.getSeconds() + "segundos: ");
//     document.write(" del dia " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + "<br>");
// }

// function sumarTiempo(fecha, horas){
//     var resultado = fecha.getTime() + (1000 * 60 * 60 * horas);  
//     fecha.setTime(resultado);
//     document.write("Dia " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
//     document.write(" son las: " + fecha.getHours() + "horas " + fecha.getMinutes() + "minutos " + fecha.getSeconds() + "<br>");
// }



// function calcularDiferencia(fecha, fecha2){ // 546163186344545
//     var miEdad  = new Date('04/19/1990');

//     var diff = fecha.getFullYear() - fecha2.getFullYear();


// }



// document.write("<br>Ahora nos dan una fecha de un viejo de 100 años:<br>");
// var abuelo   = new Date('12/09/1920');
// var abueloMili = abuelo.getTime();
// abuelo.setTime(abueloMili);
// document.write(abuelo + "<br>");

// document.write("<br>Ahora vamos a sumarle al abuelo 1 año:<br>");
// var viejo2 = new Date(abueloMili + (1000*60*60*24*365));
// document.write(viejo2 + "<br>");

// document.write("<br>Ahora calcular el tiempo de carrera:<br>");

// var salida      = new Date("11/25/2020");
// salida.setTime  = salida.getTime() + (1000*60*60*10); // empieza el dia 11 a las 10

// var llegada = new Date(salida.getTime() + (1000*60*60*10));

// document.write("La salida es a las: " + salida + "<br>");
// document.write("La llegada es a las: " + llegada + "<br>");

// var tiempoCarreraMili = llegada - salida; 

// document.write("La carrera va a durar:" + horas + "h, " + minutos + "min, " + segundos + "segundos.<br>");


var hoy         = new Date();
var nacimiento  = new Date('1990, 4, 19');

var dias    = ((((hoy-nacimiento)/1000)/60)/60)/24;
var meses   = parseInt((dias%365)/30);
var anios   = parseInt(dias/365);
dias        = parseInt((dias%365)%30);

document.write("Hoy es: " + hoy);
document.write("<br />Fecha de nacimiento → " + nacimiento);
document.write("<br /> " + anios + " años, " + meses + " meses, " + dias + " días.<br><br>");



var misAños = hoy.getFullYear()-nacimiento.getFullYear();

document.write("Restamos el año actual, " + hoy.getFullYear() + "- mi año, " + nacimiento.getFullYear() + ": ");
document.write(" es decir, tengo: " + (hoy.getFullYear() - nacimiento.getFullYear()) + "<br>");

document.write("tengo " + nacimiento.getMilliseconds() + " años<br>");
document.write("Mis años en milis son: " + 1000*60*60*24*31*12*misAños + "<br>");
var dd = new Date(996364800000);
document.write("Mis años desde 996364800000 milis: " + dd.getFullYear() + "<br>");
document.write(hoy.getFullYear() + "<br>");
document.write(nacimiento.getFullYear() + "<br>");

1000*60*60*24*31*12*30