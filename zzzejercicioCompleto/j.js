document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton1").addEventListener("click", enviarDatos, true);
    }
}

function enviarDatos() { // lo mismo pero con "enviando"
    crearEnviando();
    ocultarBoton("hidden");
    var conexion = new XMLHttpRequest(); 
    conexion.onreadystatechange = function() { 
        if (conexion.readyState == 4){// esto es si se ha enviado y recibido 
            eliminarEnviando();
            ocultarBoton("visible");
            if (conexion.status == 200) {  // esto es cuando lo reciba es ok"200" si 402 else
                var reciboDePHP = conexion.responseText;
                console.log("reciboDePHP");
                document.getElementsByTagName("td")[0].innerHTML = reciboDePHP;
            } else {
                alert("hubo un error");
            }
        } 
    }
    // var conviertoAjson = JSON.stringify(document.getElementById("boton1").value);
    var objeto = crearObjeto();
    var conviertoAjson = JSON.stringify(objeto);
    console.log(conviertoAjson);
    conexion.open("GET", "http://localhost/JavaScript/zzzejercicioCompleto/p.php?x=" + conviertoAjson, true); // cuando se reciban esos datos, se llama a la funcion de onreadystatechange
    conexion.send();  
}

function crearEnviando() {
    var p     = document.createElement("p");
    var padre = document.getElementsByTagName("table")[0];
    padre.appendChild(p);
    var enviando = document.createTextNode("Enviando");
    var padre1   = document.getElementsByTagName("p")[0];
    padre1.appendChild(enviando);
}
function eliminarEnviando() {
    var enviando = document.getElementsByTagName("p")[0];
    enviando.remove(enviando);
}
function ocultarBoton(opcion) {
    document.getElementById("boton1").style.visibility = opcion;
}           
function crearObjeto() {
    var objeto = { nombre:"Marco", apellido:"Dominguez", edad:30 }
    return objeto;
}
