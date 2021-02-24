document.getElementById("crear1").addEventListener("click", ()=>{
    var clave = prompt("Indique el nombre");
    var valor = prompt("indique edad de" + clave);
    if (localStorage.getItem(clave) != null){
        alert("Este localStorage ya existe, seleccione otro");
    }else {
        localStorage.setItem(clave, valor);
        alert("Se ha creado el localStorage de " + clave);
    }
});

document.getElementById("ver1").addEventListener("click", ()=> {
    var clave = prompt("Indique el nombre");
    if (localStorage.getItem(clave) == null){
        alert("Este localStorage no existe, seleccione otro");
    }else {
        alert(localStorage.getItem(clave));
    }
});

document.getElementById("modificar1").addEventListener("click", ()=>{
    var clave = prompt("Indique el nombre");
    var valor = prompt("indique edad de" + clave);
    if (localStorage.getItem(clave) != null){
        var respuesta = confirm("Este localStorage ya existe, quiere modificarlo?");
        if (respuesta) {
            localStorage.setItem(clave, valor);
        }
        alert("No ha modificado nada");
    }else {
        alert("No existe el localStorage seleccionado");
    }
    localStorage.setItem(clave, valor);
});

document.getElementById("eliminar1" ).addEventListener("click", ()=>{
    var clave = prompt("Indique el nombre");
    if (localStorage.getItem(clave) != null){
        var respuesta = confirm("Seguro que quiere eliminar el localStorage de " + clave + "?");
        if (respuesta) {
            localStorage.removeItem(clave);
            alert ("Se ha eliminado correctamente");
        }
    }else {
        alert(tarea);
        alert("No existe el localStorage seleccionado");
    }
});

document.getElementById("eliminarT" ).addEventListener("click", ()=>{
    var respuesta = confirm("Seguro que quiere eliminar todo?");
    if (respuesta) {
        localStorage.clear();
    }else {
        alert("No ha eliminado nada");
    }
});
 
