//function Main() {
    var i;
    var count;
    var n;
    
  //  output("Dimensión del array");
    //n = input("N");
    count = 6;
    n = 5;      
    var inArray = [count];
    
    for (i = 0 ; i <= count - 1 ; i++) {
        inArray[i] = n++ ;
        console.log("El array tiene en la posicion " + i + " el valor: " + inArray[i]);
    }

  /*  var n; 
    var array = [];
    for (n = 0; n < count; n++) {
        array.push(null);
    }*/
//}

// The following functions are called whenever the program needs to input or output data.
// You can change these functions to use other webpage elements rather than pop-up
// windows.

/*function input (name) {
    return window.prompt("Please enter a value for " + name, "");
}

function output (text) {
    window.alert(text);
}*/

// The following function creates an empty function with 'count' elements
/*function createArray (count) {
    var n; 
    var array = [];
    for (n = 0; n < count; n++) {
        array.push(null);
    }
    return array;
}*/

