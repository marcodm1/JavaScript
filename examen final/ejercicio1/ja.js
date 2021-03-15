function Datos (lat, lon, fec, sel) {
	this.latitud   = lat;
	this.longitud  = lon;
	this.fecha     = fec;
	this.seleccion = sel;
}
var opc = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 30000
};

var mis_datos = new Datos();

document.addEventListener("readystatechange", cargar_eventos, false );

function cargar_eventos(evento) {
  if (document.readyState == "interactive") {
     leer_datos();
     control_imagen();
     document.formulario.regalo[0].addEventListener("change", control_imagen);
     document.formulario.regalo[1].addEventListener("change", control_imagen);
     document.formulario.regalo[2].addEventListener("change", control_imagen);
     document.images[0].addEventListener("click", procesar_datos);
  }
}

function control_imagen() {
//alert("Control imagen");
     if (contar() > 0) {
        document.images[0].style.display = "block";
     } else {
        document.images[0].style.display = "none";
     }
}

function contar() {
//alert("Contar");
	var opcion = 0;
        for (var i = 0; i < document.formulario.regalo.length; i++) {
                 if (document.formulario.regalo[i].checked) {
                    opcion += 1;
                 }
        }
	return opcion;
}

function procesar_datos() {
	if (contar() == 2) {
		obtener_datos();
		guardar_datos();
		enviar_datos();
	} else {
		document.getElementById("error").style.display = "block";
		setTimeout("ocultar()", 5000);
	}
}

function obtener_datos() {
	mis_datos.fecha = new Date();
	navigator.geolocation.getCurrentPosition(localizado, no_localizado, opc);
	var opcion = 0;
	for (var i = 0; i < document.formulario.regalo.length; i++) {
		if (document.formulario.regalo[i].checked) {
			opcion += Math.pow(2, i);
		}
	}
	mis_datos.seleccion = opcion;
}

function guardar_datos () {
        if (typeof(Storage) !== "undefined") {
           localStorage.setItem("x", JSON.stringify(mis_datos));
        } else {
           alert("Sintiendolo mucho tu navegador no soporta Web Storage");
        }
}

function enviar_datos () {
//alert("Enviando los datos al servidor");
    document.getElementById("guardando").style.display = "block";
	var peticion = new XMLHttpRequest();
	peticion.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				document.getElementById("guardando").style.display = "none";
			} else {
				alert ("Error num "+this.status+" Error: "+this.statusText);
			}
		}
	}
	peticion.open("GET", "server.php?x="+JSON.stringify(mis_datos), true);
	peticion.send(null);
}    

function ocultar() {
    document.getElementById("error").style.display = "none";
}

function localizado (objeto) {
alert("Localizado");
	mis_datos.latitud  = objeto.coords.latitude;
	mis_datos.longitud = objeto.coords.longitude;
}
function no_localizado () {
alert("No localizado");
	mis_datos.latitud  = 0;
	mis_datos.longitud = 0;
}

function leer_datos() {
alert("Leer datos");
	var texto = "";
	var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem("x") !== null) {
			mis_datos = JSON.parse(localStorage.getItem("x"));
			mis_datos.fecha = new Date(mis_datos.fecha);
			texto = "Fecha ultima visita: ";
			texto += mis_datos.fecha.getDate();
			texto += " de ";
			texto += meses[mis_datos.fecha.getMonth()];
			texto += " de ";
			texto += mis_datos.fecha.getFullYear();
			texto += "<br>";
			texto += "Desde la posicion: Latitud.- ";
			texto += mis_datos.latitud;
			texto += " Longitud.- ";
			texto += mis_datos.longitud;
			document.getElementById("ultima_visita").innerHTML = texto;
			var opciones = Number(mis_datos.seleccion);
			for (var j = document.formulario.regalo.length - 1; j >= 0; j--){
               if (opciones >= Math.pow(2, j)) {
                  opciones -= Math.pow(2, j);
                  document.formulario.regalo[j].checked = true;
               } else {
                  document.formulario.regalo[j].checked = false;
               }
            }
        }
    } else {
		alert("Sintiendolo mucho tu navegador no soporta Web Storage");
	}
}