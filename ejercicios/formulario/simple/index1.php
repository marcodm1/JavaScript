<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Marco">
        <meta name="description" content="Aprendiendo lenguaje PHP.">
    </head>
    <body> 
       <?php
            if (!isset($_GET['numero'])) {
                echo "Error: valor erroneo";
            }
            function mayorOmenor() {
                $x = 10;
                if ($_GET['numero'] > $x) {
                    echo "el numero es mayor";
                }else {
                    echo "el numero es menor";
                }
            }
            mayorOmenor();
       ?>
    </body>  
</html>