/*if (N<0 && N>7){
	console.log("Número inválido");
}
	if(N == 1) {console.log("Lunes");}
	if(N == 1) {console.log("Martes");}
*/


/********************* *********************/
/*var y;
switch(y){
	case 1 : console.log("lunes"); break;
	case 2 : console.log("lunes"); break;
	default : console.log("No es válido"); break;
}*/


/*************************************** EJERCICIO 3 *******************************/
/*Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente. */

/***** OPCIÓN 1 *****/
/*var month;

if (month == "abril" || month == "junio" || month == "septiembre" || month == "noviembre"){
	console.log("El mes tiene 30 días");
}
	else if( month == "febrero") {console.log("El mes tiene 28 días");}
else{
	{console.log("El mes tiene 31 días");}
}*/	


/***** OPCIÓN 2 *****/
/*var month;

switch(month){
	case "febrero" : console.log("El mes tiene 28 días"); break;
	case "abril" : console.log("El mes tiene 30 días"); break;
	case "junio" : console.log("El mes tiene 30 días"); break;
	case "septiembre" : console.log("El mes tiene 30 días"); break;
	case "noviembre" : console.log("El mes tiene 30 días"); break;
	default : console.log("El mes tiene 31 días"); break;
}*/

/********************* EJERCICIO DADO EN CLASE *********************/

/*var monthNumber;

monthNumber = "1";

switch(monthNumber){
	case "1" : console.log("El mes es Enero"); break;
	case "2" : console.log("El mes es Febrero"); break;
	case "3" : console.log("El mes es Marzo"); break;
	case "4" : console.log("El mes es Abril"); break;
	case "5" : console.log("El mes es Mayo"); break;
	case "6" : console.log("El mes es Junio"); break;
	case "7" : console.log("El mes es Julio"); break;
	case "8" : console.log("El mes es Agosto"); break;
	case "9" : console.log("El mes es Septiembre"); break;
	case "10" : console.log("El mes es Octubre"); break;
	case "11" : console.log("El mes es Noviembre"); break;
	case "12" : console.log("El mes es Diciembre"); break;
	default : console.log("El número ingresado no corresponde a un mes válido"); break;
}
*/

/********************* EJERCICIO 5 *********************/
/*  Dada una variable que puede ser una letra, determinar si es una vocal. */
/*var letra;
    letra = prompt("Ingresar una letra");

switch(letra){
	case "a" : console.log("La vocal es a");
	case "A" : console.log("La vocal es A"); break;
	case "e" : console.log("La vocal es e");
	case "E" : alert("La vocal es E"); break;
	case "i" : console.log("La vocal es i");
	case "I" : console.log("La vocal es I"); break;
	case "o" : console.log("La vocal es o");
	case "O" : console.log("La vocal es O"); break;
	case "u" : console.log("La vocal es u");
	case "U" : console.log("La vocal es U"); break;
	default : console.log("No es una vocal"); break;
}*/

/********************* EJERCICIO 6 *********************/
/* Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y determinar si eso es mayor que y, de lo contrario sumar x y z (x+z) y multiplicarlo por y. */

/**Opcion tam 1**/
//Valoración 3 estrellas
var x, y, z, total;

if(x>y){
	total=(x-z);
	if(total>y){

	}
}
else{
	total = (x+z)*y;
}

/* ó invierto el operador aritmético */
//Valoración 4 estrellas
if(total<y){
	total = (x+z)*y;
}

/* ó niego el operador aritmético */
//Valoración 4 estrellas
if(!(total>y){
	total = (x+z)*y;
}

// Tabla de Verdad
// Encabezado: TOTAL | Y | TOTAL < Y | !(TOTAL>Y)


/****************EJERCICIO 7*************************/
/*Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales, se deben realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%*/

if(ant > 10){sueldo =  sueldo +0.1*sueldo;}
	else if (ant <=10 && ant > 5) {}
		else if (ant <= 5 && ant > 3) {sueldo = sueldo + 0.05*sueldo;}
			else{ sueldo = sueldo + 0.03*sueldo;}

