document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        cargarMain();
        document.images[0].addEventListener("click", enviarDatos, false);
    }
}

function cargarMain() {
    var objEnvio = new Envio();
    primeraConexion(objEnvio);
    crearLatitud(objEnvio);
    crearLongitud(objEnvio);
    contarSeleccion(objEnvio);

    console.log(objEnvio);
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
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            contador ++;
        }
    }
    objEnvio.regalos = contador;
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
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = ()=> {
        if (peticion.readyState == 4){
            if (peticion.status == 200) { 
                // console.log(JSON.parse(peticion.responseText)); 
                console.log(peticion.responseText);
            } else {
                console.log("hubo un error");
            }
        }
    }

    var objEnvio2 = new Envio();
    primeraConexion(objEnvio2);
    crearLatitud(objEnvio2);
    crearLongitud(objEnvio2);
    contarSeleccion(objEnvio2);
    console.log(objEnvio2);

    var objJson = JSON.stringify(objEnvio2); // tengo que hacerlo con get
    peticion.open("POST", `http://localhost/JavaScript/zzfinal/kk.php`, true); // en el examen dice que sera con get
    // peticion.setRequestHeader("accept", "application/json");
    peticion.send(JSON.stringify(objJson));

}

