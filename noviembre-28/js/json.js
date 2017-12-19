
$(document).ready(function(){
	//Declaro el objeto
	var objData = {"name": "Daniela", "Age": "28", "Single": true, "Photo": null}
	console.log(objData);


	//Metodo para transformarlo al formato json, lo standarizo(lo aplano)
	var jsonData = JSON.stringify(objData);//JSON. Es la clase
	console.log(jsonData)

	var myA = "<a href='json.html?dato="+jsonData+"'>Hola</a>"
    $("div").append(myA);
    

})







/*
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj); //
window.location = "demo_json.php?x=" + myJSON; //Recarga la página y redirecciona a esa
URL con ese paramétro

// "demo_json.php?x=" El ? muestra se van a ingresar datos.
*/
