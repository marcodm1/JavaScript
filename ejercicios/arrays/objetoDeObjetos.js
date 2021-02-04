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


// ---------------------------------------------------------------------------------


// var mi_alumno2 = new Alumno(mi_alumno.persona, mi_alumno.n_cli, mi_alumno.n_ser); // asi se crea una copia del objeto alumno

// // otra forma es:
// mi alumno2 = new Alumno();
// mi_alumno2.persona.nombre   = mi_alumno.persona.nombre;
// mi_alumno2.persona.edad     = mi_alumno.persona.edad;
// mi_alumno2.nota_dwec        = mi_alumno.nota_dwec;
// mi_alumno2.nota_dwes        = mi_alumno.nota_dwes;

// aprender a crear un objeto con []




