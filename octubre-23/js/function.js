/*var name = 'Pancho';
console.log("Hola "+name+" Como estás?");

//console.log(´Hola ${nombre}$ ´Como estás?´);
console.log(`Hola ${name} Cómo estás?`);
*/
//////////Vamos de nuevo PASO A PASO ////////////
/*
function(){

}
*/


/******** 00 *********/
function saludo(){
    console.log("Hola");
}
saludo();  
//Esta opcion no es la correcta dado que como saludo DEVUELVE 
//ALGO tengo que guardarlo en una variable.



/******** 01 *********/
//Return te permite guardarla en una variable y luego reutilizarla
function saludo(){
    return"Hola";
}
console.log(saludo());



/******** 02 *********/
function saludo(){
    return"Hola";
}
//Guardo el valor de una funcion dentro de una variable.
var valorSaludo = saludo();
console.log(valorSaludo);