document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton1").addEventListener("click",  cargar, true);
    }
        
    function cargar() {
        var llamada = new XMLHttpRequest();
        llamada.open("GET", "http://localhost/JavaScript/JavaScript/ejercicios/ajax/ejercicio1/ejer1.php", true);
        llamada.onreadystatechange = function() { // cuando la  llamada. el estado este todo ok
            if (this.readyState == 4 && this.status == 200) { // si .readyState este en 4, que es finalizado, y status = 200 que es finalizado
            document.getElementById("contenedor1").innerHTML = llamada.responseText; // haz esto: responsetext es lo que devuelve el servidor
            }
        }
        llamada.send(null);
    }



    //   function enviar(evento) {
    //       evento.target.disable = true;
    //       var llamada = new XMLHttpRequest();
    //       llamada.addEventListener("readystatechange", gestionarRespuesta, false);
    //       llamada.open("GET", "http://localhost/JavaScript/JavaScript/ejercicios/ajax/ejercicio2/ejer1.js" + document.getElementById("edad").nodeValue, true);
    //       llamada.send(null);
    //   }



}