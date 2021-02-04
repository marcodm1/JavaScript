// crear array normal
var provincias = new Array();
provincias[0] = "Madrid";
provincias[1] = "Barcelona";
provincias[2] = "Valencia";
provincias[3] = "Murcia";


// la recorro con un for in
for (var prop in provincias){
    document.write(prop + "--" + provincias[prop] + "<br>")
}