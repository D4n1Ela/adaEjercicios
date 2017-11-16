/*var leftArray= [];
for (var i = 0; i < arrayRandom.length; i++) {
	if (arrayRandom[i] >= numPivote ) {
     
	}
}	
console.log("leftArray mayores al pivote: "+leftArray);
*/

function factorial(num)
{

      console.log("num es: " +num);
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 1) {

    console.log("num es: "+num+" Obtenemos el result base, desde aca comienza a resolverse el factorial");
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
    var result = (num * factorial(num - 1));
/*
    (num=3 * factorial((num=2* factorial((num=1 * factorial(num - 1))))));
                                                           ¨¨¨ 0 ¨¨¨
                                                  ¨¨¨¨¨¨   1 ¨¨¨¨¨¨¨
    							      ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ 1 ¨¨¨¨¨¨¨¨¨¨¨¨
                        ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ 2 ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
    ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨  6  ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
*/    
    console.log("result es: "+result);
    return result;  
    }
    
}

var result = factorial(3);
console.log(result);