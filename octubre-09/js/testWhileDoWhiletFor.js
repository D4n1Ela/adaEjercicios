//---  CONSIGNA ---//
// Hacer la tabla con 9

//--- EJERCICIO A: Con while ---//
/*var i = 0;
var a = 0;
var n = 10;

while (i<=n){
    a = i * 9;
    console.log(a);
    i++;
}
*/

//---  EJERCICIO B: Con For ---//
/*var total = 0;
var n;

for (n=1; n<=10; n++){
    total = n * 9;
    console.log(total);
}
*/
//---  EJERCICIO C: Con Do While ---//
/*var i = 1;
var total = 0;

do{
    total = 9 * i;
    i= i + 1;
    console.log(total);

}while(i<=10);*/



//---  CONSIGNA ---//
// Promedio de numeros de 1 al 50

//--- EJERCICIO A: Con While ---//
/*var i = 1;
var total = 0;
var prom = 0;

while(i<=50){
    total = total + i;
    i++;
}
console.log("El total es " +total);
prom = total/50;
console.log("El promedio es " +prom);
*/

//---EJERCICIO B: Con For ---//
/*var i = 1;
var suma = 0;
var prom = 0;
var n = 50;

if(n>0){
    for(i = 1; i<= n; i++){
        suma = suma + i;
    }    
    console.log("La suma total es " +suma);
    prom = suma/n;
    console.log("El promedio es " +prom);
}
*/

//---  CONSIGNA ---//
// Calcular el factorial de un número

//--- EJERCICIO A: Con WHILE ---//
/*
var i = 1;
var n = 10;
var factorial = 1;

while(i<=n){
    factorial = i * factorial;
    i++;
}
console.log("El factorial de " +n+ " es: " +factorial);
*/
//--- EJERCICIO A: Con FOR ---//
var i = 1;
var n = 10;
var factorial = 1;

for(i = 1; i<= n; i++){
    factorial = i * factorial;        
}
console.log("El factorial de " +n+ " es: " +factorial);    
