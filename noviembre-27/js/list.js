

$(document).ready(function(){

$("#myButton").on("click", function(){
	/*
	var myContent = $("#myInput").val();
	var myLi ='<li>. '+myContent+'<button class="btnDelete" type="button">x</button></li>';
	if ($("#myCheckbox").is(":checked")) {
			//$("li").addClass("myRed");
			$(myLi).css("color","red");
		}
	//$("#myCheckbox").prop('checked',false);	
	$("#myUl").append(myLi);
	$("#myInput").val("");

*/
	
   var myArray = [];
   myArray.push($("#myInput").val());

   console.log(myArray);

	for (var i = 0; i < myArray.length; i++) {
		var myLi = '<li>'+myArray[i]+'<button class="btnDelete" type="button">x</button></li>';
        $("#myUl").append(myLi);
        $("#myInput").val("");
        if ($("#myCheckbox").is(":checked")) {
        	console.log("Entro al if")
			$("li").last().addClass("myRed");
		}
	}
	$("#myCheckbox").prop('checked',false);

	$(".btnDelete").on("click", function(){
		$(this).parent().remove();
	})

});

})	





/*
$(".btnDelete").on("click", function(){
	$(this).parent();
})
*/