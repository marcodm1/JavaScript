<!DOCTYPE html>
<html lang="es">
	<head>
		<title>Marco Domínguez</title>
		<meta charset="UTF-8">
        <meta name="author" content="Marco Dominguez">
        <meta name="description" content="ejercicio2 unodos">
        <link rel="stylesheet" href="style.css">


	</head>
	<body>
        
        <div class="contenedorPrincipal">
            <div class="contenedor1">
                <h1> Cabecera h1<h1>
            </div>
            
            <div class="contenedor2">

                <?php 
                    tabla();
                ?>
            </div>

            
        </div>

        
    </body>
</html>


<?php

    function tabla() {
        ?>
            <div id="contenedor3">
                <table class="tablaMovimientos">
                    <thead>
                        <tr>
                        <th class="tituloTabla" colspan="4">Listado de movimientos</th>
                        </tr>
                    </thead>
                    <tbody id="listaMovimientos">
                        <tr>
                        <td>Fecha.</td>
                        <td>Descripcion.</td>  
                        <td>Importe.</td>
                        <td>Salario.</td>
                        </tr>
                        <tr>
                        <td>2021-01-20</td>
                        <td>Ingreso en efectivo</td>
                        <td>100</td>
                        <td>100</td>
                        </tr>
                    </tbody>    
                        


                </table>


            </div>
        <?php

    }
?>

<!-- 
    $a = [
                [
                        'Nombre' => 'Mauro',
                        'Apellido' => 'Chojrin',
                        'Correo' => 'mauro.chojrin@leewayweb.com',
                ],
                [
                        'Nombre' => 'Alberto',
                        'Apellido' => 'Loffatti',
                        'Correo' => 'aloffatti@hotmail.com',
                ],
                [
                        'Nombre' => 'Foo',
                        'Apellido' => 'Bar',
                        'Correo' => 'foo_bar@example.com',
                ]
            ]; 
    -->

