var planetas = [
			"Mercurio",
			"Venus",
            "Tierra",
            "Marte",
            "Jupiter",
            "Saturno",
   			"Urano",
   			"Neptuno",
   			"Pluton",
            ];
/*
console.log(planetas.push(["Ofiuco","Luna"]));
//console.log(planetas.push([9][1]));
console.log(planetas);


//var arrayDestroyed = planetas.pop();
//console.log(planetas);
//console.log(arrayDestroyed);

var lunaDestroyed = planetas[9].pop();
console.log("Saco luna: "+lunaDestroyed);
console.log(planetas);

*/
/*
var  funcion = function(planeta){
	console.log(planeta);
};
planetas.forEach(funcion);
*/
/*
console.log("********** Es igual a esto ********")
planetas.forEach(function myFunction(planeta){
	console.log(planeta);
});
*/
//Itera por cada uno de los planetas

/*
<button onclick="numbers.forEach(myFunction)">Try it</button>
<p id="demo"></p>

<script>
demoP = document.getElementById("demo");
var numbers = [4, 9, 16, 25];

function myFunction(item, index) {
    demoP.innerHTML = demoP.innerHTML + "index[" + index + "]: " + item + "<br>"; 
}
*/

planetas.forEach(function(){
	console.log("Uso el forEach");
});

planetas.forEach(function(planeta){
	console.log(planeta);
});

planetas.forEach(function(planeta, indice){
	console.log("El planeta es: "+planeta+ " y la posición es: "+indice);
});


planetas.forEach(function(e,i, array){
	console.log("El planeta es: "+e+ " y la posición es: "+i+ "  "+array);
});


planetas.forEach((e,i, array) => {
	console.log("El planeta es: "+e+ " y la posición es: "+i+ "  "+array);
});

