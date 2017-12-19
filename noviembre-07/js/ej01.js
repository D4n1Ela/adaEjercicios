var arrayOption = ['Opcion 1','Opcion 2','Opcion 3','Opcion 4'];

function addLi() {
var myUl = document.getElementById('lista');

for (var i = 0; i < arrayOption.length; i++) {
	var myLi = document.createElement('li');
	
	myLi.textContent = arrayOption[i];
	myUl.appendChild(myLi);
	
	document.getElementsByTagName("li")[i].setAttribute("class", "liClass"); 
	}	
}

function removeLi() {
var myUl = document.getElementById('lista');
var myLi = document.getElementsByTagName('li')

for (var i = 0; i < arrayOption.length; i++) {

	myUl.removeChild(myLi[0]);

	}	
}

/*
	var contenido = document.createTextNode(arrayOption[i]);
	myLi.appendChild(contenido);
	myUl.appendChild(myLi);
	*/
