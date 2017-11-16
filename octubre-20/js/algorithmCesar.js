/****************** MÉTODOS DE CIFRADO *********************/

var abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var cba = [];
var displacement = 2;
var k = 0;
var i, j;
var msj = "HOLA";
var myChar;
var msjEncriptado= "";

for (i = (abc.length - displacement); i <abc.length ; i++) {  
            cba[k] = abc[i];
            k++;
    }
for (j = 0; j < (abc.length - displacement); j++) {    
    cba[k] = abc[j];
    k++
}
/*** Ver en la otra página OPCION DE EZE
var abcDesplazado = [];
var n = 6;

for (i = 0; i < arr.length; i++) { 
    //console.log("i:" +i);
    //console.log("i + n: " + (i + n));
    //console.log("(i + n) % arr.length:" + ((i + n) * arr.length));

    abcDesplazado[(i + n)% arr.length] = arr[i];
}
/***/

console.log("Este es el array Cifrado con corrimiento " +displacement+" es: " +cba) 

for (var l = 0; l < msj.length; l++) {
    myChar = msj.charAt(l); //OTRA OPCION msj[i]
    msjEncriptado += cba[abc.indexOf(myChar)]; // OPTIMIZADO


}
console.log("El msj "+msj+" encriptado es: " +msjEncriptado);

var msjDesencriptado = [];
for (var l = 0; l < msjEncriptado.length; l++) {
    myChar = msjEncriptado.charAt(l);
    msjDesencriptado += abc[cba.indexOf(myChar)]; // OPTIMIZADO


}
console.log("El msj desencriptado es: " +msjDesencriptado);

/* NO OPTIMIZADO
for (var l = 0; l < msj.length; l++) {
    myChar = msj.charAt(l);
    for (i = 0; i < abc.length; i++) {
        if (myChar == abc[i]) {
           // posABC = i;
           // posCBA = i + displacement;
           // valPosCBA = cba[posABC];
            valPosCBA = cba[i];

        }
    }
    msjEncriptado += valPosCBA;
   // console.log("La posicion de "+myChar+" es "+posABC );
    //console.log("La posicion de "+myChar+" desplazada es "+posCBA);
    console.log("El valor de la posicion de "+myChar+" desplazada es "+valPosCBA);
}
console.log("El msj "+msj+" encriptado es: " +msjEncriptado);

*/

/****************************** OTRA FORMA *****************************************/








/***********************************************************************/

// Esto es para no sobrepasarme del array
// var arr = ["A","B","C","D"]

// for (var i = 0; i < 50; i++) {
   //OPCION WHILE
   /* var j = i;
    while (j >= arr.length){
        j-= arr.length;
    }*/

   //OPCION MODULO console.log(i+ ": " +arr[i%arr.length]);
   //OPCION WHILE console.log(i+ ": " +arr[j]);
// }






