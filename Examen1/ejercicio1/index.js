if (localStorage.getItem("Ultima conexion") != null) {
    var ff               = localStorage.getItem("Ultima conexion");
    var ultimaConexion   = Date.parse(ff);
    var ahoraMismo       = new Date();
    var diferencia       = ahoraMismo - ultimaConexion;
    var segundos         = Math.round(diferencia/1000); 
    var minutos          = Math.round(segundos/60);
    var horas            = Math.round(minutos/60);
    var dias             = Math.round(horas/24);
    var texto = document.createTextNode(`Hacia ${dias} dias, ${horas} horas y ${minutos} minutos que no entrabas.`);
    modificarContenido(texto);
    localStorage.setItem("Ultima conexion", new Date());
    conseguirCoordenadas();
}else {
    localStorage.setItem("Ultima conexion", new Date());
    var texto = documente.createTextNode("Es la primera vez que visita esta página.");
    modificarContenido(texto);
    conseguirCoordenadas();
}


function modificarContenido(texto) {
    var padre = document.getElementById("ultima_visita");
    padre.appendChild(texto);
}

function otroMovimiento(tablaMovimientos) {
    for (var i = 0; i < tablaMovimientos.length; i++) {
        rellenarNodoTr(tablaMovimientos[i]);
    }
} 

function rellenarNodoTr(movimiento) {
    var nuevoTr = crearTr();
    
    var th = document.createElement("th");
    nuevoTr.appendChild(th);
    var texto   = document.createTextNode("1");
    th.appendChild(texto);

    for (var i = 0; i <movimiento.length; i++) {
        var th = document.createElement("th");
        nuevoTr.appendChild(th);
        var texto   = document.createTextNode(movimiento[i]);
        th.appendChild(texto);
    }
}

function crearTr() {
    var nuevoTr = document.createElement('tr');
    var table   = document.getElementsByTagName("table")[0];
    table.appendChild(nuevoTr);
    return nuevoTr;
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
            añadirContenido("longitud", posicion.coords.longitude);
            localStorage.setItem("longitud", posicion.coords.longitude);
        }, 
        (error)=>{
            if (localStorage.getItem("Longitud") != null) {
                añadirContenido("longitud", localStorage.getItem("longitud"));
            } else {
                añadirContenido("longitud", posicion.coords.longitude);
                localStorage.setItem("Longitud", posicion.coords.longitude);
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
            var tablaMovimientos = JSON.parse(this.responseText); 
            otroMovimiento(tablaMovimientos);
        }
    }
    var num     = document.getElementById("numero").value;
    var objJson = JSON.stringify(num); // tengo que hacerlo con get
    peticion.open("POST", "http://localhost/JavaScript/Examen1/ejercicio1/leer.php", true); // en el examen dice que sera con get
    // peticion.setRequestHeader("accept", "application/json");
    peticion.send(objJson);
}
