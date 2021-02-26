// meterlo en un html?
if (localStorage.getItem("Ultima conexion") != null) {
    var ff               = localStorage.getItem("Ultima conexion");
    var ultimaConexion   = Date.parse(ff);
    var ahoraMismo       = new Date();
    var diferencia       = ahoraMismo - ultimaConexion;
    var segundos         = Math.round(diferencia/1000); 
    var minutos          = Math.round(segundos/60);
    var horas            = Math.round(minutos/60);
    var dias             = Math.round(horas/24);
    var texto = `Hacia ${dias} dias, ${horas} horas y ${minutos} minutos que no entrabas.`;
    modificarContenido(texto);
    localStorage.setItem("Ultima conexion", new Date());
    conseguirCoordenadas();
}else {
    localStorage.setItem("Ultima conexion", new Date());
    var texto = "Es la primera vez que visita esta página.";
    modificarContenido(texto);
    conseguirCoordenadas();
}


function modificarContenido(texto) { // funciona
    document.getElementById("ultima_visita").innerHTML = texto;
}

function rellenarTabla(json) { // funciona
    // document.getElementById("ultima_visita").innerHTML = json;
    document.getElementById("lati").value = json[0];
    document.getElementById("longi").value = json[1];
}


function añadirContenido(donde, coordenada) { // funciona
    if (donde == "latitud") {
        document.getElementById("lati").value = coordenada;
    }else {
        document.getElementById("longi").value = coordenada;
    }
}

function conseguirCoordenadas() { // funciona
    conseguirLatitud();
    conseguirLongitud();
}

function conseguirLatitud() {  // no  entra al error
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{ // es una funcion
            añadirContenido("latitud", posicion.coords.latitude);
            localStorage.setItem("latitud", posicion.coords.latitude);
        }, 
        (error)=>{
            alert("lento"); // nunca entra al error
            if (localStorage.getItem("Latitud") != null) {
                añadirContenido("La latitud = ", localStorage.getItem("Latitud"));
            } else {
                añadirContenido("La latitud = ", posicion.coords.latitude);
                localStorage.setItem("Latitud", posicion.coords.latitude);
            }
        },
        { 
            timeout:3000 // no me hace esto
        } 
    );
}

function conseguirLongitud() { // no  entra al error
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{
            añadirContenido("longitud", posicion.coords.Longitud);
            localStorage.setItem("longitud", posicion.coords.Longitud);
        }, 
        (error)=>{
            alert("lento");
            if (localStorage.getItem("Longitud") != null) {
                añadirContenido("longitud", localStorage.getItem("longitud"));
            } else {
                añadirContenido("longitud", posicion.coords.Longitud);
                localStorage.setItem("Longitud", posicion.coords.Longitud);
            }
        },
        { 
            timeout:3
        } 
    );
}

document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(evento) { // funciona
    if (document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", leerRegistro, true);
    }

    function leerRegistro() { 
        var campo = document.getElementById("numero").value;
        if (campo > 0 && campo < 20) {
            enviarRecibir();
        }else {
            alert("El dato introducido no es correcto");
        }
    }
}

function enviarRecibir(evento) { // funciona
    // evento.preventDefault(); //me da error si pongo esto
    var peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { 
            var arrayPHP = JSON.parse(this.responseText); 
            rellenarTabla(arrayPHP);
        }
    }
    var edad = document.getElementById("numero").value;
    var objJson     = JSON.stringify(edad);
    peticion.open("POST", "http://localhost/JavaScript/Examen1/leer.php", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // esto dice el profesor que falta?
    peticion.send(objJson); // el parametro es el body
}