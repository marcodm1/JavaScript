document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        cargarMain();
        comprobarIMG();
        document.images[0].addEventListener("click", enviarDatos, false);
        document.formulario.regalo[0].addEventListener("click", comprobarIMG, false);
        document.formulario.regalo[1].addEventListener("click", comprobarIMG, false);
        document.formulario.regalo[2].addEventListener("click", comprobarIMG, false);
    }
}
function cargarMain() {
    var objEnvio = new Envio();
    primeraConexion(objEnvio);
    crearLatitud(objEnvio);
    crearLongitud(objEnvio);
    contarSeleccion(objEnvio);

    crearParrafos();
    rellenarParrafos(objEnvio);

    console.log(objEnvio);
    console.log("final de cargarMain");
}
function primeraConexion(objEnvio) {
    localStorage.setItem("ultima conexion", new Date());
    objEnvio.fecha = localStorage.getItem("ultima conexion");
}
function crearLatitud(objEnvio) {
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{
            localStorage.setItem("latitud", posicion.coords.latitude);
            objEnvio.latitud = localStorage.getItem("latitud");
        }, 
        (error)=>{alert("Error al rear la latitud." + error.message);},
    );
}
function crearLongitud(objEnvio) {
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{
            localStorage.setItem("longitud", posicion.coords.longitude)
            objEnvio.longitud = localStorage.getItem("longitud")
        }, 
        (error)=>{alert("Error al crear la longitud." + error.message);},
    );
}
function contarSeleccion(objEnvio) {
    var contador = 0;
    var check = document.formulario.regalo;
    console.log(check);
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            contador ++;
        }
    }
    objEnvio.regalos = contador;
}
function crearParrafos() {
    var p1     = document.createElement("p");
    var padre1 = document.getElementsByTagName("form")[0];
    padre1.appendChild(p1);
    var p2     = document.createElement("p");
    var padre2 = document.getElementsByTagName("form")[0];
    padre2.appendChild(p2);
    var p3     = document.createElement("p");
    var padre3 = document.getElementsByTagName("form")[0];
    padre3.appendChild(p3);
    var p4     = document.createElement("p");
    var padre4 = document.getElementsByTagName("form")[0];
    padre4.appendChild(p4);

}
function rellenarParrafos(objEnvio) {
    console.log(objEnvio.latitud);
    var hijo1  = document.createTextNode(objEnvio.fecha);
    var padre1 = document.getElementsByTagName("p")[1]; 
    padre1.appendChild(hijo1);

    var hijo2  = document.createTextNode(objEnvio.latitud);
    var padre2 = document.getElementsByTagName("p")[2]; 
    padre2.appendChild(hijo2);

    var hijo3  = document.createTextNode(objEnvio.latitud);
    var padre3 = document.getElementsByTagName("p")[3]; 
    padre3.appendChild(hijo3); 

    var hijo4  = document.createTextNode(objEnvio.latitud);
    var padre4 = document.getElementsByTagName("p")[4]; 
    padre4.appendChild(hijo4); 
    
}
class Envio {
    constructor(fecha, latitud, longitud, regalos){
        this.fecha    = fecha;
        this.latitud  = latitud;
        this.longitud = longitud;
        this.regalos  = regalos;
    }
}
function comprobarIMG() {
    document.images[0].style.display = "none";
    if (document.formulario.regalo[0].checked || document.formulario.regalo[1].checked ||document.formulario.regalo[2].checked) {
        document.images[0].style.display = "block";
    }else {
        document.images[0].style.display = "none";
    }
}

function enviarDatos() {

}
