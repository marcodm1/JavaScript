document.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("añadir").addEventListener("click",  enviarRecibir, true);
    }
}   
function enviarRecibir() {
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function() { 
        if (peticion.readyState == 4 && peticion.status == 200) { 
            var miobjeto = JSON.parse(peticion.responseText); 
            document.getElementsByClassName("contenedor1")[0].innerHTML = "me devuelve php " + miobjeto; 
        }
    }
    var objMovimiento = crearMovimiento();
    var objJson       = JSON.stringify(objMovimiento);
    peticion.open("GET", "http://localhost/JavaScript/ajax/EjercicioMovimiento/movimiento.php?x=" + objJson, true);
    peticion.send();
}





function crearMovimiento() {
    class Movimiento {
        constructor(fecha, descripcion, importe, saldo){
            this.fecha       = fecha;
            this.descripcion = descripcion;
            this.importe     = importe;
            this.saldo       = saldo;
        }
    }
    var fecha       = document.getElementById("strFecha"  ).value;
    alert("2");
    var descripcion = document.getElementById("strDesc"   ).value;
    var importe     = document.getElementById("intImporte").value;
    var saldo       = document.getElementById("intSaldo"  ).value;
    var movimiento  = new Movimiento(fecha, descripcion, importe, saldo);

    return movimiento;
}

/*
function añadirDIV() {
    var nuevoTR = document.createElement('tr');
    
    nuevoTR.appendChild(crearTD("2021-01-21"));
    nuevoTR.appendChild(crearTD("ingreso en efectivo"));
    nuevoTR.appendChild(crearTD(50));
    nuevoTR.appendChild(crearTD(150));
    
    var padre   = document.getElementById('listaMovimientos');
    padre.appendChild(nuevoTR);
    
}


function crearTD(texto) {
    var nuevoTD = document.createElement('td');
    nuevoTD.innerHTML = texto;
    return nuevoTD;
}


*/