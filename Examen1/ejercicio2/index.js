// El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.
window.addEventListener("load", añadirTodo, false); 
// document.addEventListener("click", sorpresa, false);

function añadirTodo(params) {
    crearForm();
    añadirDiv();
}

function crearForm() {
    añadirForm();  // <form>
    añadirTexto(); // Nombre:
    añadirInput1(); // <input> de Antonio
    añadirInput2(); // <input> de Botón
}

function añadirForm () {
    var form  = document.createElement("form");
    var padre = document.getElementsByTagName("body")[0];
    padre.appendChild(form);
}

function añadirTexto(){
    var texto = document.createTextNode("Nombre:");
    var padre  = document.getElementsByTagName("form")[0];
    padre.appendChild(texto);
}

function añadirInput1 () {
    var inputt = document.createElement("input");
    var padre  = document.getElementsByTagName("form")[0];
    padre.appendChild(inputt);
    inputt.setAttribute("type", "text");
    inputt.setAttribute("value", "Antonio");
}

function añadirInput2 () {
    var inputt = document.createElement("input");
    var padre  = document.getElementsByTagName("form")[0];
    padre.appendChild(inputt);
    inputt.setAttribute("type", "button");
    inputt.setAttribute("value", "Botón");
}

// ________________________________________________________________

function añadirDiv () {
    crearDiv();
    crearP();
    añadirColorDiv();
}

function crearDiv () {
    var div   = document.createElement("div");
    var padre = document.getElementsByTagName("body")[0];
    padre.appendChild(div);
}

function crearP () {
    var p = document.createElement("p");
    var texto = document.createTextNode("Este es el texto del párrafo");
    p.appendChild(texto);
    var padre = document.getElementsByTagName("div")[0];
    padre.appendChild(p);
}

function añadirColorDiv() {
    var div = document.getElementsByTagName("div")[0];
    div.setAttribute("style", "background-color: green;");
}