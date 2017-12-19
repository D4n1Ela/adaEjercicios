
var disfraces["Unicornio","Alice in Wonderland",
"Pikachu", "Hello Kitty", "Charlotte Caniggia", "Momia", "Gogo Yubari", 
"britney en 2007", "orejas de tigre", "Doctora", "coneja", "Cleopatra", 
"estudiante de slytherin", "Leia", "Tina Turner", "La minita del bebé de Rosemary",
"11 de stranger things","kill bill","Raven de teen titans","merlina Adams", 
"Wally", "super girl", "moana", "semaforo", "anana", "abeja"];

console.log(disfraces.length);

Function randomHalloween(disfraces){
	var disfracesLocal = disfraces;
	console.log(disfracesLocal);
	var posicion = Math.floor(
		(Math.random()) * (disfraces.length -1);
		return disfraces[posicion];
	};

	console.log(randomHalloween(disfraces));


// Halloween();
// HOISTING("ELEVACION" EN INGLES);


// function ramdomHalloween(){
// 	//Math.floor()};


// var random = Math.floor(Math.random()*10);
// console.log(random);