var imgArray = new Array("0.png", "1.png", "2.png", "3.png");
            
cambiarFoto();

function cambiarFoto(){
    var numero = Math.floor(Math.random()*4);
    document.images["imagen"].src = imgArray[numero];
    setTimeout(cambiarFoto, 100);

    // como hacer una cookie con una variable
    document.cookie = "imagen=" + imgArray[numero];
    document.images["imagen"].onclick = fotoElegida;
    //clearTimeout
}