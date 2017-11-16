/*************** EJERCICIO ***********************/
//    Codear el algoritmo de Luhn

/*************** COMO LO PIENSO ***********************/
//   1. Como iterar de derecha a izquierda
//    2. Multiplicar los segundos dígitos
//    3. Sumar todos los dígitos
//    4. Si el resultado es % 10 esta ok

/*************** COMO pienso estrategicamente ***********************/     
/*1. si (i % 2 === 0)
	Multiplico;
	sino
	Nada;	

	si trabajo con una cadena probar todas las posibles pruebas. Hacer las pruebas necesarias.

2.  1|2|3|4|5
    ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
    1|4|3|10|6


    Pensar "todo se soluciona con un for o if ?"

    TIP: Se voy a ahacer un booleano lo identifico con un is o es al comienzo del nombre

    Prueba de valores para 12356
    ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
    i=4 | dig=6 | isSecPos = false
    i=3 | dig=5 | isSecPos = true
    i=2 | dig=3 | isSecPos = false
    i=1 | dig=2 | isSecPos = true
    i=0 | dig=1 | isSecPos = false <--- Por esto la condifición del FOR tiene que ser i>= 0

for  i = numCard.length -1; i >= 0; i--) {
        console.log(("val i "+i));
        if isSecPos
        	Multiplico por 2
            isSecPos = No
        else
            Nada;
            isSecPos = si
        alert(number[i])        
//    	console.log("val 1 es "+numInt);

Prueba
i = 4 | isSecPos = false | 6 | cambia isSecPos = true |
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
4 = 3 | isSecPos = true | 10 | cambia isSecPos = false |
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨

TIP: isSecPos es una bandera.
*/
 /*************** COMO codeo ***********************/    

 var numCard= "36093580156761";
 var cant = numCard.length;
 var numInt = 0;
 var total = 0;
 var isSecPos = false;


    for (var i = cant-1; i >= 0; i--) {
        console.log(("val i "+i));
        numInt = parseInt(numCard.charAt(i)); 
//    	console.log("val 1 es "+numInt);

        if (isSecPos == true){
            numInt = numInt *2;
        	if (numInt > 9){ // COMO SABEMOS QUE EL NUMERO A VERIFICAR NO ES MAYOR A 9
        		numInt = numInt - 9;
        		//numInt -= 9;
        	}
//          console.log("val 2 es "+numInt);  
        }
    secPos = !isSecPos;  
    console.log("val numProcesado es "+numInt);
     
    total= total + numInt; 
    //OTRA OPCIÓN DE HACER LO MISMO es total += numInt; 
 
    console.log("valor total es "+total);  
    }
    
   /* if(total % 10 == 0){
        console.log("valor valido"); 
    }else{
    	console.log("valor NO valido");  Otra opción de escribir lo mismo es la siguiente de operador TERNARIO
    }*/
    
    //OPERADOR TERNARIO
    alert(total % 10 === 0 ? "Valido" : "No valido")

    //alert(cant);


    /*************** COMO LO PIENSO ***********************/
    1. Como iterar de derecha a izquierda
    2. Multiplicar los segundos dígitos
    3. Sumar todos los dígitos
    4. Si el resultado es % 10 esta ok



function valid_credit_card(numero){
	var par = false;
	var resultadoFinal = 0;

	for ( var i = numero.lenght -1; i>= 0; i-- ){
    var digito = parseInt(numero.charAt(i), 10);
        if (par){
        	digito = digito *2;
        	while(digito >9 ){

        		var digitoString = digito + '';

        		digito = 0;
        		for(var n= 0); n< digitoString.length; n++)
        {
        	digito += parseInt(digitoString,charAt(n), 10)
        }	
    }
}

    	}
    }