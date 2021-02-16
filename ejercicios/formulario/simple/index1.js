document.addEventListener("readystatechange",cargarEventos,False);

function cargarEventos(evento) {
    if (document.readyState == "interactive") {
        document.getElementById("enviar").addEventListener("click", enfiarForm, true);
    }
}

function enfiarForm(evento) {
    document.getElementById("enviar").submit();
    // document.form[0].submit();
}