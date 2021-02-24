
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
    var ultimaConexion = "Ultima conexion";
    var hora           = new Date();
    localStorage.setItem(ultimaConexion, hora);

    // posicion: 
    
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{
            var texto = "La latitud = ";
            añadirContenido(texto, posicion.coords.latitude);}, 
        (error)=>{ alert("Se ha producido el siguiente error" + error.message); }
    );
   
    navigator.geolocation.getCurrentPosition(
        (posicion)=>{
            var texto = "La longitud = ";
            añadirContenido(texto, posicion.coords.longitude);}, 
        (error)=>{ alert("Se ha producido el siguiente error" + error.message); }
    );

}else {
    var hora = new Date();
    localStorage.setItem("Ultima conexion", hora);
    var texto = "Es visita esta página.";
    modificarContenido(texto);
}



function modificarContenido(texto) { 
    document.getElementById("ultima_visita").innerHTML = texto;
}

function añadirContenido(texto, contenido) { 
    var hijo       = document.createElement("p");
    hijo.innerHTML = texto + contenido; 
    var padre      = document.getElementsByTagName("hr")[0];
    padre.appendChild(hijo);
  
}



