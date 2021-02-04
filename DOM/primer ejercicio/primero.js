document.addEventListener("readystatechange", cargarEventos, false);

    function cargarEventos(evento) { 
        if (document.readyState == "interactive") {
            document.getElementById("boton1").addEventListener("click", funcion1, true);
        }
    
        function funcion1(evento) { 
            var nuevoParrafo        = document.createElement("p");
            nuevoParrafo.innerHTML  = "parrafo hecho con js";
            document.body.appendChild(nuevoParrafo); 

            // otra posibilidd es meterlo en un sitio directamente
            
            // var contenedor   = document.getElementById("contenedor");
            // var nuevoParrafo = document.createElement("p");
            // nuevoParrafo.innerHTML = "parrafo hecho con js";
            // contenedor.appendChild(nuevoParrafo);

            // document.body.appendChild(nuevoParrafo); 

        }
    
    }// saco fuera el resto? o lo dejo dentro?

    



