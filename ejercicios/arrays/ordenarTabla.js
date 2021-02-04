alert("hola");

var edades = new Array();
edades[0] = 12;
edades[1] = 4;
edades[2] = 65;
edades[3] = 34;
edades[4] = 89;
edades[5] = 1;
edades[6] = 3;
edades[7] = 99;

document.write("La tabla empieza asi:<br>");
for (var i=0; i<edades.length; i++) {
    document.write("[" + edades[i] + "] ");
    
}document.write("<br>");

for (var i=0; i<edades.length-1; i++){
    for(var j=i+1; j<edades.length; j++){
        if(edades[i] > edades[j]) {
            aux = edades[i]; 
            edades[i] = edades[j];
            edades[j] = aux; 
        }
    }
}

document.write("<br>De menor a mayor:<br>");
for (var i=0; i<edades.length; i++) {
    document.write("[" + edades[i] + "] ");
    
}document.write("<br>");


for (var i=0; i<edades.length-1; i++){
    for(var j=i+1; j<edades.length; j++){
        if(edades[i] < edades[j]) {
            aux = edades[i]; 
            edades[i] = edades[j];
            edades[j] = aux; 
        }
    }
}


document.write("<br>De mayor a menor:<br>");
for (var i=0; i<edades.length; i++) {
    document.write("[" + edades[i] + "] ");
    
}
