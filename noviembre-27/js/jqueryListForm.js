$(document).ready(function(){
	$("#btnAdd").on("click", function(){
		var liText = $("#inpHomework").val();
		var myLi ='<li>. '+liText+'<button class="btnDelete" type="button">x</button></li>';
		$("#myUl").append(myLi);
		$("#inpHomework").val("");

		if ($("#checkUrgent").is(":checked")) {
				$("li").last().addClass("myRed");
			}

		$("#checkUrgent").prop('checked',false);	
		/*
		$(".btnDelete").on("click", function(){
			$(this).parent().remove();
		})	
	    
	    $("li").on("click", function(){
	    	$(this).toggleClass("underline");    		
    	})
    	*/
	})

	function deleteParent(){
		$(this).parent().remove();
	}
    $(document).on("click", ".btnDelete", deleteParent);

    function underline(){
    	$(this).toggleClass("underline");
    }
    $(document).on("click", "li", underline);
})

/*
docuemnt ready tengo todas las variable cargadas.

Como la clase .btnDelete esta dentro de los li que son variables locales en las 
la funcion principal 
Si lo siguiente no esta dentro 
$(".btnDelete").on("click", function(){
		$(this).parent().remove();
	})	

Funcion anonima si lo que se hace se hace adentro


Detener la ejecución normal de un evento
$("a").on("click", function(event){
	event.preventDefault()
})


Convertir un formulario en un json
. Utilizarlo en el Proyecto Final
. JSON={"CLAVE":"VALOR", "CLAVE":"VALOR" } 
. "VALOR" Si lo necesito como número tengo que pasarlo.
. Json se recorre de una forma particular en javascript
*/