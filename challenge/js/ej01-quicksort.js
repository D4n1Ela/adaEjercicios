
/*
function ejemplo1() {

	console.log("*** Qué nos devuelve Math.floor(Math.random()*100) ****");

	var numRandom = Math.random();
	console.log("Math.random(): " +numRandom);

	var numRandomx100 = numRandom * 100;
	console.log("Math.random()*100 es: " +numRandomx100);

	var FloorNumRandom = Math.floor(numRandomx100);
	console.log("Math.floor(Math.random()*100) es: " +FloorNumRandom);

    return FloorNumRandom;
}

var aleatorio = ejemplo1();
console.log("Número aleatorio entre 0 y 100:  " +aleatorio);
*/




/*
for (var i = 0; i < 15; i++) {
	arrayRandom[i] = Math.floor(Math.random()*100);
}
console.log(arrayRandom);

var pos = Math.floor(Math.random()*arrayRandom.length);
console.log("La posición es: "+pos);

var numPivote = arrayRandom[pos];
console.log("El número pivote es: "+numPivote);
*/
//&& leftArray.length !=1 
//&& rigthArray.length !=1 
var arrayRandom = [ 5, 3, 64, 33, 95, 41, 40, 73, 23, 49, 12, 96, 74, 70, 97 ];
var numPivote = 95;
var leftArray = [];
var rightArray = [];
var arrayGral = [];


function quikSortByDani(arrayModify){
//var pos = Math.floor(Math.random()*arrayModify.length);
//console.log("La posición es: "+pos);
//var numPivote = arrayModify[pos];	
var numPivote = 95;
var orderedArray = [];
	for (var i = 0; i < arrayModify.length; i++) {
		if (arrayModify[i] < numPivote ) {
			leftArray.push(arrayModify[i]);
			/*if(leftArray.length == 1){
                 leftArray =  orderedArray;
				
			}else{
				console.log("leftArray es: "+leftArray);
				quikSortByDani(leftArray);
			}
*/
		}
		else if (arrayModify[i] >= numPivote) {
		    rightArray.push(arrayModify[i]);  	
		}
	}
orderedArray.push(leftArray);
orderedArray.push(numPivote);
orderedArray.push(rightArray);	
console.log("leftArray es: "+leftArray);
console.log("rightArray es: "+rightArray);

return  orderedArray;
}

var orderedArray = quikSortByDani(arrayRandom);
console.log("orderedArray es: "+orderedArray);

//Contemplamos los iguales? 
/*var leftArray = 
	arrayRandom.map(function(num){
    if (num >= numPivote ) {
       return num;
	}
	});
*/
