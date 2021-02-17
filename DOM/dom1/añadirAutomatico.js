window.addEventListener("load", añadirParrafo, false); 
// El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.

function añadirParrafo(params) {
    var nuevoParrafo        = document.createElement("p");
    nuevoParrafo.innerHTML  = 'parrafo';
    var padre               = document.getElementById("contenedor1");
    padre.appendChild(nuevoParrafo);
}





/*

document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", añadirParrafo, true);
    }
  
    function añadirParrafo(evento) { 
        var nuevoParrafo        = document.createElement("p");
        nuevoParrafo.innerHTML  = `parrafo`;
        var padre               = document.getElementById("contenedor1");
        padre.appendChild(nuevoParrafo);
    }

k
}
*/