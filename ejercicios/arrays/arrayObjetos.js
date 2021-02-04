function persona() {
    this.nombre = prompt ("Nombre del alumno");
    this.edad   = parseInt (prompt ("Edad del alumno",18));
}
function alumno() {
    this.persona   = new persona();
    this.nota_dwec = parseInt (prompt ("Nota de dawec", 1));
    this.nota_dwes = parseInt (prompt ("Nota de dawes", 1));
    this.media     = fnMedia;
}
function fnMedia() {
    var nota = (this.nota_dwec + this.nota_dwes)/2;
    return nota;
}
function crearAlumno(){
    var nuevo_alumno = new alumno();
    return nuevo_alumno;
}

function imprimirNombre(){
    datos_alumnos.sort(
        function(a, b) {
            var nombre_a = a.persona.nombre.toLowerCase(), nombre_b = b.persona.nombre.toLowerCase()
            if (nombre_a < nombre_b) return -1;
            if (nombre_a > nombre_b) return 1;
            return 0;
        }
    );
    for (var i=0; i<datos_alumnos.length; i++){
        document.write(datos_alumnos[i].persona.nombre + " " + datos_alumnos[i].media() + "<br>");
    }
}
function imprimirNota(){
    datos_alumnos.sort(function(x, y) {
        if(x.media() < y.media()){
            return 1;
        }
        if(x.media() > y.media()){
            return -1;
        }
        return 0;
        }
    );
    for (var i=0; i<datos_alumnos.length; i++){
    document.write(datos_alumnos[i].persona.nombre + " " + datos_alumnos[i].media() + "<br>");
    }
} 
var bandera;
var datos_alumnos = [];
var i = 0;

do {
    bandera = false;
    datos_alumnos[i] = crearAlumno();
    i++;
    bandera = confirm("quiere ingresar otro alumno?");
}while (bandera);

var mi_media = fnMedia();
var datos_alumnos_alumnos  = imprimirNombre();
var datos_alumnos_alumnos2 = imprimirNota();


















