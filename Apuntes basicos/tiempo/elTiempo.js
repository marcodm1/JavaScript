// ahoraMismo ahoraMismo para todas las pruebas
var ahoraMismo = new Date();
    

// __________________________________EJERCICIO 1 ___________________________________
document.write("Ejercicio 1: Calcular de una ahoraMismo, su edad<br>");
var marco     = new Date('1990, 4, 19');
var marcoMili = ahoraMismo-marco;
var marcoAños = ((((marcoMili/1000)/60)/60)/24)/365; 

document.write("Mi edad en milisegundos: "                  + marcoMili + "<br>");
document.write("Mi edad en años sin redondear: "            + marcoAños + "<br>");
document.write("Mi edad en años redondeados hacia abajo: "  + Math.floor(marcoAños) + "<br>");
document.write("Mi edad en años redondeados hacia arriba: " + Math.round(marcoAños) + "<br>");

// __________________________________EJERCICIO 2 ___________________________________
document.write("<br><br>Ejercicio 2: Calcular en horas al diferencia de edad entre dos personas<br>");
var juan         = new Date('1990, 3, 19');
var pedro        = new Date('1990, 3, 20');
var juanMili     = ahoraMismo-juan;
var pedroMili    = ahoraMismo-pedro;
var diffenHoras  = ((((juanMili - pedroMili)/1000)/60)/60);
document.write("La diferencia en horas es de: " + diffenHoras);

// __________________________________EJERCICIO 3 ___________________________________
document.write("<br><br>Ejercicio 3: Ver opciones con la fecha actual: <br>");

mostrarTodo(ahoraMismo);

// document.write("<br>Le sumamos 24 horas: <br>");
// sumarTiempo(ahoraMismo, 24);

// document.write("<br>Le sumamos 10 minutos: <br>");
// sumarTiempo(ahoraMismo, 0.16);

// /document.write("Ahora ponemos una ahoraMismo 10/10/2020 para ver la diferencia de tiempo entre una y otra");
// var ahoraMismo2 = new Date(10/10/2020);
// CalcularDiferencia(ahoraMismo, ahoraMismo2);




function mostrarTodo(ahoraMismo){
    document.write("Los milisegundos desde (1/01/1970) hasta ahora: " + ahoraMismo.getTime());
    document.write("<br>Son las: " + ahoraMismo.getHours() + "horas " + ahoraMismo.getMinutes() + "minutos " + ahoraMismo.getSeconds() + "segundos: ");
    document.write(" del dia " + ahoraMismo.getDate() + "/" + ahoraMismo.getMonth() + "/" + ahoraMismo.getFullYear() + "<br>");
    document.write("<br>Fecha completa: "                 + ahoraMismo);
    document.write("<br>Segundo: "                        + ahoraMismo.getSeconds());
    document.write("<br>Minuto: "                         + ahoraMismo.getMinutes());
    document.write("<br>Hora: "                           + ahoraMismo.getHours());
    document.write("<br>Dia del mes: "                    + ahoraMismo.getDate());
    document.write("<br>Dia de la semana(Lunes = 1): "    + ahoraMismo.getDay());
    document.write("<br>Mes (enero = 0): "                + ahoraMismo.getMonth());
    document.write("<br>Año:"                             + ahoraMismo.getFullYear());
}

// function sumarTiempo(ahoraMismo, horas){
//     var resultado = ahoraMismo.getTime() + (1000 * 60 * 60 * horas);  
//     ahoraMismo.setTime(resultado);
//     document.write("Dia " + ahoraMismo.getDate() + "/" + ahoraMismo.getMonth() + "/" + ahoraMismo.getFullYear());
//     document.write(" son las: " + ahoraMismo.getHours() + "horas " + ahoraMismo.getMinutes() + "minutos " + ahoraMismo.getSeconds() + "<br>");
// }



// function CalcularDiferencia(ahoraMismo, ahoraMismo2){ // 546163186344545
//     var marcoAños  = new Date('04/19/1990');

//     var diff = ahoraMismo.getFullYear() - ahoraMismo2.getFullYear();


// }



// document.write("<br>Ahora nos dan una ahoraMismo de un viejo de 100 años:<br>");
// var abuelo   = new Date('12/09/1920');
// var abueloMili = abuelo.getTime();
// abuelo.setTime(abueloMili);
// document.write(abuelo + "<br>");

// document.write("<br>Ahora vamos a sumarle al abuelo 1 año:<br>");
// var viejo2 = new Date(abueloMili + (1000*60*60*24*365));
// document.write(viejo2 + "<br>");

// document.write("<br>Ahora Calcular el tiempo de carrera:<br>");

// var salida      = new Date("11/25/2020");
// salida.setTime  = salida.getTime() + (1000*60*60*10); // empieza el dia 11 a las 10

// var llegada = new Date(salida.getTime() + (1000*60*60*10));

// document.write("La salida es a las: " + salida + "<br>");
// document.write("La llegada es a las: " + llegada + "<br>");

// var tiempoCarreraMili = llegada - salida; 

// document.write("La carrera va a durar:" + horas + "h, " + minutos + "min, " + segundos + "segundos.<br>");

// var ahoraMismo   = new Date();
// var marco = new Date('1990, 4, 19');

// var diferencia = ahoraMismo-marco;
// diferencia = ((((diferencia/1000)/60)/60)/24)/365;
// var redondeado = Math.floor(diferencia);
// document.write(redondeado);

var yaa = new Date();
document.write("<br>" );
document.write("________________________" + yaa.getDate() + "   :1<br>");
document.write("________________________" + yaa.getDay() + "   :2<br>");
document.write("________________________" + yaa.getFullYear() + "   :3<br>");
document.write("________________________" + yaa.getHours() + "   :4<br>");
document.write("________________________" + yaa.getMilliseconds() + "   :5<br>");
document.write("________________________" + yaa.getMinutes() + "   :6<br>");
document.write("________________________" + yaa.getMonth() + "   :7<br>");
document.write("________________________" + yaa.getSeconds() + "   :8<br>");
document.write("________________________" + yaa.getTime() + "   :9<br>");
document.write("________________________" + yaa.toDateString() + "   :19<br>");
document.write("________________________" + yaa.toLocaleDateString() + "   :22<br>");
document.write("________________________" + yaa.toLocaleString() + "   :23<br>");
document.write("________________________" + yaa.toLocaleTimeString() + "   :24<br>");
