$(document).ready(function(){	
	$(".btnEdit").on("click", function(){
		$(this);
		$("#myModal").modal();
	});
	
	$(".btnEdit").on("click", function(){
		//var btnId= $(this).attr('id');
		var btnId= $(this).prop('id');
		alert("Boton es: "+btnId);
	});
});
