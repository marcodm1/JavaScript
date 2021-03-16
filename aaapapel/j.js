document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("añadirNombre").addEventListener("click", añadirNombre, true);
        document.getElementById("añadirApellido").addEventListener("click", añadirApellido, true);
        document.getElementById("añadirEdad").addEventListener("click", añadirEdad, true);
        document.getElementById("enviar").addEventListener("click", enviar, true);
        // document.getElementById("localizacion").addEventListener("click", localizacion, true);
        document.getElementById("vehiculo").addEventListener("change", localizacion, true);

    }
}

// aqui empieza el main
var persona = new Object();




// funciones
function añadirNombre() {
    persona.nombre = prompt("Introduzca un nombre:", "Marco");
    console.log(persona);
}
function añadirApellido() {
    persona.apellido = prompt("Introduzca un apellido:", "Dominguez");
    console.log(persona);
}
function añadirEdad() {
    persona.edad = parseInt(prompt("Introduzca una edad:", 30));
    console.log(persona);
}
function enviar() {
    var conexion = new XMLHttpRequest();
    document.getElementById("enviando").style.display = "inline-block";
    conexion.onreadystatechange = function(){
        if (conexion.readyState == 4){
            document.getElementById("enviando").style.display = "none";
            if (conexion.status == 200) {
                var respuesta = JSON.parse(conexion.responseText);
                rellenarTabla(respuesta);
            }else {
                alert("Error:");
            }
        }
    }

    var objetoJson = JSON.stringify(persona);
    conexion.open("get", "http://localhost/JavaScript/aaapapel/p.php?x=" + objetoJson, true);
    conexion.send();
}

function rellenarTabla(respuesta) {

    if (respuesta.nombre != undefined){
        document.getElementsByTagName("td")[0].innerHTML = respuesta.nombre;
    }else {
        console.log(respuesta.nombre);
    }
    if (respuesta.apellido != undefined){
        document.getElementsByTagName("td")[1].innerHTML = respuesta.apellido;
    }else {
        console.log(respuesta.apellido);
    }
    if (respuesta.edad != undefined){
        document.getElementsByTagName("td")[2].innerHTML = respuesta.edad;
    }else {
        console.log(respuesta.edad);
    }

}

function localizacion() {
    // crearLatitud();
    // crearLongitud();
    // console.log(localStorage.getItem("latitud"));
    // console.log(localStorage.getItem("longitud"));
    // document.getElementsByTagName("td")[3].innerHTML = localStorage.getItem("latitud");
    // document.getElementsByTagName("td")[4].innerHTML = localStorage.getItem("longitud");

    var prueba = document.getElementById("vehiculo").value;
    console.log(prueba);
} 

function crearLatitud() {
    navigator.geolocation.getCurrentPosition(
        (opcion)=>{ localStorage.setItem("latitud", opcion.coords.latitude); },
        (error)=>{alert("Error:" + error.message);}
    );
}
function crearLongitud() {
    navigator.geolocation.getCurrentPosition(
        (opcion)=>{ localStorage.setItem("longitud", opcion.coords.longitude); },
        (error)=>{alert("Error:" + error.message);}
    );
}