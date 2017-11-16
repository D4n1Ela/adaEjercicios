var nombre = "Nemo";

var nombres = ["lala", "Po", "Dipsy", "Nemo"];
/*Otra opcion de declarar y asignar array es la siguiente: */
//var nombres[] = "lala", "Po", "Dipsy", "Nemo";

function buscandoNemo(nombre, nombres){
	// Opcion1 var encontrado = false;
	for (var i = 0; i < nombres.length; i++) {
		if (nombre == nombres[i]) {
			// Opcion1 encontrado = true;
            // Opcion2 en lugar de la Opcion1 puedo hacer
            // lo siguiente para hacerlo más eficiente -->
            return true;
            //Comentar cuales son los parametros: (nombre, nombres)
            //Comentar que devuelve: Devuelve si encontro el nombre en el array
		}
	}
	// Opcion1 return encontrado;
	// Opcion2 -->
	return false;
}
var msj;
var encontreANemo = buscandoNemo("Nimo", nombres);
if (encontreANemo) {
	msj = "Encontre a Nemo";
}else{
    msj = "No encontre a Nemo";
}
console.log(msj);