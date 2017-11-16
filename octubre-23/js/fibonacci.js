////// OPCION 1 ////////////
/*
var fibonacci = function(mes){
	var n1 = 0;
	var n2 = 1;
	var n3;

	for (var i = 0; i < 20; i++) {
		n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
		console.log(n3);
	}
}
fibonacci(mes);
*/



////// OPCION 1.2 - Mejorado ////////////
/*
var fibonacci = function(mes){
	var n1 = 0;
	var n2 = 1;
	var n3;

	for (var i = 0; i < mes; i++) {
		n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
		
	}
	return n3;
}
console.log(fibonacci(20));
*/



////// OPCION 1.3 - Mejorado ////////////
/*
console.log("Recursividad utilizando for pero no se obtiene resultados");
function fibonacci(N){
	var x = 1;
	for (var i = 0; i <N; i++) {
		x = fibonacci(N-1) + fibonacci(N-2);
	}
	return x;
	console.log(x);
}
console.log(fibonacci(10));
*/




/***** Saco la N de la operacion y lo cambio 
por i ya que es el número de vueltas****/

console.log("Recursividad sin utilizar for");
function fibonacci(num){
	var x;
	if (num <= 1) return 1;  // Sin llaves SOLO ejecuta la primera sentencia 
	                         // mas proxima al parentesis, tener en cuenta que 
	                         // No voy a necesitar un else.
    x = fibonacci(num-1) + fibonacci(num-2);
	
	console.log(x);
	return x;
}
var cantConejos = fibonacci(7);
console.log(cantConejos);




/*
TABLA
i  |  x  |  f(-1)   | f(-2)
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
 0 |  1  |   0      |  1  
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
   |     |          |        

*/   