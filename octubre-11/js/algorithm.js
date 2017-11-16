
/*var number =[6, 5, 3, 1, 8, 7, 2, 4];

for (var i = 0; i <= number.length-1; i++) {
    for (var j = 1; j <= number.length-1; j++) {
    
        if(number[i] > number[j]){
            var numTemp = number[i];
                number[i] = number[j];
                number[j] = number[i +1];
        } 
         console.log(number[i]);               
    }
   
}   
*/

/****************** MÉTODOS DE ORDENAMIENTO *********************/
var number =[6, 5, 3, 1, 8, 7, 2, 4];
//var number =[1, 2, 3, 4, 5, 6, 7, 8];      
var isMessy = true;

console.log("Asi es al principio: " +number);
for (var i = 0; i < number.length  && isMessy == true; i++) {
    
    isMessy = false; //Esto para no volver y no dar mas vueltas.

    for (var j = 0; j < number.length -i ; j++) {
        
        // Si el numero es mayor a su siguiente intercambio;  
        if(number[j] > number[j+1]){
        var numTemp = number[j];
            number[j] = number[j+1];
            number[j+1] = numTemp;
        isMessy = true;        

        } 
    console.log(i,j)    
             
    }
console.log("Asi es al final: " +number);     
}   
//swap Si esta ordenada ya no vuelve

// 8, 7, 6, 5, 4, 3, 2, 1 

/************jAVASCRIPT BINARY SEARCH*********/