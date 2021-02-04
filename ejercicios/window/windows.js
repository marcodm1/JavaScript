// Métodos del objeto window

// Como métodos del objeto window están:



// focus() .- permite forzar el foco de la ventana.
// clearInterval .- detiene la ejecución de un proceso con temporizador definido previamente con setInterval().
// clearTimeout() .- suspende el temporizador iniciado con setTimeout().
// blur() .- método inverso a focus().
// open() .- Abre una ventana con la página especificada.
// close() .- cierra la ventana del navegador. No requiere confirmación si la ventana se abrió con el método open() de JavaScript.
// home() .- abre la página de inicio del visitante desde nuestro sitio web.
// print() .- imprime la ventana vigente abriendo previamente la ventana de diálogo de la impresora.
// scrollTo() .- desplaza el contenido de la ventana a la posición horizontal y vertical (valores absolutos).
// scrollBy() .- desplaza el contenido de la ventana a la posición horizontal y vertical (valores relativos a la posición actual).
// resizeTo() .- redimensiona la ventana con valores fijos.
// resizeBy() .- redimensiona la ventana con valores relativos a los actuales.
// moveTo() .- mueve la ventana a las coordenadas especificadas.
// moveBy() .- mueve la ventana segun valores relativos a la posición actual.
// setInterval() .- inicia un proceso que se repite con la frecuencia especificada en milisegundos.
// setTimeout() .- el proceso se realiza cuando pase el tiempo especificado en milisegundos.
// stop() .- detiene la carga de la página.

// otros que ya usabamos por ejemplo
// alert() .- genera un cuadro con un mensaje y sin ningún valor de retorno.
// confirm() .- genera un cuadro de diálogo con un icono de pregunta y con los botones "Aceptar" y "Cancelar" que permiten devolver true o false respectivamente.
// prompt() .- presenta un cuadro de diálogo de entrada de datos. Devuelve el valor introducido o null si se pulsa el botón Cancelar o se cierra el cuadro de diálogo.






// Propiedades del objeto window

// Las propiedades del objeto window, que no son subobjetos, son las siguientes:


// closed.- valor booleano que indica si la ventana está cerrada.
// defaultStatus.- texto que se muestra por defecto en la barra de estado cuando no se está realizando ninguna acción.
// name.- contiene el nombre de la ventana.
// innerWidth.- ancho interno de la ventana (disponible en Netscape y Firefox).
// innerHeight.- altura interna de la ventana (disponible ...).
// outerWidth.- ancho externo de la ventana (...).
// outerHeight.- altura externa de la ventana (...).
// screenLeft.- indica la posición del margen izquierdo de la pantalla (IE).
// screenX.- idem para Netscape y Firefox.
// screenTop.- indica la posición del margen superior de la pantalla (IE).
// screenY.- idem para Netscape y Firefox.
// status.- texto que aparece en la barra de estado.






// Las propiedades del objeto navigator son de solo lectura y contienen la siguiente información:
// appCodeName.- nombre de código de la aplicación.
// appName.- nombre del navegador (lo identifica).
// appVersion.- versión del navegador.
// appMinorVersion.- versión menor de la aplicación.
// cpuClass.- tipo de procesador.
// platform.- tipo de sistema.
// plugins.- lista de complementos instalados. IE devuelve una lista vacía. Al ser una matriz de valores se puede obtener la lista recorriendo sus elementos hasta window.navigator.plugins.length.
// userProfile.- perfil del usuario.
// systemLanguage.- en IE, idioma del sistema. En otros navegadores se utiliza la propiedad language.
// userLanguage.- en IE, idioma del navegador. En otros navegadores se utiliza la propiedad language.
// userAgent.- cadena descriptiva completa del navegador.
// onLine.- valor booleano que indica el estado de conexión del navegador.
// coockieEnabled.- valor booleano que indica si se aceptan ficheros cookie.
// mimeTypes.- tabla de tipos de archivo MIME aceptados por el navegador. IE devuelve un elemento vacío. La lista se puede obtener recorriendo los elementos de la tabla hasta window.navigator.mimeTypes.length.
   

// El objeto screen contiene la información relacionada con la capacidad física de la pantalla: resolución y color. Sus propiedades son:
// width.- ancho total en pixeles.
// height.- altura total en pixeles.
// availWidth.- ancho disponible en pixeles. No se tienen en cuenta las barras.
// availHeigth.- altura disponible en pixeles. No se tienen en cuenta las barras.
// colorDepth.- profundidad del color. La cantidad de colores es el resultado de elevar 2 a la profundidad de color


// Las propiedades del objeto location contienen información relativa a la dirección de la página actual:
// hostname.- nombre del dominio.
// href.- dirección completa de la página.
// hash.- referencia que recibió el click en la página.
// pathname.- ruta de acceso a la página sin el nombre del dominio.
// port.- número de puerto.
// protocol.- tipo de protocolo de la conexión.
// search.- cadena compuesta por los parámetros de la página.
   


// El objeto location tiene dos métodos:
// reload() .- recarga la página vigente. Es equivalente a pulsar la opción Actualizar del navegador.
// replace() .- carga otra página cuya dirección se pasa como parámetro.




// El objeto history posee métodos y propiedades que permiten acceder al historial de páginas visitadas:
// back() .- accede a la página anterior. Similar a pulsar la opción Atrás.
// forward() .- accede a la página siguiente. Similar a pulsar la opción Siguiente.
// go() .- permite acceder a una página concreta del historial mediante un salto especificado como parámetro mediante un número positivo o negativo. Por ejemplo, para retroceder dos páginas sería: go(-2).
// length.- propiedad que indica el número de páginas registradas en el historial.



// Las opciones de apertura son las siguientes:
// directories: valor yes/no. Añade o no una barra de links.
// menubar: valor yes/no. Añade o no una barra de menús.
// status: valor yes/no. Añade o no una barra de estado.
// location: valor yes/no. Añade o no una barra de direcciones.
// scrollbars: valor yes/no/auto. Añade o no las barras de desplazamiento.
// resizable: valor yes/no. Permite o no el redimensionamiento.
// height: altura en pixeles.
// width: ancho en pixeles.
// left: posicionamiento del margen izquierdo.
// top: posicionamiento del margen superior.
// fullscreen: valor yes/no. Pantalla completa o no, solo en IE.