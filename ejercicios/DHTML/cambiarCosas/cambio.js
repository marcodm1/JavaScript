
document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton0").addEventListener("click",  cambiarTextos, true);
        document.getElementById("boton1").addEventListener("click",  convertir1Arojo, true);
        document.getElementById("boton2").addEventListener("click",  cambiar1Averde, true);
        document.getElementById("boton3").addEventListener("click",  cabiar1Aazul, true);
        document.getElementById("boton4").addEventListener("click",  cambiar2siguienteColor, true);
        document.getElementById("boton5").addEventListener("click",  convertir2Arojo, true);
        document.getElementById("boton6").addEventListener("click",  convertir2Averde, true);
        document.getElementById("boton7").addEventListener("click",  convertir2Aazul, true);
        document.getElementById("boton8").addEventListener("click",  cambiarLosColores, true);
        document.getElementById("boton9").addEventListener("click",  ocultarOno, true);
        document.getElementById("boton10").addEventListener("click", EliminarParrafo, true);
        document.getElementById("boton11").addEventListener("click", añadirParrafo, true);
        document.getElementById("boton12").addEventListener("click", modificarContenido, true);
        document.getElementById("boton13").addEventListener("click", añadirDIV, true);
    }
        
    function cambiarTextos(evento) {
        var aux1 = document.getElementsByTagName("p")[0].innerHTML;
        document.getElementsByTagName("p")[0].innerHTML = document.getElementsByTagName("p")[1].innerHTML;
        document.getElementsByTagName("p")[1].innerHTML = aux1;
    }


    function convertir1Arojo(evento) {
        document.getElementsByTagName("p")[0].className = "fondoRojo";
    }

    function cambiar1Averde(evento) {
        document.getElementsByTagName("p")[0].className = "fondoVerde";
    }

    function cabiar1Aazul(evento) {
        document.getElementsByTagName("p")[0].className = "fondoAzul";
    }

    function cambiar2siguienteColor(evento) {
        if (document.getElementsByTagName("p")[0].className == "fondoRojo"){
            document.getElementsByTagName("p")[0].className = "fondoVerde";
        }else if (document.getElementsByTagName("p")[0].className == "fondoVerde") {
            document.getElementsByTagName("p")[0].className = "fondoAzul";
        }else if (document.getElementsByTagName("p")[0].className == "fondoAzul") {
            document.getElementsByTagName("p")[0].className = "fondoRojo";
        }
    }

    function convertir2Arojo(evento) {
        document.getElementsByTagName("p")[0].className = "fondoRojo";
        document.getElementsByTagName("p")[1].className = "fondoRojo";
    }

    function convertir2Averde(evento) {
        document.getElementsByTagName("p")[0].className = "fondoVerde";
        document.getElementsByTagName("p")[1].className = "fondoVerde";
    }

    function convertir2Aazul(evento) {
        document.getElementsByTagName("p")[0].className = "fondoAzul";
        document.getElementsByTagName("p")[1].className = "fondoAzul";
    }

    function cambiarLosColores(evento) {
        if (document.getElementsByTagName("p")[0].className == "fondoRojo"){
            document.getElementsByTagName("p")[0].className = "fondoVerde";
            document.getElementsByTagName("p")[1].className = "fondoVerde";
        }else if (document.getElementsByTagName("p")[0].className == "fondoVerde") {
            document.getElementsByTagName("p")[0].className = "fondoAzul";
            document.getElementsByTagName("p")[1].className = "fondoAzul";
        }else if (document.getElementsByTagName("p")[0].className == "fondoAzul") {
            document.getElementsByTagName("p")[0].className = "fondoRojo";
            document.getElementsByTagName("p")[1].className = "fondoRojo";
        }
    }

    function ocultarOno(evento) {
        if (document.getElementById("contenedor3").style.visibility == "visible") {
            document.getElementById("contenedor3").style.visibility = "hidden";
        }else{
            document.getElementById("contenedor3").style.visibility = "visible"; 
        }
        
    }

    function EliminarParrafo(evento) {
        var respuesta   = parseInt(prompt("Elija el párrafo que quiera eliminar"));
        var padre       = document.getElementById("contenedor1");
        var hijo        = document.getElementsByTagName("p")[respuesta-1];
        padre.removeChild(hijo);
    }

    
    var cont = 4;
    function añadirParrafo(evento) { 
        var nuevoParrafo        = document.createElement("p");
        nuevoParrafo.innerHTML  = `parrafo ${cont}`; // concatenacion "invent" por kero template strings
        cont ++;
        var padre               = document.getElementById("contenedor1");
        padre.appendChild(nuevoParrafo);
    }

    function modificarContenido(evento) { 
        var parrafo   = parseInt(prompt("Elija el parrafo que quiera modificar"));
        var contenido = prompt("Escriba el nuevo contenido de ese parrafo");
        if (parrafo > document.getElementsByTagName("p")) {
            alert("Indique un numero de parrafo correcto");
        }
        document.getElementsByTagName("p")[parrafo-1].innerHTML = contenido;
        
    }

    function añadirDIV() {
        var nuevoTR = document.createElement('tr');
        
        nuevoTR.appendChild(crearTD("2021-01-21"));
        nuevoTR.appendChild(crearTD("ingreso en efectivo"));
        nuevoTR.appendChild(crearTD(50));
        nuevoTR.appendChild(crearTD(150));
        
        var padre   = document.getElementById('listaMovimientos');
        padre.appendChild(nuevoTR);
        
    }


    function crearTD(texto) {
        var nuevoTD = document.createElement('td');
        nuevoTD.innerHTML = texto;
        return nuevoTD;
    }
}




