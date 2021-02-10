
//  ^ .- inicio de cadena.
//  $ .- fin de cadena.
var palabra = "A3r";
var condiciones = new RegExp("^A3r$");
    if (condiciones.test(palabra)){
        document.write(palabra + " es OK<br>");
    } else {
        document.write(palabra + " es KO<br>");
    }


var tlf = "915987569"
// var condiciones = new RegExp("^91[0-9]{6}");
var condiciones = /^91[0-9]{6}$/;
if (condiciones.test(tlf)){
    document.write(tlf + " es OK<br>");
} else {
    document.write(tlf + " es KO<br>");
} 


var dni = "54869256n"
var condiciones = new RegExp("^[a-z]{6}$"); 
if (condiciones.test(dni)){
    document.write(dni + " es OK<br>");
} else {
    document.write(dni + " es KO<br>");
}


var dni = "916598546" // esto no me funciona con el 93
var condiciones = new RegExp("^(91)|(93) [0-9] {6}$");
if (condiciones.test(dni)){
    document.write(dni + " es OK<br>");
} else {
    document.write(dni + " es KO<br>");
}

var email = "ejemplo@ejemplo.es";
var email = "ejemplo.ejemplo@ejemplo.es";

var condiciones = "/[[a-z]{3,10}\.]?[a-z]{3,10}@[a-z]{3,10}\.[a-z]{3}";






//  . .- cualquier carácter.
//  [xyz] .- grupo de caracteres permitido.
//  [a-z], [A-Z], [0-9] .- rango de caracteres válidos.
//  [^rango] .- rango de caracteres NO válido.
//  x|y .- El carácter x o el carácter y.
//  ( ) .- permiten agrupar caracteres.
//  * .- el carácter precedente se acepta de 0 a n veces.
//  + .- el carácter precedente se acepta de 1 a n veces.
//  ? .- el carácter precedente se acepta de 0 a 1 vez.
//  {n} .- el carácter precedente se acepta solo n veces.
//  {n, } .- el carácter precedente se acepta al menos n veces.
//  {n, m} .- el carácter precedente se acepta entre n y m veces.
//  \ .- carácter escape.
//  \b .- límite de palabra (espacio, salto de línea, inicio o fin de cadena).
//  \B .- cualquier carácter que no sea límite de palabra.
//  \d .- indica dígitos. Es similar a [0-9].
//  \D .- indica NO dígitos. Es similar a [^0-9].
//  \s .- indica caracteres de espaciado (espacio, tabulador o salto de página).
//  \S .- indica cualquier carácter que no sea de espaciado.
//  \w .- indica cualquier carácter alfanumérico (incluye el guión bajo (_)).
//  \W .- cualquier carácter que no sea alfanumérico ni el guión bajo.
