document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton0").addEventListener("click",  enviarRecibir, true);
    }
        
    function enviarRecibir() {
        var peticion = new XMLHttpRequest();
        peticion.onreadystatechange = function() { // cuando la  peticion. el estado este todo ok
            if (this.readyState == 4 && this.status == 200) { // si .readyState este en 4, que es finalizado, y status = 200 que es finalizado
                var miobjeto = JSON.parse(this.responseText);
                document.getElementById("contenedor1").innerHTML = miobjeto.nombre; // haz esto: responsetext es lo que devuelve el servidor
            }
        }
        var miPersona = crearPersona();
        peticion.open("GET", "http://localhost/JavaScript/ejercicios/ajax/ejercicio1/ejer1.php", true);
        peticion.send(null);
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