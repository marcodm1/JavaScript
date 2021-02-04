
var cadena = "CaDenAa";

document.write("muestro la cadena como me la pasan: " + cadena + "<br>");
document.write("La muestro char a char<br>");

for (var i=0; i<cadena.length; i++) {
    document.write(cadena[i] + "<br>");
}


document.write(cadena.toLowerCase()             + "<br>");
document.write(cadena.toUpperCase()             + "<br>");
document.write(cadena.substring(4)              + "<br>");
document.write(cadena.substring(4).toUpperCase()+ "<br>");
document.write(cadena.lastIndexOf("a")          + "<br>");
document.write(cadena.indexOf("en")             + "<br>");
document.write(cadena.substr(4)                 + "<br>");
document.write(cadena.slice(4)                  + "<br>");
document.write(cadena.charCodeAt()              + "<br>");
document.write(cadena.charAt(4)                 + "<br>");
document.write(cadena.concat("-hola")           + "<br>");

// ahora para html

// anchor().- crea las etiquetas <a name="parámetro"> cadena </a>. Así, la instrucción "La cadena".anchor("elname") generaría el código: <a name="elname"> La cadena </a>
// big().- genera <big> La cadena </big>.
// blink().- genera <blink> La cadena </blink>.
// bold().- genera <b> La cadena </b>.
// fixed().- genera <tt> La cadena </tt>.
// fontcolor(miColor).- genera <font color="miColor"> La cadena </font>.
// fontsize(miSize).- genera <font size="miSize"> La cadena </font>.
// italics().- genera <i> La cadena </i>.
// link(url).- similar a anchor(). Genera <a href="url"> La cadena </a>. Por ejemplo, "Pincha aquí".link("www.tiernogalvan.es") generará <a href="www.tiernogalvan.es">Pincha aquí</a>.
// small().- genera <small> La cadena </small>.
// strike().- genera <strike> La cadena </strike>.
// sup().- genera <sup> La cadena </sup>.
// sub().- genera <sub> La cadena </sub>.
// charAt().- accede a un carácter de la cadena, utilizando un índice que comienza por 0.
// charCodeAt().- devuelve el valor numérico decimal del código ASCII correspondiente a un carácter de la cadena.
// fromCharCode().- devuelve los caracteres ASCII que corresponden a los códigos decimales (separados por comas).
// substring().- devuelve una subcadena de una cadena a partir de una posición de inicio y fin.
// slice().- es equivalente al método substring().
// substr().- devuelve una subcadena de una cadena a partir de una posición de inicio y una longitud.
// indexOf().- devuelve la posición de inicio de una subcadena en una cadena. Si la subcadena no está contenida en la cadena el valor devuelto es -1.
// lastIndexOf().- devuelve la posición de inicio de la última subcadena en una cadena. Si no existe devuelve -1.
// toLowerCase().- convierte a minúsculas.
// toUpperCase().- convierte a mayúsculas.

document.write("Todo en minusculas: " + cadena.toLowerCase() + "<br>");
document.write("Todo en mayusculas: " + cadena.toUpperCase() + "<br>");
document.write("Creo subcadena desde la posicion 3 a la 5: " + cadena.substring(3,5) + "<br>");
document.write("Crear cadena desde posicion 4 pero en mayusculas: " + cadena.substring(4).toUpperCase()+ "<br>");
document.write("Ultima posicion de la letra 'a': " + cadena.lastIndexOf("a") + "<br>");
document.write("Posicion de 'en': " + cadena.indexOf("en") + "<br>");
document.write("Subcadena desde la posicion 4: " + cadena.substr(4) + "<br>");
document.write("Char en la posicion 4: " + cadena.charAt(4)                 + "<br>");
document.write("Le concatenamos 'hola' a CaDenAa: " + cadena.concat("-hola")           + "<br>");





