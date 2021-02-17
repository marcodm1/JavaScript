
/*
Métodos del nodo Document
    document.createAttribute('id')      crea el obj de tipo atributo id como el id de un parrafo
    document.createElement(etiq)        crea el elemento etiq.
    document.createTextNode(texto)      crea un nodo de tipo Text con el texto correspondiente.
    document.getElementById(id)         devuelve el elemento con identificador id.
    document.getElementsByTagName(etiq) devuelve un NodeList con los elementos del documento que tienen como etiqueta etiq. 

/*
Métodos del nodo Element
    document.getAttribute(atr)             devuelve el valor del atributo atr.
    document.getAttributeNode(atr)         devuelve un nodo que contiene el atributo atr.
    document.getElementsByTagName(etiq)    devuelve un objeto NodeList con los descendientes de etiq.
    document.removeAttribute(atr)          elimina el atributo atr.
    document.removeAttributeNode(atr)      elimina el atributo atr y lo devuelve.
    document.setAttribute(atributo, valor) asigna valor a atributo.
    document.setAttributeNode(atr)         añade un nodo atributo.
*/

        // vamos a crear: <p id="parrafo3"> Este es el parrafo3 </p> en la posicion 3
// 1: creamos el nodo de tipo element, la etiqueta parrafo
var nuevoParrafo3 = document.createElement("p"); // ahora es un <p></p>
// 2: creamos un atributo de tipo id
// nuevoParrafo3.setAttribute('id', 'parrafo3');// ahora es <p id="parrafo3"></p>
// 4: le metemos texto
var texto = "Este es el parrafo3";
nuevoParrafo3.appendChild(texto);
// ahora es <p id="parrafo3">Este es el parrafo3</p>
// 5: donde lo ponemos ?
var padre = document.getElementById("div1");
padre.appendChild(nuevoParrafo3);







