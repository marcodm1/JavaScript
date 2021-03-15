document.addEventListener("readystatechange", cargarEventos, false);


function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("añadirFormulario").addEventListener("click", crearFormulario, true);
    }
}

//____________________________________________
function crearFormulario () {
    var boton = document.getElementById("añadirFormulario");
    boton.style.visibility = 'hidden'; // oculto el boton
    boton.style.display    = 'none';   // y encima no ocupa espacio
    // boton.style.visibility  = 'visible'; // si quisiera que se viese pero no se puede usar el display none antes
    añadirForNombrem();  // crear formulario
    añadirLabelNombre(); // añadirle el label con el nombre 
    añadirLabelCheck();  // añadirle el label del check
    añadirLabelRadio1(); // añadilre el label del radio
    añadirLabelRadio2(); // añadilre el label del radio
    añadirLabelOption(); // añadirle el label del opcion
    añadirInputFinal();  // añade el ultimo uinput para cerrar
}

//_____________ AÑADIR FORMULARIO ____________
function añadirForNombrem() { // <form action="ff.php" method="post">
    var form  = document.createElement("form");
    var padre = document.getElementsByTagName("body")[0];
    padre.appendChild(form);

    añadirAction(); // padre
    añadirMethod();

    
    function añadirAction() {
        var form = document.getElementsByTagName("form")[0];
        form.setAttribute("action", "cero.php");
    }
    
    function añadirMethod() {
        var form = document.getElementsByTagName("form")[0];
        form.setAttribute("method", "post");
    }

}

//_____________ METER EL LABEL DEL NOMBRE ____________
function añadirLabelNombre() { // <label for="txtNombre">Escriba su nombre:</label>s
    var label = document.createElement("label");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(label);

    añadirForNombre();
    añadirTextoNombre();
    añadirCampoNombre();

    function añadirForNombre() {
        var label = document.getElementsByTagName("label")[0];
        label.setAttribute("for", "txtNombre");
    }
    
    function añadirTextoNombre() {
        var texto = document.createTextNode("Escriba su nombre:");
        var padre = document.getElementsByTagName("label")[0];
        padre.appendChild(texto);
    }
}

//_____________ METER EL INPUT DEL NOMBRE ____________
function añadirCampoNombre() { // <input type="text" name="nombre" id="nombre>">
    añadirInputNombre();
    añadirTypeNombre();
    añadirNameNombre();
    añadirIdNombre();
    añadirBRNombre();

    function añadirInputNombre(){
        var input = document.createElement("input");
        var padre = document.getElementsByTagName("form")[0];
        padre.appendChild(input);
    }

    function añadirTypeNombre() {
        var padre = document.getElementsByTagName("input")[0];
        padre.setAttribute("type", "text");
    }

    function añadirNameNombre() {
        var padre = document.getElementsByTagName("input")[0];
        padre.setAttribute("name", "nombre");
    }

    function añadirIdNombre() {
        var padre = document.getElementsByTagName("input")[0];
        padre.setAttribute("id", "nombre");
    }

}

function añadirBRNombre() {
    var br = document.createElement('br');
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(br);
}

//_____________ METER EL LABEL DEL CHECK ____________
function añadirLabelCheck() { // <label for="check">Aceptar politica de privacidad:</label>
    var label = document.createElement("label");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(label);

    añadirForCheck();
    añadirTextoCheck();
    añadirInputCheck(); 
    añadirBRCheck();
    
    function añadirForCheck() {
        var label = document.getElementsByTagName("label")[1];
        label.setAttribute("for", "check");
    }
    
    function añadirTextoCheck() {
        var texto = document.createTextNode("Aceptar politica de privacidad:");
        var padre = document.getElementsByTagName("label")[1];
        padre.appendChild(texto);
    }
    
    function añadirBRCheck() {
        var br    = document.createElement('br');
        var padre = document.getElementsByTagName("form")[0];
        padre.appendChild(br);
    }
}


//_____________ METER EL INPUT DEL CHECK ____________
function añadirInputCheck() { // <input type="checkbox" name="check">
    var input = document.createElement("input");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(input);

    añadirTypeCheck();
    añadirNameCheck();
    
    function añadirTypeCheck() {
        var input = document.getElementsByTagName("input")[1];
        input.setAttribute("type", "checkbox");
    }
    
    function añadirNameCheck() {
        var input = document.getElementsByTagName("input")[1];
        input.setAttribute("name", "check");
    }
}

//_____________ METER EL LABEL DEL RADIO 1 ____________
function añadirLabelRadio1() { //<label for="hombre">Hombre</label>
    var label = document.createElement("label");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(label);

    añadirForRadio1();
    añadirTextoRadio1();
    añadirInputRadio1();

    function añadirForRadio1() {
        var label = document.getElementsByTagName("label")[2];
        label.setAttribute("for", "hombre");
    }
    
    function añadirTextoRadio1() {
        var texto = document.createTextNode("Hombre");
        var label = document.getElementsByTagName("label")[2];
        label.appendChild(texto);
    }
}


function añadirInputRadio1() { // <input type="radio" name="sexo" value="hombre">
    var input = document.createElement("input");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(input);

    añadirTypeRadio1();
    añadirNameRadio1();
    añadirValueRadio1();

    //_____________ METER EL INPUT DEL RADIO ____________
    
    
    function añadirTypeRadio1() {
        var input = document.getElementsByTagName("input")[2];
        input.setAttribute("type", "radio");
    }
    
    function añadirNameRadio1() {
        var input = document.getElementsByTagName("input")[2];
        input.setAttribute("name", "sexo");
    }
    
    function añadirValueRadio1() {
        var input = document.getElementsByTagName("input")[2];
        input.setAttribute("value", "hombre");
    }
}

//_____________ METER EL LABEL DEL RADIO 2 ____________
function añadirLabelRadio2() { // <label for="mujer">Mujer</label>
    var label = document.createElement("label");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(label);

    añadirForRadio2();
    añadirTextoRadio2();
    añadirInputRadio2();
    añadirBRNombre();
  
    function añadirForRadio2() {
        var label = document.getElementsByTagName("label")[3];
        label.setAttribute("for", "mujer");
    }
    
    function añadirTextoRadio2() {
        var texto = document.createTextNode("Mujer");
        var label = document.getElementsByTagName("label")[3];
        label.appendChild(texto);
    }
}


function añadirInputRadio2() {
    var input = document.createElement("input");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(input);

    añadirTypeRadio2();
    añadirNameRadio2();
    añadirValueRadio2();

    function añadirTypeRadio2() {
        var input = document.getElementsByTagName("input")[3];
        input.setAttribute("type", "radio");
    }
    
    function añadirNameRadio2() {
        var input = document.getElementsByTagName("input")[3];
        input.setAttribute("name", "sexo");
    }
    
    function añadirValueRadio2() {
        var input = document.getElementsByTagName("input")[3];
        input.setAttribute("value", "mujer");
    }
}

//_____________ METER EL LABEL DEL OPTION ____________
function añadirLabelOption() { // <label for="asignatura">Seleccione su asignatura:</label>
    var label = document.createElement("label");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(label);
    añadirForOption();
    añadirSelectOption();

    function añadirForOption() {
        var input = document.getElementsByTagName("label")[4];
        input.setAttribute("for", "asignatura");
        añadirTextoOption();
    }
    
    function añadirTextoOption() {
        var texto = document.createTextNode("Seleccione su asignatura:");
        var padre = document.getElementsByTagName("label")[4];
        padre.appendChild(texto);
    }
}

//_____________ METER EL SELECT DEL OPTION ____________
function añadirSelectOption() { // <select name="asignatura[]" id="asignatura">
    var select = document.createElement("select");
    var padre  = document.getElementsByTagName("form")[0];
    padre.appendChild(select);

    añadirNameOption();
    añadirIdOption();

    crearOpction1();
    crearOpction2();
    crearOpction3();
    crearOpction4();

    
    function añadirNameOption() {
        var input = document.getElementsByTagName("select")[0];
        input.setAttribute("name", "asignatura[]");
    }
    
    function añadirIdOption() {
        var input = document.getElementsByTagName("select")[0];
        input.setAttribute("id", "asignatura");
    }

}

// _______________ CREAR UN OPTION 1 ____________ <option value="moto">moto</option>
function crearOpction1() {
    añadirOption1();
    añadirValueOption1();
    añadirTextoOption1();

    function añadirOption1() {
        var option = document.createElement("option");
        var padre  = document.getElementsByTagName("select")[0];
        padre.appendChild(option);
    }
    
    function añadirValueOption1() {
        var input = document.getElementsByTagName("option")[0];
        input.setAttribute("value", "moto");
    }
    
    function añadirTextoOption1() {
        var texto = document.createTextNode("moto");
        var padre = document.getElementsByTagName("option")[0];
        padre.appendChild(texto);
    }

}

// _______________ CREAR UN OPTION 2 ____________ <option value="coche">coche</option>
function crearOpction2() {
    añadirOption2();
    añadirValueOption2();
    añadirTextoOption2();
    
    function añadirOption2() {
        var option = document.createElement("option");
        var padre  = document.getElementsByTagName("select")[0];
        padre.appendChild(option);
    }
    
    function añadirValueOption2() {
        var input = document.getElementsByTagName("option")[0];
        input.setAttribute("value", "coche");
    }
    
    function añadirTextoOption2() {
        var texto = document.createTextNode("coche");
        var padre = document.getElementsByTagName("option")[1];
        padre.appendChild(texto);
    }

}

// _______________ CREAR UN OPTION 3 ____________ <option value="barco">barco</option>
function crearOpction3() {
    añadirOption3();
    añadirValueOption3();
    añadirTextoOption3();

    function añadirOption3() {
    var option = document.createElement("option");
    var padre  = document.getElementsByTagName("select")[0];
    padre.appendChild(option);
    }

function añadirValueOption3() {
    var input = document.getElementsByTagName("option")[0];
    input.setAttribute("value", "barco");
}

function añadirTextoOption3() {
    var texto = document.createTextNode("barco");
    var padre = document.getElementsByTagName("option")[2];
    padre.appendChild(texto);
}
}

// _______________ CREAR UN OPTION 4 ____________ <option value="avion">avion</option>
function crearOpction4() {
    añadirOption4();
    añadirValueOption4();
    añadirTextoOption4();

    function añadirOption4() {
        var option = document.createElement("option");
        var padre  = document.getElementsByTagName("select")[0];
        padre.appendChild(option);
    }
    
    function añadirValueOption4() {
        var input = document.getElementsByTagName("option")[0];
        input.setAttribute("value", "avion");
    }

    function añadirTextoOption4() {
        var texto = document.createTextNode("avion");
        var padre = document.getElementsByTagName("option")[3];
        padre.appendChild(texto);
    }

    añadirBRNombre();
}

// ________________ CREAR EL ULTIMO INPUT__________ <input type="submit" value="enviar">
function añadirInputFinal() {
    var input = document.createElement("input");
    var padre = document.getElementsByTagName("form")[0];
    padre.appendChild(input);

    añadirTypeInputFinal();
    añadirValueInputFinal();

    function añadirTypeInputFinal() {
        var input = document.getElementsByTagName("input")[4];
        input.setAttribute("type", "submit");
    }

    function añadirValueInputFinal() {
        var input = document.getElementsByTagName("input")[4];
        input.setAttribute("value", "enviar");
    }

}


window.addEventListener("readystatechange", cargarEventos, false);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("enviarNumero" ).addEventListener("click", cambiarTextos, true);
    }
}

function cambiarTextos() {

    
}

