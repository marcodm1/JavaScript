var cargando = document.getElementById("cargando");
cargando.style.display = "none";
document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(evento) { 
    if (document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", enviarRecibir, true);
    }

    function enviarRecibir(evento) {
        var peticion = new XMLHttpRequest();
        peticion.onreadystatechange = function() {
            if (peticion.readyState == 4){
                if (peticion.status == 200) { 
                    cargando.style.display = "none";
                }
            }else {
                cargando.style.display = "block";
            }
        }
        var num     = document.getElementById("numero").value;
        var objJson = JSON.stringify(num);
        peticion.open("POST", "http://localhost/JavaScript/retardo/retardo.php", true); 
        // peticion.setRequestHeader("accept", "application/json");
        peticion.send(objJson);
    }
    
}

