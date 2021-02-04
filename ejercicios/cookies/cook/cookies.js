
// primero creamos una serie de cookies
var d = "hola=hola";
document.cookie = "nombre=julian;  expires=Thu, 10 Dec 2020 12:00:00 UTC; path=/";
document.cookie = "apellido=lopez; expires=Thu, 10 Dec 2020 12:00:00 UTC; path=/";
document.cookie = "casa=tercera;   expires=Thu, 10 Dec 2020 12:00:00 UTC; path=/";
document.cookie = "calle=pequeña;  expires=Thu, 10 Dec 2020 12:00:00 UTC; path=/";
document.cookie = "techo=negro;    expires=Thu, 10 Dec 2020 12:00:00 UTC; path=/";
document.cookie = d + ";           expires=Thu, 10 Dec 2020 12:00:00 UTC; path=/";
// ahora las mostramos
document.write("Estas son todas las cookies: <br>" + document.cookie + "<br><br>");

// ahora las mostramos separadas en un array y les quitamos el ;
var arrayCookies = new Array();
rellenarArray();
limpiarCookies();
mostrarArray();

function rellenarArray(){
    var string   = decodeURIComponent(document.cookie);
    arrayCookies = string.split(';');
}

function limpiarCookies(){
    for (var i=0; i<arrayCookies.length; i++){
        if (arrayCookies[i].indexOf(" ") == 0){
            arrayCookies[i] = arrayCookies[i].substring(1);
        }
    }
}

function mostrarArray(){
    for (var i=0; i<arrayCookies.length; i++){
        document.write(arrayCookies[i] + "<br>");
    }
}

// para que nos muestre una cookie en concreto

var vercookie = prompt("Elija una cookie para mostrarla", "nombre");
mostrarCookie(vercookie);
document.write("<br>");

function mostrarCookie(vercookie) {
    for (var i=0; i<arrayCookies.length; i++){
        if (arrayCookies[i].indexOf(vercookie) >= 0){
            document.write(arrayCookies[i] + "<br>");
        }
    } 
    
}


// Para crear tu propia cookie

var fecha    = new Date();
nombreCookie = prompt("Escribe el nombre de la cookie que vas a crear:", "perro");
valorNombre  = prompt("Escribe el valor de " + nombreCookie + ":", "gr@nde");
tiempoCookie = parseInt(prompt("Escribe los segundos que durara la cookie", 180));

fecha.setTime(fecha.getTime() + tiempoCookie * 1000);
hacerCookie(nombreCookie, valorNombre, fecha);
document.write(document.cookie);

function hacerCookie(nombre, valorNombre, fecha){
    document.cookie = nombre + "=" + valorNombre + ";expires=" + fecha + ";path=/";
}


// para eliminar una cookie en concreto
document.write("<br><br>Eliminamos una cookie: ")
var vercookie = prompt("Elija una cookie para eliminarla", "perro");
eliminarCookie(vercookie);
document.write(vercookie + "<br><br>");

function eliminarCookie(vercookie) {
    for (var i=0; i<arrayCookies.length; i++){
        if (arrayCookies[i].indexOf(vercookie) >= 0){
            document.cookie = arrayCookies[i] + "; expires=Thu, 10 Dec 2000 12:00:00 UTC; path=/";
            arrayCookies.splice(i, 1);
        }
    } 
}

document.write("Ahora mostramos las cookies actualizadas: <br>");
mostrarArray();

document.write("<br>Estas son todas las cookies: <br>" + document.cookie);

    // // como hacer una cookie con una variable
    // document.cookie = "imagen=" + imgArray[numero];
    // document.images["imagen"].onclick = fotoElegida;
    // //clearTimeout
