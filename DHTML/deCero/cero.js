window.addEventListener("load", añadirTodo, false); 

function añadirTodo() {
    crearFormu();
    crearTable();
    crearTr();
    crearTh();

    darleColorTabla();
}

function crearForm() {
    var form  = document.createElement("form");
    var padre = document.getElementsByTagName("body")[0];
    padre.appendChild(form);
    crearCampo();
    crearBoton();
}

function crearCampo() {

}

function crearBoton() {
    var boton = document.createElement("button");
    var padre = document.getElementsByTagName("body")[0];
    padre.appendChild(boton);

    var texto = document.createTextNode("enviar");
    boton.appendChild(texto);
}

function crearTable() {
    var table = document.createElement("table");
    var padre = document.getElementsByTagName("body")[0];
    padre.appendChild(table);
}

function crearTr() {
    var tr    = document.createElement("tr");
    var padre = document.getElementsByTagName("table")[0];
    padre.appendChild(tr);
}

function crearTh() {
    var th    = document.createElement("th");
    var padre = document.getElementsByTagName("tr")[0];
    padre.appendChild(th);
    añadirContenido();
}

function añadirContenido() {
    var texto = document.createTextNode("Fecha");
    var padre = document.getElementsByTagName("th")[0];
    padre.appendChild(texto);

    var texto = document.createTextNode("Compra");
    var padre = document.getElementsByTagName("th")[0];
    padre.appendChild(texto);
}
function darleColorTabla() {
    var table = document.getElementsByTagName("table")[0];
    table.setAttribute("style", "background-color: brown;");
}