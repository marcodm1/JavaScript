document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        console.log("paso por cargarEventos");
        document.getElementById("boton1").addEventListener("click", mostrarCosas, true);
    }
}

function mostrarCosas(evento) {
    var ejemplo = document.getElementById("boton1").value;
    console.log(ejemplo);
    enviarDatos(ejemplo);
}

// function escribirEnHTML(reciboDePHP) {
//     var respuesta = document.createTextNode(reciboDePHP);
//     var padre     = document.getElementsByTagName("body")[0];
//     padre.firstChild(respuesta);
// }


function enviarDatos(ejemplo) {
    var conexion = new XMLHttpRequest(); 
    conexion.onreadystatechange = function() { 
      if (conexion.readyState == 4 && conexion.status == 200) { 
          var reciboDePHP = conexion.responseText;
          console.log(reciboDePHP);

        // escribirEnHTML(reciboDePHP);
      }  
    }
    var conviertoAjson = JSON.stringify(ejemplo);
    console.log(conviertoAjson);
    console.log("estoy casi enviandooooo");
    conexion.open("GET", "http://localhost/JavaScript/zzzejercicioCompleto/p.php?x=" + conviertoAjson, true); // cuando se reciban esos datos, se llama a la funcion de onreadystatechange
    conexion.send();  
}