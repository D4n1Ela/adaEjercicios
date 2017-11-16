
/*-----------------  EJERCICIO 1 -----------------*/
/*
Cargar de forma automática incremental, un array
de números a partir de un largo dado por el usuario.
*/
/********** Con Array y For ***********/
/*
var i;
var count = 6;
var n = 5;
var inArray = [count];
    
    for (i = 0 ; i <= count - 1 ; i++) {
        inArray[i] = n++ ;
        console.log("El array tiene en la posicion " + i + " el valor: " + inArray[i]);
    }
*/
/*
var notasMusicales =[];
var cant = notasMusicales.length;

    console.log("Cantidad de variables del array: " +cant);

    notasMusicales[0] = "DO";
    notasMusicales[1] = "RE";
    notasMusicales[6] = "MI";

    cant = notasMusicales.length;
    console.log("Mostrar los valores del array: " +notasMusicales);
    console.log("Cantidad de variables del array: " +cant);
Esto muestra lo siguiente en la consola:
- Cantidad de variables del array: 0
- testArray.js:30 Mostrar los valores del array: DO,RE,,,,,MI    
------> Notar que al iniciar el array en 0, 1 y 6 en el índice el length es 7 
- testArray.js:31 Cantidad de variables del array: 7

*/
/*
var notasMusicales =[];
var nombre = "Gia";
var cantN = 0;
var cant = 0;

    cantN = nombre.length;
    console.log("Gia tiene letras cant: " +cantN);

    console.log("Cantidad de variables del array: " +cant);

    notasMusicales[0] = "DO";
    notasMusicales[1] = "RE";
    notasMusicales[2] = "MI";
    notasMusicales[3] = "FA";
    notasMusicales[4] = "Celes";

    cant = notasMusicales.length;
    var ultimoElemento = notasMusicales.length-1;

    console.log("Cant. notas:" +ultimoElemento);
    console.log("El ultimo elemento es: " +notasMusicales[notasMusicales.length-1]);
*/

/*-----------------  EJERCICIO 2 -----------------*/
/*
Array vacio llenar con 10 valores y mostrar el primer y ultimo elemento.
*/
/********** Con Array y For ***********/

var i;
var n = 6;
var cant = 1;
var myArray = [n];
     console.log(n.length);
    
    for (i = 0; i <= n-1; i++) {
        myArray[i] = cant++ ;
        console.log("El array tiene en la posicion " + i + " el valor: " + myArray[i]);
    }    
    console.log("El primer elemento es: " +myArray[0]);
    console.log("El ultimo elemento es: " +myArray[myArray.length-1]);
 



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

