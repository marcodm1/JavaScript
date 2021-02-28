// El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.
window.addEventListener("load", añadirParrafo, false); 

function añadirParrafo(params) {
    var nuevoParrafo        = document.createElement("p");
    nuevoParrafo.innerHTML  = 'parrafo';
    var padre               = document.getElementById("contenedor1");
    padre.appendChild(nuevoParrafo);
}
