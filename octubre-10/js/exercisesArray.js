
/*-----------------  EJERCICIO 1 -----------------*/
/*
Cargar de forma automática incremental, un array
de números a partir de un largo dado por el usuario.
*/
/********** Con Array y For ***********/
/*
var i;
var n = 6;
var cant = 5;
var inArray = [n]; // También se podría hacer [] pero no es recomendable como buena práctica.
    
    for (i = 0 ; i <= n.length -1 ; i++) {
        inArray[i] = cant++ ;  // En lugar de cant se puede utilizar el valor de i 
                               // También podría ser inArray[]  
        console.log("El array tiene en la posicion " + i + " el valor: " + inArray[i]);
    }
*/

/*-----------------  EJERCICIO 2 -----------------*/
/*
Repetir el ejercicio anterior, ubicando 0 (ceros), 
en las posiciones pares y un valor que coincida con el índice en las posiciones impares.
*/
/********** Con Array y For ***********/
/*
var i;
var count = 6;
var n = 5;
var inArray = [count];
    
    for (i = 0 ; i <= count.length - 1 ; i++) {
        
        if(i % 2 == 0){
            inArray[i] = 0;

        }else{
            inArray[i] = i;
        }
        console.log("El array tiene en la posicion " + i + " el valor: " + inArray[i]);
    }
*/
/*-----------------  EJERCICIO 3 y 4 -----------------*/
/*
Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], 
mostrar por pantalla el valor máximo.
*/
/********** Con Array y For ***********/
/*
var x = [10,24,36,7,98,11,14,200];
var i;
var numBig = x[0]; //Acá asigno porque podrían ser todos los valores del array negativos. 
var pos = 0;

console.log(x.length);


    for (i = 0 ; i <= x.length -1 ; i++) {
        
        if( x[i] > numBig){
            numBig = x[i];
            pos = i;
        }
    }
    console.log("El valor " +numBig+ " es el valor máximo del array y esta en la posición: " +pos);    

*/


/*-----------------  EJERCICIO 5 -----------------*/
/*
Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
 mostrar por pantalla el valor máximo y la cantidad de veces que se repite.
*/
/********** Con Array y For ***********/
/*

var x = [10,24,36,7,98,11,14,20,98,14,10]
var i;
var numBig = x[0];
var time = 0;

    for (i = 0 ; i <= x.length ; i++) {
        
        if( x[i] >= numBig){
            if(numBig == x[i]){
                time = time +1;
            }else{
                time = 1;
            }
            numBig = x[i];
        }
    }
    console.log("El valor " +numBig+ " es el valor máximo del array y se repite: " +time+ " veces");    
*/
/*-----------------  EJERCICIO 6 -----------------*/
/*
Dados los siguientes arreglos:
X = ["a","l","f","a"];
Y = ["a","l","f","a","j","o","r"]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común
*/
/********** Con Array y For ***********/

var y = ["a", "l", "f", "e", "j", "o", "r"];
var x = ["p", "l", "f", "i"];
var match = [];
var little=y;
var big=x;

var i;
var j;
var k;
var valSame;

var isDifferent = false;
var isFound = false;

//Ambos arreglos son iguales?
if(x.length == y.length){
    for( i = 0; i <= y.length-1; i++){
        if(x[i] != y[j]){
            isDifferent = true;
        }
    }  
}

//Cuál de los dos es más largo?    
else if(x.length > y.length){
        console.log("El array X es mas largo que el array Y");
        little = y;
        big = x;
        
        }else{
             console.log("El array Y es mas largo que el array X");
             little = x;
             big = y;
 
        }
console.log("El array little es: " +little);
console.log("El array big es: " +big);



//Cuantas letras tienen en común
for( i = 0; i < little.length; i++){
    isFound = false;
    for(j = 0; j < big.length; j++){
        if(little[i] == big[j] ){
           valSame = little[i]; 
           for (var k = 0; k < match.length; k++) {
               if (valSame == match[k] ) {
                   isFound = true;  
               }
           }
           if (isFound == false) {
                match[match.length] = valSame;
           }
        }
    }
            
}

console.log("Los valores del array match son: " +match);      
console.log("El array match tiene : " +match.length + " cantidad de valores");      

if(isDifferent == true){
    console.log("El array x e y son iguales")
}else{
    console.log("El array x e y NO son iguales")
}




/*-----------------  EJERCICIO 7 -----------------*/
/*
Dado el siguiente array datos1 = ["Fido","Gomez",26,15000.78,true] 
y datos2 = ["Gervasio","Fernandez",32,28.550,false]
Determinar:
• ¿Cuál de los dos personajes es más viejo?
• ¿Cuál de los dos personajes está casado?
• Si Fido recibirá un aumento equivalente al 12.5% 
del sueldo de Gervasio, cuanto será el monto a cobrar?
Laexpresion de AND solo me sirve cuando voy a utilizar el verdadero
*/
/********** Con Array y For ***********/

/*var datos1 = ["Fido","Gomez",26,15000.78,true]; 
var datos2 = ["Gervasio","Fernandez",32,28.550,false];

var i;

for (i = 0; i < datos1.length; i++) {
    if (Number.isInteger(datos1[i]) && Number.isInteger(datos2[i])) {
        if (datos1 > datos2) {
            console.log("Fido es mayor"); 
        }else{
            console.log("Fido es menor"); 
        } 
    }

    if (typeof datos1[i] == "boolean" && typeof datos2[i] == "boolean") {
        if (datos1[i]) { console.log("datos1 es Casado")}else{ console.log("datos1 es Soltero") }
        if (datos2[i] === true) { console.log("datos2 es Casado")}else{ console.log("datos2 es Soltero") }    
    }

}



*/

/*
if (datos1[i].isInteger() && datos2[i].isInteger() && (datos1 > datos2)) ERROR Para ver 
    donde esta el error hacemos la siguiente tabla:

i  |  datos1[i].isInteger  |  datos2[i].isInteger  |   &&   |  datos1[i] > datos2[i] 
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
0  |        false          |        false          |  false |
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
1  |        false          |        false          |  false |
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
2  |         true          |         true          |   true |      false
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
3  |        false          |        false          |  false |

*/











/*TABLA DE VALORES*/
/*i | week[i] | day[i] | console()
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
0 |   50    |   lu   |  false    
1 |   35    |   ma   |  false 
2 |   105   |   mi   |  true
3 |   40    |   ju   |  false
4 |   25    |   vi   |  false
5 |   -     |   -    |    -
*/
/*******************  EJERCICIO A: Array y For  ******************************************/

