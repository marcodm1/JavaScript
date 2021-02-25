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


function modificarContenido(texto) { 
    document.getElementById("ultima_visita").innerHTML = texto;
}

function rellenarTabla(json) { 
    document.getElementById("ultima_visita").innerHTML = json.edad;
}


function añadirContenido(texto, contenido) { 
    var hijo       = document.createElement("p");
    hijo.innerHTML = texto + contenido; 
    var padre      = document.getElementsByTagName("hr")[0];
    padre.appendChild(hijo);
}

function conseguirCoordenadas() {
    conseguirLatitud();
    conseguirLongitud();
}

function conseguirLatitud() {
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{ // es una funcion
            var texto = "La latitud = ";
            añadirContenido(texto, posicion.coords.latitude);
            localStorage.setItem("Latitud", posicion.coords.latitude);
        }, 
        (error)=>{
            alert("sdfsd");
            if (localStorage.getItem("Latitud") != null) {
                añadirContenido("La latitud = ", localStorage.getItem("Latitud"));
            } else {
                añadirContenido("La latitud = ", posicion.coords.latitude);
                localStorage.setItem("Latitud", posicion.coords.latitude);
            }
        },
        { 
            timeout:3000
        } 
    );
}

function conseguirLongitud() {
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{
            añadirContenido("La longitud = ", posicion.coords.Longitud);
            localStorage.setItem("Longitud", posicion.coords.Longitud);
        }, 
        (error)=>{
            if (localStorage.getItem("Longitud") != null) {
                añadirContenido("La Longitud = ", localStorage.getItem("Longitud"));
            } else {
                añadirContenido("La Longitud = ", posicion.coords.Longitud);
                localStorage.setItem("Longitud", posicion.coords.Longitud);
            }
        },
        { 
            timeout:3000
        } 
    );
}

document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", leerRegistro, true);
    }

    function leerRegistro() {
        var campo = document.getElementById("edad").value;
        if (campo > 0 || campo < 20) {
            enviarRecibir();
        }else {
            alert("El dato introducido no es correcto");
        }
    }
}


function enviarRecibir(evento) {
    evento.preventDefault(); // hace que no se comporte como por defecto, para que no haga submit del formulario
    var peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = function() { // cuando la  peticion. el estado este todo ok
        if (this.readyState == 4 && this.status == 200) { // si .readyState este en 4, que es finalizado, y status = 200 que es finalizado
            var miobjeto = JSON.parse(this.responseText); // parse convierte, como parseInt, y en este caso l oconvierte a Json responseText es lo que devuelva php
            rellenarTabla(miobjeto); // haz esto: responsetext es lo que devuelve el servidor
        }
    }
    var edad = document.getElementById("edad").value;
    var objJson     = JSON.stringify(edad);
    peticion.open("POST", "http://localhost/JavaScript/Examen1/leer.php", true);
    peticion.send(objJson); // el parametro es el body
}