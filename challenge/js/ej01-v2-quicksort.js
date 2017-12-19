
var arrayRandom = [ 5, 3, 64, 33, 95, 41, 40, 73, 23, 49, 12, 96, 74, 70, 97 ];

/*
console.log("arrayRandom es: "+arrayRandom);

function quikSortByDani(arrayRandom){
var posPiv = Math.floor(arrayRandom.length/2);
var temp = 0;
var j = 0;
var arrayModify = [];
for (var i = 0; i <= posPiv; i++) {
	arrayModify[i] = arrayRandom[i];
}
console.log("arrayModify es: "+arrayModify);

while(arrayModify.length>1){	
    console.log("arrayModify[posPiv] es: "+arrayModify[posPiv]);
    temp = arrayModify[posPiv];

    arrayModify[posPiv] = arrayModify[j]; 	
    console.log("arrayModify[posPiv] luego del swap es: "+arrayModify[posPiv]);
    arrayModify[j] = temp;
    j++;
    console.log("arrayModify["+j+"] es: "+arrayModify[j]); 
    console.log("arrayModify es: "+arrayModify); 



if (arrayRandom[i] > arrayRandom[posPiv]){
   quikSortByDani(arrayRandom); 

}
else if (arrayRandom[i] < arrayRandom[posPiv]){
	quikSortByDani(arrayRandom);	

}
}
return arrayModify;
}

var orderedArray = quikSortByDani(arrayRandom);
console.log("orderedArray es: "+orderedArray);

*/

var p = arrayRandom.length-1;
var swap;

for (var p = arrayRandom.length-1; p > 0; p--) {
	for (var i = 0; i < p; i++) {
		if (arrayRandom[i] > arrayRandom[p]) {
			temp = arrayRandom[p];
		    arrayRandom[p] = arrayRandom[i]; 	
		    arrayRandom[i] = temp;
		}
	}
}

console.log("arrayRandom es: "+arrayRandom);