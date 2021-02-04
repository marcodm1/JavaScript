
document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) { // element son las etiquetasde html
    if (document.readyState == "interactive") {
        document.getElementById("boton0").addEventListener("click", funcion0, true);
        document.getElementById("boton1").addEventListener("click", funcion1, true);
        document.getElementById("boton2").addEventListener("click", funcion2, true);
        document.getElementById("boton3").addEventListener("click", funcion3, true);
        document.getElementById("boton4").addEventListener("click", funcion4, true);
        document.getElementById("boton5").addEventListener("click", funcion5, true);
        document.getElementById("boton6").addEventListener("click", funcion6, true);
        document.getElementById("boton7").addEventListener("click", funcion7, true);
        document.getElementById("boton8").addEventListener("click", funcion8, true);
        document.getElementById("boton9").addEventListener("click", funcion9, true);
        document.getElementById("boton10").addEventListener("click", funcion10, true);
        document.getElementById("boton11").addEventListener("click", funcion11, true);
        document.getElementById("boton12").addEventListener("click", funcion12, true);
    }
        
    function funcion0(evento) {
        var aux1 = document.getElementsByTagName("p")[0].innerHTML;
        document.getElementsByTagName("p")[0].innerHTML = document.getElementsByTagName("p")[1].innerHTML;
        document.getElementsByTagName("p")[1].innerHTML = aux1;
        // hacer lo mismo pero sin TagName
        // hacer lo mismo pero con el tercero
    }


    function funcion1(evento) {
        document.getElementsByTagName("p")[0].className = "fondoRojo";
    }

    function funcion2(evento) {
        document.getElementsByTagName("p")[0].className = "fondoVerde";
    }

    function funcion3(evento) {
        document.getElementsByTagName("p")[0].className = "fondoAzul";
    }

    function funcion4(evento) {
        if (document.getElementsByTagName("p")[0].className == "fondoRojo"){
            document.getElementsByTagName("p")[0].className = "fondoVerde";
        }else if (document.getElementsByTagName("p")[0].className == "fondoVerde") {
            document.getElementsByTagName("p")[0].className = "fondoAzul";
        }else if (document.getElementsByTagName("p")[0].className == "fondoAzul") {
            document.getElementsByTagName("p")[0].className = "fondoRojo";
        }
    }

    function funcion5(evento) {
        document.getElementsByTagName("p")[0].className = "fondoRojo";
        document.getElementsByTagName("p")[1].className = "fondoRojo";
    }

    function funcion6(evento) {
        document.getElementsByTagName("p")[0].className = "fondoVerde";
        document.getElementsByTagName("p")[1].className = "fondoVerde";
    }

    function funcion7(evento) {
        document.getElementsByTagName("p")[0].className = "fondoAzul";
        document.getElementsByTagName("p")[1].className = "fondoAzul";
    }

    function funcion8(evento) {
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

    function funcion9(evento) {
        if (document.getElementsByTagName("p")[2].style.visibility == "visible") {
            document.getElementsByTagName("p")[2].style.visibility = "hidden";
        }else{
            document.getElementsByTagName("p")[2].style.visibility = "visible"; 
        }
        
    }

    function funcion10(evento) {
        var respuesta = parseInt(prompt("Elija el párrafo que quiera eliminar"));
        padre = document.getElementById("contenedor1");
        hijo  = document.getElementsByTagName("p")[respuesta-1];
        padre.removeChild(hijo);
    }

    function funcion10(evento) {
        var respuesta = parseInt(prompt("Elija el párrafo que quiera eliminar"));
        padre = document.getElementById("contenedor1");
        hijo  = document.getElementsByTagName("p")[respuesta-1];
        padre.removeChild(hijo);
    }

    var cont = 4;
    function funcion11(evento) { 
        var nuevoParrafo        = document.createElement("p");
        nuevoParrafo.innerHTML  = "parrafo" + cont;
        cont ++;
        padre = document.getElementById("contenedor1");
        padre.appendChild(nuevoParrafo);
    }

    function funcion12(evento) { 
        var parrafo   = parseInt(prompt("Elija el parrafo que quiera eliminar"));
        var contenido = prompt("Escriba el nuevo contenido de ese parrafo");
        if (parrafo > document.getElementsByTagName("p")) {
            alert("Indique un numero de parrafo correcto");
        }
        document.getElementsByTagName("p")[parrafo-1].innerHTML = contenido;
        
    }
}

