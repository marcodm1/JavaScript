var arrayAulas      = new Array();


class Persona {
    constructor(nombre, apellido){
        this.nombre     = nombre;
        this.apellido   = apellido;
    }
}

var persona1 = new Persona('Juan' , 'Lopez');
var persona2 = new Persona('Pedro', 'GG');
var persona3 = new Persona('Alex' , 'JJ');

arrayAulas.push(persona1);
arrayAulas.push(persona2);
arrayAulas.push(persona3);

for (variable of arrayAulas) {
    document.write(" " + variable.nombre + " " + variable.apellido + '<br>');
}
document.write("<br>");
for (var i = 0; i<arrayAulas.length; i++) {
    document.write(arrayAulas[i].nombre + " " + arrayAulas[i].apellido + "<br>")
}
document.write("<br>");

for (variable1 in persona1) {
    document.write(" " + variable1 +  '<br>');
}
document.write("<br>");
for (variable1 in arrayAulas) {
    document.write(" " + variable1 +  '<br>');
}