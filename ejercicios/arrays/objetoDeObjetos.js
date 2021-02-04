function Persona (txtNombre, nEdad) {
    this.nombre     = txtNombre;
    this.edad       = nEdad;
    this.envejecer  = fnEnvejecer;
}

function Alumno (objPersona, nDWEC, nDWES) {
    this.persona    = objPersona;
    this.nota_dwec  = nDWEC;
    this.nota_dwes  = nDWES;
    this.media      = fnMedia;
}

function fnEnvejecer (edad){
    edad -= 10;
    return edad;
}

function fnMedia( nota_dwec, nota_dwes){
    var media = (nota_dwec + nota_dwes)/2;
    return media;
}


var mi_nombre   = prompt("Nombre?", "Pepe");
var mi_edad     = parseInt(prompt("la edad es", 21));
var mi_persona  = new Persona (mi_nombre, mi_edad);
var mi_cli      = parseInt(prompt("nota cliente?", 10));
var mi_ser      = parseInt(prompt("nota servidor?", 8));
var mi_alumno   = new Alumno(mi_persona, mi_cli, mi_ser);
var mi_media    = mi_alumno.media(mi_cli, mi_ser);

if (mi_persona.edad > 20) {
    mi_edad = fnEnvejecer(mi_edad);
}

document.write("Nombre: " + mi_nombre + "<br>");
document.write("Años: " + mi_edad + "<br>");
document.write("La nota media es: " + mi_media + "<br>");




