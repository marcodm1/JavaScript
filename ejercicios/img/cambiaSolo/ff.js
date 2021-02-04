var imgArray = new Array("0.png", "1.png", "2.png", "3.png");

cambiarFoto();

function cambiarFoto(){
    var numero = Math.floor(Math.random()*4);
    document.images["imagen"].src = "/JavaScript/JS/ejercicios/img/img/" + imgArray[numero];
    setTimeout(cambiarFoto, 100);
}