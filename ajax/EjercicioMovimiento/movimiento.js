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
        var objMovimiento = crearMovimiento();
        var objJson       = JSON.stringify(objMovimiento);
        peticion.open("GET", "http://localhost/JavaScript/ajax/ejercicioCompleto/persona.php?x=" + objJson, true);
        peticion.send(null);
    }



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