class Alumno {
    constructor (dni, nombre, cp, fechaNacimiento){
        this.dni             = dni;
        this.nombre          = nombre;
        this.cp              = cp;
        this.fechaNacimiento = new Date(fechaNacimiento);
    }

    edad(fechaNacimiento) {
        var hoy        = new Date();
        var fecha1     = new Date('1990, 4, 19');
        var añosEnMili = hoy-fecha1;
        var miedad     = ((((añosEnMili/1000)/60)/60)/24)/365; 

        document.write("Mis años en milisegundos: "           + añosEnMili + "<br>");
        document.write("Mis años sin redondear: "             + miedad + "<br>");
        document.write("Mis años redondeados hacia abajo: "   + Math.floor(miedad) + "<br>");
        document.write("Mis años redondeados hacia arriba: "  + Math.round(miedad) + "<br>");
        document.write("Mi fecha de fecha1 en milisegundos: " + fecha1.getMilliseconds() + "<br>");
        



    }


}


        