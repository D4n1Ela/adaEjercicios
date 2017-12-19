var notas = ["do", "mi", "fa", "sol"];
//Metodos push y pop alterar los elementos del final de nuestro array
// En push puedo pasar por parametro desde un elemento en adelante.

//--- Metodo PUSH ---//
console.log("......Metodo PUSH......");

	var notasPush = notas.push("la", "si");// Devuelve 6

	console.log(". Array con push: " +notas);
	// Para obtener el mismo resultado que el push tendría que hacer de forma arcaica lo siguiente:
	//notas[4] = "la";
	//notas[5] = "si";

	//Validacion
	console.log(". El valor que retorna push es igual al length del array? "+(notasPush === notas.length));// Devuelve 6 
	// En lugar del +() se puede utilizar la , y quedaria de la siguiente forma , notasPush == notas.length
	//



//--- Metodo POP ---//
console.log("......Metodo POP......");
	//notas.pop();

	var notaEliminadaSI= notas.pop();  // Lo que elimina pop lo guardo en una variable 
	var notaEliminadaLA= notas.pop();  // Lo que elimina pop lo guardo en una variable 
	console.log(". Array con pop: "+notas);
	console.log(". La nota eliminada es: "+notaEliminadaSI+" y "+notaEliminadaLA);



//--- Metodo indexOf ---//
console.log("......Metodo indexOF......");
	console.log(". La nota fa esta en la posición: "+(notas.indexOf("fa")));
	//si la nota esta repetida indexOf solo te muestra la pos del primero que encuentra.

