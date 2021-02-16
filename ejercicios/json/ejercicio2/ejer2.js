document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton1").addEventListener("click",  cargar, true);
    }
        
    function cargar() {
        var miObjeto    = crearObjeto();
        var miJson      = JSON.stringify(miObjeto); // esto convierte el objeto myObj en cadena
        window.location = "http://localhost/JavaScript/JavaScript/ejercicios/json/ejercicio2/ejer2.php?x=" + miJson;
    }



}

function crearObjeto() {
    class Datos {
        constructor(provincia, edad){
            this.provincia  = provincia;
            this.edad       = edad;
        }
    }
    var provincia   = document.getElementById("intNumero");
    var edad        = document.getElementById("intEdad");
    var datos = new Datos(provincia, edad);

    return datos;
}