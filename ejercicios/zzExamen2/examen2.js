ruta = new Trayecto("ruta del guadarrama", 142, 300, "");

class Trayecto {
    constructor(descripcion, kmts, calorias, salida, llegada){
        this.descripcion    = descripcion;
        this.kmts           = kmts;
        this.calorias       = calorias;
        this.salida         = new Date(salida);  // el dia que van a salir y despues a la hora que va a salir
        this.llegada        = new Date(llegada); // el dia que van a salir y despues a la hora que va a llegar
    }

    media(kmts, salida, llegada); // ok
    duracion(salida, llegada);
}

function media(kmts, salida, llegada) { // ok
    var tiempoCarreraMili = llegada.getTime() - salida.getTime();
    var media = tiempoCarreraMili / kmts;
    var minuto = media / 60;
    document.write("Se tarda de media: " + minuto + " minutos por km.");
}

function duracion(salida, llegada) {
    var tiempoCarreraMili = llegada.getTime() - salida.getTime();
    var segundos = Math.trunc(tiempoCarreraMili/1000);          
    var minutos  = Math.trunc(tiempoCarreraMili/(1000*60));             
    var horas    = Math.trunc(tiempoCarreraMili/3600000); 
    

    document.write("La carrera va a durar:" + horas + "h, " + minutos + "min, " + segundos + "segundos.");
}

// sumarle 10 minutos a un objeto Date
var hoy = new Date();
var enDiezMinutos = hoy.getTime() + (1000*60*10);
hoy.setTime(enDiezMinutos);
document.write("Dentro de 10 minutos es: " + hoy);