
//--- CONSIGNA  ---//
// Cargar los ingresos de una semana de cinco días

//---  EJERCICIO A: Array y For  ---//
var week = [50, 35, 105, 40, 25];
var day = ["lunes", "martes", "miércoles", "jueves", "viernes"];
var i = 0;
var total = 0;

for (i = 0; i< week.length; i++){
    console.log("El día " +day[i]+ " se obtuvieron los siguientes ingresos: " +week[i]+ ".-");
    
    total += week[i];/*total = total + week[i]; OTRA OPCION es CON += */ 
    if (week[i] > 50) {
        console.log("El día " +day[i]+ " tiene un ingreso mayor a 50 y es de: " +week[i]+ ".-")        
    }
}

console.log("Esta semana se obtuvieron los siguientes ingresos: " +total+ ".-");
console.log("El promedio de los ingresos de la semana: " +(total/week.length)+ ".-"); //  declaro y signo a una variable prom = total/week-length;

//--- TABLA DE VALORES---//
/*i | week[i] | day[i] | console()
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
0 |   50    |   lu   |  false    
1 |   35    |   ma   |  false 
2 |   105   |   mi   |  true
3 |   40    |   ju   |  false
4 |   25    |   vi   |  false
5 |   -     |   -    |    -
*/


