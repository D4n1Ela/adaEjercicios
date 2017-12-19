/*
function funcion(base, exponente){
	var resultado = 1;
	// Si el exponente es 0 como la condición es i < exponente
	// No ingresa al for por lo cual el resultado de todo numero 
	// elevado al cero.
	for (var i = 0; i < exponente; i++) {

		resultado = resultado * base;
	}
	return resultado;
}
var potencia = funcion(10.25, 4);
//¨¨¨¨¨¨¨¨¨invocacion de funcion¨¨¨¨¨¨¨
//
console.log("La potencia es: "+potencia);
*/

//console.log("EJ 2: Escribir una función que, dado un número pasado como parámetro, determine si es primo.")
/*
function esPrimo(num){
var contador = 0;
console.log("El número ingresado es: "+num);
	
	if( num == 2 || num %2 != 0){
		for (var i = 2; i < num; i++) {
			if( num % i == 0){
				contador = contador +1;
				return false;
			}
		}
		if (contador == 0) {
			return true;
		}
	}else{
		return false;
	}
}

var primo = esPrimo(111000);
var msj;

if (primo) {
	msj = "El número es primo"; 
}else{
	msj = "El número NO es primo";
}
console.log(msj);
*/

///////// EJ: 2 Otra versión de Belen////
//--Con FOR--//
/*
function primos(N){
	for (var i = N-1; i > 1; i--) {
		var x = N % i;
		if ( x == 0) {
			return false;
		}
	}
	return true;
}
//--Con WHILE--//

var i = 2;
while((i>1) && (i<N)){
	var x = N % i;
	if (x == 0) {
		return false;
	}
	i++;
}
return true;
*/


//--Con DO WHILE--//
function primos(N){
	var i = 2; // En este caso while es igual con do while porque la variable que 
	//se utiliza en la condición esta inicialida por lo cual la accion no depende 
	//de algo que puede ser o no.
	//while por lo general se ejecuta de 0 a N veces
	//do while  por lo general se ejecuta de 1 a N veces
	
	do{
		console.log("El valor de N es: "+N);
		var x = N % i;
		console.log("El valor de x es: "+x);
		if (x == 0) {
			return false;
		}
		i++;
	}while((i>1) && (i<N));
	return true;
}
var N;
var numero = 5
console.log(primos(numero));




///////// EJ: 3 ///////////////////
/*
Escribir una función que dada una palabra
pasada por parámetro determine si es aguda, grave o esdrújula.
*/

function whatIsType(word){

}

///////// EJ: 4 ///////////////////
/*
Escribir una función que dado un arreglo con los siguientes datos:
Corredor = { “Nombre”,”Apellido”,edad,”genero” } retorne la categoría a la cual estará anotado por ejemplo:
F 18 – 25, M 18 – 25
*/

function whatIsType(corredor){

	
}


