class Tarifa {
    pais;                   //int
    precio_establecimiento; //int con decimales
    precio_minuto;          //int con decimales

    constructor (pais, precio_est, precio_min){
        this.pais                   = pais;
        this.precio_establecimiento = precio_est;
        this.precio_minuto          = precio_min;
    }
}

class Llamada {
    pais;           //nombre
    fecha;          //Date(dia y hora);
    telefono;       //tlf tipo caracter
    tiempo;         //int de segundos de duracion de la llamada

    constructor (pais, fecha, tlf, tiempo){
        this.pais       = pais;
        this.fecha      = new Date(fecha);
        this.telefono   = tlf;
        this.tiempo     = tiempo;
    }
}

class Movil {
    marca;          //marca y modelo
    ancho;          //int de pixeles
    alto;           //int de pixeles
    tarifas;        //array de Tarifa
    llamadas;       //array de Llamada

    constructor (marca, ancho, alto, tarifas, llamadas){
        this.marca      = marca;
        this.ancho      = ancho;
        this.alto       = alto;
        this.tarifas    = tarifas; // no se si he puesto asi los arrays
        this.llamadas   = llamadas;
    }

    resolucion(ancho, alto){
        return ancho*alto;
    }

    importe_llamada(llamada){
        for (var tarifa of arrayTarifa){
            if (tarifa.pais == llamada.pais){
                var a = tarifa.precio_establecimiento;
                var b = tarifa.precio_min/60;
                return a + (b*llamada.tiempo);
            }
        }
        alert("Error");
    }

    llamada_mas_cara(){
        var masCaro;
        for (var objLlamada of this.llamadas){
            if (masCaro == null){
                masCaro = objLlamada;
            }else {
                if (importe_llamada(masCaro) < importe_llamada(objLlamada)){
                    masCaro = objLlamada;
                }
            }
        }
        for (var valor in masCaro) {
            document.write(valor);
        }
    }
    

    pais_mas_llamado(){
        var arrayNombrePais = new Map();
        for (var objLlamada of this.llamadas){
            if (arrayNombrePais.has(objLlamada.pais)){
                arrayNombrePais[objLlamada.pais] ++;
            }else{
                arrayNombrePais[objLlamada.pais] = 1;
            }
        }
    }

    ordenada(){
        llamadas.sort(
            function (llamadaA, llamadaB){
                if (llamadaA.fecha < llamadaB.fecha){
                    return -1;
                }
                if (llamadaA.fecha > llamadaB.fecha){
                    return 1;
                }
                if (llamadaA.fecha = llamadaA.fecha){
                    return 0;
                }
            }  
        );

        return llamadas;
    }

    factura(){}
}


                // programa

var momento = new Date("2019/12/25", 10,56,50);
var llamada = new Llamada("España", momento, );
var tarifa  = new Tarifa("Alemania", 2.5, 0.95);
var movil   = new Movil("Huawei", 500, 700, tarifa, );


// crear un objeto movil teniendo en cuenta que:

//introduciran las tarifas, preguintar cuantas quiere introducir. y que n ose repita pais

// sew introduciran las llamadas una a una. se comprobara el pais se ha introducido en las tarifas.
// la fecha se solicitara con año mes dia hora minuto y segundo por separado y se comprobará:
    //mes entre 1-12
    //dia entre 1-31
    //hora entre 0-23
    //minutos entre 0-59
    //segundos entre 0-50
    // fecha anterior a la del sistema

// si un dato es erroneo se solicitara ese mismo dato, excepto si la fecha no es anterior, se solicitara todo

// telefono podra ser con codigo del pais de 3 numeros, espacio y tlf o solo los 9 digitos del tlf, usando expreg

// al final, se pedira, la marca, ancho, alto, y mostrara un d.write con:
    //Resolucuion en forma de pixeles
    // las propiedades los valores de la llamada mas cara.
    // el pais al que mas se ha llamado en la forma de, "Pais mas llamado:nnn"
    // la factura de llamadas



