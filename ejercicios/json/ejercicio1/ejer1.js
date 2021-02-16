var myObj = {
    name: "John", 
    age: 31, 
    city: "New York"
}; // esto es una forma comoda de crear un objeto con sus propiedades ya escritas
var myJSON = JSON.stringify(myObj); // esto convierte el objeto myObj en cadena
window.location = "demo_json.php?x=" + myJSON;


// ---------------------------------
var myJSON = '{"name":"John", "age":31, "city":"New York"}'; // esto seria la cadena de json del objeto creado anteriormente
var myObj = JSON.parse(myJSON); // esto convierte la cadena que viene, a un objeto
document.getElementById("demo").innerHTML = myObj.name;










