var tierra = ["capricornio", "tauro", "virgo"];
var agua = ["cancer", "escorpio", "piscis"];
var aire = ["libra", "acuario", "geminis"];
var fuego = ["aries", "leo", "sagitario"];

var signos = [tierra, agua, aire, fuego];

//-------- VER MODALIDAD -----------------//

console.log("/////////////// VER MODALIDAD ///////////////");
var msj;
for (var i = 0; i < signos[i].length; i++) {
	switch(i) {
		    case 0:
		        msj = "--------CARDINAL----------";
		        break;
		    case 1:
		        msj ="----------FIJO------------";
		        break;
		    default:
		        msj = ("--------MUTABLE----------");
	}	
	console.log(msj);
		for (j = 0; j < signos.length; j++) {
			console.log(". "+(signos[j][i]));
		}
}



//-------- VER ELEMENTOS -------//
console.log("/////////////// VER ELEMENTOS ///////////////");
for ( var i = 0; i < signos.length; i++) {
			switch(i) {
		    case 0:
		        msj = "--------TIERRA----------";
		        break;
		    case 1:
		        msj ="----------AGUA------------";
		        break;
		    case 2:
		        msj ="----------AIRE------------";
		        break;    
		    default:
		        msj = ("--------FUEGO----------");
		}	
		console.log(msj);
          //  for (var j = 0; j < signos[i].length; j++) {
			console.log(". "+(signos[i]));
		//}
		}

