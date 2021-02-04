var imgArray = new Array("0.png", "1.png", "2.png", "3.png");

document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento){
    if (document.readyState == "interactive") { // interactive, complete
        document.getElementById("boton").addEventListener("click", funcion1, true);
    }
    
}

function funcion1(evento){
    var numero = Math.floor(Math.random()*4);
    document.images["imagen"].src = imgArray[numero];
}