class Alumno {
    constructor (dni, nombre, cp, fechaNacimiento){
        this.dni             = dni;
        this.nombre          = nombre;
        this.cp              = cp;
        this.fechaNacimiento = new Date(fechaNacimiento);
    }

    edad (fechaNacimiento) {
        var hoy        = new Date();
        var fecha1     = new Date('1990, 4, 19');
        var añosEnMili = hoy-fecha1;
        document.write(añosEnMili);
    }
}


class Aula {
    constructor (denominacion, localizacion, capacidad, alumnos){
        this.denominacion = denominacion; // por ejemplo 1º A de Bachillerato
        this.localizacion = localizacion; // por ejemplo edificio B planta 2
        this.capacidad    = capacidad;    // número máximo de alumnos
        this.alumnos      = Array();      // tabla de objetos Alumno
    }

    plazasLibres () { // Devuelve el número de plazas libres del aula.
        
    }

    alumnoMenor () { // Devuelve el nombre del alumno más pequeño.

    }

    sacarLista () { // Imprime un listado de los nombres de los alumnos del aula.

    }
}


   
// -------- main ---------

var arrayAulas = new Array();
var alumnos    = new Array();
añadirAula();

mostrarNombresAulas();
mostrarBenjamines();

function añadirAula() {
    do {
        do {
            var denominacion = prompt("Indique el nombre del aula", "1º A de Bachilerato");
            var encontrado   = comprobarDenominacion(denominacion); 
        }while(encontrado);
        
        var localizacion = prompt("Indique donde esta situada el aula", "Edificio B planta 2");
        var capacidad    = prompt("Indique el numero maximo de alumnos de este aula", 30);

        do {
            añadirAlumno();
            var continuar = confirm("Desea introducir un alumno mas?");
        }while(continuar && alumnos.length < capacidad);
        
        
        var aula = new Aula(denominacion, localizacion, capacidad, alumnos);
        arrayAulas.push(aula);
        var continuar = confirm("Desea introducir un aula mas?");
    }while (continuar);
}

function comprobarDenominacion(denominacion) {
    for (variable of arrayAulas) {
        if (variable.denominacion == denominacion){
            alert("Ha introducido un nombre repetido");
            return true;
        }
    } 
    return false;
}

function añadirAlumno() {
    var dni             = prompt("Indique el dni del alumno"   , "16548795n");
    var nombre          = prompt("Indique el nombre del alumno", "Pedro");
    var cp              = crearCp();
    var año             = crearAño();
    var mes             = crearMes();
    var dia             = crearDia();
    var fechaNacimiento = new Date(año, mes, dia);
    var alumno          = new Alumno(dni, nombre, cp, fechaNacimiento);
    alumnos.push(alumno);
}

function crearCp() {
    do {
        var correcto = true;
        var cp = prompt("Indique el cp del alumno", "28050");
        if (!cp.length == 5){
            correcto = false;
            alert("Introduzca un 0 delante si es preciso");
        }
        cp = parseInt(cp);
        if (cp < 1000 || cp > 52999) {
            correcto = false;
        } 
    }while(!correcto);
    return cp;
}

function crearAño() {
    var correcto = true;
    do {
        var año = parseInt(prompt("Indique el año de nacimiento del alumno", 1990));
        if (año < 2009) {
            correcto = false;
            alert("Introduzca un año mayor de 2009");
        }
    }while(!correcto);
    
    return año;
}

function crearMes() {
    var correcto = true;
    do {
        var mes = parseInt(prompt("Indique el mes de nacimiento del alumno", 4));
        if (mes < 1 || mes > 12) {
            correcto = false;
            alert("Introduzca un mes entre (1-12)");
        }
    }while(!correcto);
    
    return mes;
}

function crearDia() {
    var correcto = true;
    do {
        var dia = parseInt(prompt("Indique el dia de nacimiento del alumno", 19));
        if (dia < 1 || dia > 31) {
            correcto = false;
            alert("Introduzca un dia entre (1-31)");
        }
    }while(!correcto);
    
    return dia;
}



function mostrarBenjamines() {
    arrayAulas.sort( );

    
}

function comparar(a,b) {
    arrayAulas
    // 1 si el 1º mayor que el 2º
    // -1 si el 1º menor que el 2º
    // 0 si es lo mismo

    // va a comparar el atribuyto de persona de fechaNacimiento
    return true;
}