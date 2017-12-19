principal = ['tarta de jyq','ensalada caprese','milanesa','1/4 de pollo'];
guarnicion = ['ensalada mixta','papas fritas','pure de zapallo'];
postre = ['flan con crema','queso y dulce','mousse de chocolate'];



$(document).ready(function(){
    
    $(".myButton").click(function () {	 
        var mySelection= [];
        $('input[name="principal"]:checked').each(function(){
        	mySelection.push($(this).val());
        })

        //alert(mySelection);
        
        $.each(mySelection, function(i, e){
        if (i < 3) {
        	var list='<li>'+mySelection[i]+'</li>';
    	    $('#myList').append(list);
        }	
    })
	});
    
     
})


