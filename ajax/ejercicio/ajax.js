document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton0" ).addEventListener("click", cambiarTextos, true);
    }  
}

function enviarRecibir() {// sirve para hacer o recibir peticiones asincronas
    var peticion = new XMLHttpRequest(); // llamara a su propia funcion onreadystatechange en algun momento
    peticion.onreadystatechange = function() { // si onready. osea, cuando recibe x...  
      if (this.readyState == 4 && this.status == 200) { // estos codigos, los devuelve el servidor, cuando el estado sea 4, osea cuando treminrd dr rnviar info y encima sin errores
        document.getElementById("demo").innerHTML = this.responseText; // demo es el div de arriba y .inner es el ontenido del div
      }  // this.responseText tiene el echo que devuelve de php
    }
    peticion.open("GET", "http://localhost/JavaScript/ejercicios/ajax/ejercicio/ajax.php?jj=2&jd=12", true); // cuando se reciban esos datos, se llama a la funcion de onreadystatechange
    peticion.send();  
  } // https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest
