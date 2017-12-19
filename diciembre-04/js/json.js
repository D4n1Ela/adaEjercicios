/*
$(document).ready(function(){
	//Declaro el objeto
	var objData = {"name": "Daniela", "Age": "28", "Single": true, "Photo": null}
	console.log(objData);


	//Metodo para transformarlo al formato json, lo standarizo(lo aplano)
	var jsonData = JSON.stringify(objData);//JSON. Es la clase
	console.log(jsonData)

	var myA = "<a href='json.html?dato="+jsonData+"'>Hola</a>"
    $("div").append(myA);
    

})
*/
// ----- EN JAVASCRIPT ----  ///
var formulario = document.getElementsById('formulario'),
		nombre = formulario.nombre,



function validarNombre(e){
	if (nombre.value = '' || nombre.value == null) {
		console.log('Por favor completar el nombre');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor completa</li>'
        
        e.preventDefault		
		//preventDefault lo utilizo porque primero tengo que validar los datos antes de enviarlos.
	}
}




// ----- EN JQUERY ----  ///
$(document).ready({
	var ul = $("#error");
	$(#registrate).on("click", function(event){
		event.preventDefault();
        
        var nombre = $(#nombre).val();
        var mail = $(#mail).val();

        validar(nombre, mail);

        if (validar(nombre, mail)) {
        	var json = {"nombre": nombre, "mail": mail}
        }
		

	})
});


/*
	* Valido que contenga caracateres
	* @params campo / string
	* return boolean
*/
function validarRequeridos(campo){
	campo.trim(); // Saca los espacios en blanco del string.
	if (campo.length == 0) {
		return false;
	}
	return true;
}    

function validarMail(mail){
	mail.trim(); // Saca los espacios en blanco del string.
	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(emailRegex.test(mail)){
		return true;
	}
	return false;
}

function validar(nombre, mail){
var valido = true;

	if (validarRequeridos( $(#nombre).val() == false)){
    		msg = "<li>El nombre es un campo requerido</li>";
    		ul.append(msg);
    		valido = false;
		}
		
		if (validarRequeridos( mail == false)){
    		msg = "<li>El mail es un campo requerido</li>";
    		ul.append(msg);
    		valido = false;

		}else{

			if(validarMail( mail == false)){
    		msg = "<li>Debe ingresar mail valido</li>";
    		ul.append(msg);
    		valido = false;
		    }
		}
    return valido;
}









/*
<<< --- APUNTES --->>>
json: pares, clave.valor

nombre = formulario.nombre; Si pongo esto en la consola: Me muestra
    Esto es igual a <input type="text" name="nombre" placeholder="Nombre">


var jsonData =  {"personas":
					{"nombre": "Pepe", "edad": "35"},
				    {"nombre": "Coco", "edad": "25"}
			    }   
*/
