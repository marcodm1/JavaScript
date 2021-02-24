
    // document.getElementById("actualizar" ).addEventListener("click", añadirCoords, true);

    navigator.geolocation.getCurrentPosition((e)=>{
        console.log(e)
    },(e)=>{
        console.log(e)
    }); 
    
    
    /* function gestionarFracaso() {
        alert("Se ha producido el siquiente error" + error.message);
    }
    function añadirCoords() {
        console.log(objeto.coords.latitude);
        
    } */

    /**
     * 
     * var objeto = navigator.geolocation.getCurrentPosition;
           
            console.log(objeto.coords.latitude);
     */

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
    // function añadirCoords() {
    //     var nuevoTR = document.createElement('tr');
        
    //     nuevoTR.appendChild(crearTD("timestamp"));
    //     nuevoTR.appendChild(crearTD("latitude"));
    //     nuevoTR.appendChild(crearTD("timestamp"));
    //     nuevoTR.appendChild(crearTD("longitude"));
    //     nuevoTR.appendChild(crearTD("accuracy"));

    //     var padre   = document.getElementsByClassName('tablaBody')[0];
    //     padre.appendChild(nuevoTR);
    //     }
        
        
    // }


    document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("actualizar" ).addEventListener("click", añadirCoords, true);
    }
}

            
    
   