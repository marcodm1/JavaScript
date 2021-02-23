document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton0").addEventListener("click",  enviarRecibir, true);
    }
        
    function enviarRecibir(evento) {
        evento.preventDefault(); // hace que no se comporte como por defecto, para que no haga submit del formulario
        var peticion = new XMLHttpRequest();
        
        peticion.onreadystatechange = function() { // cuando la  peticion. el estado este todo ok
            if (this.readyState == 4 && this.status == 200) { // si .readyState este en 4, que es finalizado, y status = 200 que es finalizado
                var miobjeto = JSON.parse(this.responseText); // parse convierte, como parseInt, y en este caso l oconvierte a Json responseText es lo que devuelva php
                document.getElementsByClassName("contenedor1")[0].innerHTML = miobjeto.nombre; // haz esto: responsetext es lo que devuelve el servidor
            }
        }
        var objPersona  = crearPersona();
        var objJson     = JSON.stringify(objPersona);
        console.log(objJson);
        peticion.open("POST", "http://localhost/JavaScript/ajax/EjercicioPersona/persona.php", true); // en clase/casa: 
        peticion.send(objJson); // el parametro es el body
    }

}

function crearPersona() {
    class Persona {
        constructor(nombre, edad){
            this.nombre = nombre;
            this.edad   = edad;
        }
    }
    var nombre  = document.getElementById("strNombre").value; // devuevle un objeto del id
    var edad    = document.getElementById("intEdad").value;
    var persona = new Persona(nombre, edad);

    return persona;
}