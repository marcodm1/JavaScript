alert ("hola");

var provincias = new Array();
provincias[0] = "Madrid";
provincias[1] = "Barcelona";
provincias[2] = "Valencia";
provincias[3] = "Murcia";
provincias[4] = "Asturias";
provincias[5] = "Pais_Vasco";
provincias[6] = "Granada";


respusta = parseInt(prompt("Elija provincia del 0 al 6 ", 0));

while (respusta >= provincias.length || respusta < 0){
    respusta = parseInt(prompt("Numero erroneo: seleccione uno entre 0 y 6"));
}
document.write(provincias[respusta]);



