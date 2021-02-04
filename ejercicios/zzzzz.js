var provincias = new Array();
provincias["Madrid"];
provincias["Barcelona"];
provincias["Valencia"];

var veces = Map();

document.write("ggg");
pais_mas_llamado("Madrid");
 
function pais_mas_llamado(nombre){
    for (var nombre of provincias){
        if (veces.has(nombre)){
            veces[nombre] ++;
            for (var valor of veces){
                document.write(valor);
            }
        }else{
            veces[nombre] = 1;

        }
        
    }
}
// fsdfsef