document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton0" ).addEventListener("click", enviarRecibir, true);
    }  
}
function enviarRecibir() {// sirve para hacer o recibir httpRequestes asincronas
    var httpRequest = new XMLHttpRequest(); 
    httpRequest.onreadystatechange = function() { 
      if (httpRequest.readyState == 4 && httpRequest.status == 200) { 
        
        document.getElementById("hh2").innerHTML = httpRequest.responseText; 
      }  
    }
    
    
    var campo = parseInt(document.getElementById("name").value);
    var campo2 = JSON.stringify(campo);
    httpRequest.open("GET", "http://localhost/JavaScript/ajax/ejercicio/ajax.php?x=" + campo2, true); // cuando se reciban esos datos, se llama a la funcion de onreadystatechange
    httpRequest.send();  
  } 
