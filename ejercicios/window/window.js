for(var prop in window){
    document.write(prop + " = " + window[prop] + "<br>");
}





focus()         //permite forzar el foco de la ventana.
clearInterval   //detiene la ejecución de un proceso con temporizador definido previamente con setInterval().
clearTimeout()  //suspende el temporizador iniciado con setTimeout().
blur()          //método inverso a focus(). se usa poco
open()          //Abre una ventana con la página especificada.
close()         //cierra la ventana del navegador. No requiere confirmación si la ventana se abrió con el método open() de JavaScript.
home()          //abre la página de inicio del visitante desde nuestro sitio web.
print()         //imprime la ventana vigente abriendo previamente la ventana de diálogo de la impresora.
scrollTo()      //desplaza el contenido de la ventana a la posición horizontal y vertical (valores absolutos).
scrollBy()      //desplaza el contenido de la ventana a la posición horizontal y vertical (valores relativos a la posición actual).
resizeTo()      //redimensiona la ventana con valores fijos.
resizeBy()      //redimensiona la ventana con valores relativos a los actuales.
moveTo()        //mueve la ventana a las coordenadas especificadas.
moveBy()        //mueve la ventana segun valores relativos a la posición actual.
setInterval()   //inicia un proceso que se repite con la frecuencia especificada en milisegundos.
setTimeout()    //el proceso se realiza cuando pase el tiempo especificado en milisegundos.
stop()          //detiene la carga de la página.