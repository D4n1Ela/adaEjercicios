$(document).ready(function(){
	$('#idText').hide();
});


$(document).ready(function(){
	$("img").click(function(){
		$(this).hide();
	});
});


$(document).ready(function(){
	$("figcaption").click(function(){
		$(this).toggleClass('negrita');
	});
});