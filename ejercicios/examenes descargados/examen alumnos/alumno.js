class Alumno {
    constructor (dni, nombre, cp, fechaNacimiento){
        this.dni             = dni;
        this.nombre          = nombre;
        this.cp              = cp;
        this.fechaNacimiento = fechaNacimiento;
    }

    edad(fechaNacimiento) {
        var hoy = new Date();
        var nacimiento = new Date('1989, 8, 5');

        var dias = ((((hoy-nacimiento)/1000)/60)/60)/24;
        var meses = parseInt((dias%365)/30);
        var anios = parseInt(dias/365);
        dias = parseInt((dias%365)%30);

        document.write("Hoy es → " + hoy);
        document.write("<br />Fecha de nacimiento → " + nacimiento);
        document.write("<br /> " + anios + " años, " + meses + " meses, " + dias + " días.");
    }


}