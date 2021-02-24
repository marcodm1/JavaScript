document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton0").addEventListener("click",  cargar, true);
    
    }
        
    function cargar() {
        var persona = crearPersona();
        var miJson  = JSON.stringify(persona); // esto convierte el objeto myObj en cadena

        window.location = "http://localhost/JavaScript/json/rangoEedad/rango.php?x=" + miJson;
    }



}

function crearPersona() {
    class Persona {
        constructor(nombre, edad){
            this.nombre = nombre;
            this.edad   = edad;
        }
    }
    var nombre  = document.getElementById("strNombre");
    var edad    = document.getElementById("intEdad");
    var persona = new Persona(nombre, edad);

    return persona;
}