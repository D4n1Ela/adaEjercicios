var myArray=[
			['Jaime','Perez',28],
			['Lalo','pirulo',32],
			['Joaquin','Burbuja',45]
			];

function loadTable(){
	$('#myTable').html("");	

	for (var i = 0; i < myArray.length; i++) {
    var tr='<tr class="success" id="registry_'+(i+1)+'"'+'>'+
    		'<td>'+(i+1)+'</td>'+
    		'<td>'+myArray[i][0]+'</td>'+
    		//'<td><input id="name" class="reg'+(i+1)+'" disabled="false" value="Pruebo"></td>'+
    		//'<td><button data-rg=".reg'+(i+1)+'" type="button" id="btnMyEdit_'+(i+1)+'" class="btnEdit">Edit</button></td>'+
    		'<td>'+myArray[i][1]+'</td><td>'+myArray[i][2]+'</td>'+
    		'<td><button type="button" id="testingPropAndAttr" class="btnEdit">Edit</button></td>'+

    		'<td><button id="'+(i+1)+'" data-rg="#registry_'+(i+1)+'" type="button" class="btnDelete">Delete</button></td>'+
    		'</tr>';
    	$('#myTable').append(tr);
   
	} 

}


$(document).ready(function(){	


	loadTable();	

	$(".btnEdit").on("click", function(){
		$(this);
		$("#myModal").modal();
	});
	
	$(".btnEdit").on("click", function(){
		//var btnId= $(this).attr('id');
		var btnId = $(this).prop('id');
		alert("Boton es: "+btnId);
	});
/*
	$(".btnDelete").on("click", function(){
		//var btnId= $(this).attr('id');
		var btnId = $(this).prop('id');
		var trId  = "#registry_"+btnId;
		$(trId).hide(1000,function(){
			alert("Se borro un registro");	
		})
		
	});
*/

	$(".btnEdit").on("click", function(){
		$("input").prop("disabled",true);
		var row = $(this).data("rg");//"#registry_4"
		$(row).prop("disabled",false);		
	});

	$(".btnDelete").on("click", function(){
		var btnId = $(this).data("rg");//"#registry_4"
		$(btnId).hide(1000,function(){
			alert("Se borro un registro utilizando data");	
		});		
	});

	$("#btnAdd").on("click",function(){
		var newArray = [];
		newArray.push($("#newName").val());
		newArray.push($("#newLastname").val());
		newArray.push($("#newAge").val());
		console.log("newArray es: "+newArray);
		
		myArray.push(newArray);
		console.log("myArray es: "+myArray);
		loadTable();
});

	
	/*
	$("#btnAdd").on("click", function(){
		var newTr = '<tr class="success" id="registry_7"><td>7</td><td>Creo</td><td>Otra</td><td>Fila</td><td><button type="button" id="testingPropAndAttr" class="btnEdit">Edit</button></td><td><button id="7" data-rg="#registry_7" type="button" class="btnDelete">Delete</button></td></tr>';
		$("#myTable").append(newTr);		
	});
	*/

});


//QUEDA PENDIENTE AGREGAR QUE EL EDIT DEL INPUT FUNCIONE
//

/*
<button id="3" class="button" name="btnDelete"> </button>
. Con el add voy agregando clases
. Con el prop cambias la clase
. getElementById me devuelve todo el nodo, con el prop puedo traer valores de las propiedades:
- id
- class
- name

es DISTINTO add que prop

atributo DATA
data me permite poner valores adicionalesque utilizar en javascript
Generar mi propio atributo con el nombre que me sea util y luego recuperar
con el método que quiera.
Paso información adicional
Generalmente lo pasamos en un boton porque son los que tienen un listener 
ya que responden a un evento.
Data nos libera el concatenar dos palabras

INPUT

DIV Formulario
----------------------------------
|Nombre:    -> id = "newName"    |
|Apellido:  -> id = "newLastname"|
|Edad:      -> id = "newAge"     |
----------------------------------
Lo tomo desde el jquery
$(#newName).val();
o también con el prop("value") pero lo que corresponde es el primero.

Para agregarlo en un array
var newArray = [];
var n = $("#newName").val();
		newArray.push(n);
		Ó
newArray.push($("#newName").val());
newArray.push($("#newLastname").val());

y por ultimo lo agregamos en la matriz

*/