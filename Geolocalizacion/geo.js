document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("actualizar" ).addEventListener("click", obtenerPosition, true);
    }
}
    function obtenerPosition() {
        var opciones = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 30000
        }
        navigator.geolocation.getCurrentPosition(añadirCoords, gestionarFracaso, opciones); 
    }

    // function gestionarExito(posicion) {
    //     document.getElementById("timestamp").innerHTML        = posicion.timestamp;
    //     document.getElementById("latitude").innerHTML         = posicion.coords.latitude;
    //     document.getElementById("longitude").innerHTML        = posicion.coords.longitude;
    //     document.getElementById("accuracy").innerHTML         = posicion.coords.accuracy;
    //     document.getElementById("altitude").innerHTML         = posicion.coords.altitude;
    //     document.getElementById("altitudeAccuracy").innerHTML = posicion.coords.altitudeAccuracy;
    //     document.getElementById("heading").innerHTML          = posicion.coords.heading;
    //     document.getElementById("speed").innerHTML            = posicion.coords.speed;
    // }
    function gestionarFracaso() {
        alert("Se ha producido el siquiente error" + error.message);
    }

    function añadirCoords(evento) { 
        var contenido = "ddddddd";
        var padre     = document.getElementsByClassName('tablaBody')[0];
        document.getElementsByTagName("tablaBodyTD2")[0].innerHTML = contenido;
        padre
    }


    // function añadirCoords() {
    //     var nuevoTR = document.createElement('tr');
        
    //     nuevoTR.appendChild(crearTD("timestamp"));
    //     nuevoTR.appendChild(crearTD("latitude"));
    //     nuevoTR.appendChild(crearTD("timestamp"));
    //     nuevoTR.appendChild(crearTD("longitude"));
    //     nuevoTR.appendChild(crearTD("accuracy"));

    //     var padre   = document.getElementsByClassName('tablaBody')[0];
    //     for (var i = 0; i <5; i++){
            
    //     padre.appendChild(nuevoTR);
    //     }
        
        
    // }


    // function crearTD(texto) {
    //     var nuevoTD = document.createElement('tr');
    //     nuevoTD.innerHTML = texto;
    //     return nuevoTD;
    // }