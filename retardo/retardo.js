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
                    var array1 = JSON.parse(peticion.responseText);
                    // document.getElementsByTagName("td")[0].innerHTML = array1; 
                    pasarAtabla(array1);
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

function pasarAtabla(array1) {

    for (var i = 0; i<array1.length; i++) {
        var tr     = document.createElement("tr");
        var padre1 = document.getElementsByTagName("tbody")[0];
        padre1.appendChild(tr);

        for (var j = 0; j<array1[i].length; j++) {
            var posicion = document.createElement("td");
            var padre    = document.getElementsByTagName("th")[j];
            padre.appendChild(posicion);

            var contenido = document.createTextNode(array1[i][j]);
            posicion.appendChild(contenido);
        }
    }
}