document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("padre" ).addEventListener("click", cambiarFondoDiv, true);
        document.getElementById("hijo"  ).addEventListener("click", cambiarColorLetra, true);
    }
}
   
function cambiarFondoDiv(evento) {
    var padre = document.getElementById("padre");
    padre.setAttribute("style", "background-color: green;");
    
    setTimeout(tiempo, 3000 );
    function tiempo() {
        padre.setAttribute("style", "background-color: white;");
    }
}

function cambiarColorLetra(evento){  // cuando hace click en el hijo, se activa el padre tambien y no deberia 
    var padre = document.getElementById("hijo");
    padre.setAttribute("style", "color: blue;");
    setTimeout(tiempo, 5000 );
    function tiempo() {
        padre.setAttribute("style", "color: black;");
    }
}