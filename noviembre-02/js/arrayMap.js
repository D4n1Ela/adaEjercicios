/*
var numeros = [1, 2, 3, 4, 5, 6, 7];
var numerosMultiplicados = 
	numeros.map(function(numero){
		return numero * 2;
	});
console.log("Array original: "+numeros);
console.log("Array x2: "+numerosMultiplicados);
*/

/*
var numeros = [];

for (var i = 0; i < 1000; i++) {
	numeros[i] = i + 1;
}
console.log(numeros);

var numerosIncrementados = 
	numeros.map(function(numero){
		return numero + 10;
	});
console.log("Array con incremento +10: "+numerosIncrementados);
*/

var colores = ["rojo", "amarrillo", "verde"];

var coloresEnMayuscula = 
	colores.map(function(letra){
		return letra.toUpperCase();
	});
console.log("Colores en Mayúscula: "+coloresEnMayuscula);