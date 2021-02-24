document.getElementById("actualizar").addEventListener("click", ()=>{
    navigator.geolocation.getCurrentPosition(
                (posicion)=>{
                añadirTabla(posicion.timestamp       , 0);
                añadirTabla(posicion.coords.latitude , 1);
                añadirTabla(posicion.coords.longitude, 2);
                añadirTabla(posicion.coords.accuracy , 3);
                añadirTabla(posicion.coords.altitude , 4);
                añadirTabla(posicion.coords.altitudeAccuracy, 5);
                añadirTabla(posicion.coords.heading  , 6);
                añadirTabla(posicion.coords.speed    , 7);}, 
                (error)=>{ alert("Se ha producido el siguiente error" + error.message); }
    );
});


function añadirTabla(texto, posicion) {
    if (texto == null) {
        texto = "xx";
    }
    document.getElementsByClassName("tablaBodyTD2")[posicion].innerHTML = texto;
}