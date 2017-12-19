var arrayOption = ['Opcion 1','Opcion 2','Opcion 3','Opcion 4'];

var btnAddList = document.getElementById('addLi');
btnAddList.addEventListener('mouseover', addList);

var btnRemoveList = document.getElementById('removeLi');
btnRemoveList.addEventListener('click', removeList);

function addList() {
var myUl = document.getElementById('list');	
for (var i = 0; i < arrayOption.length; i++) {
	var myLi = document.createElement('li');	
		myLi.textContent = arrayOption[i];
		myUl.appendChild(myLi);
	}	
}

function removeList() {
var myUl = document.getElementById('list');
var myLi = document.getElementsByTagName('li')

for (var i = 0; i < arrayOption.length; i++) {
	myUl.removeChild(myLi[0]);
	}	
}


/*
var myUl = document.getElementById('addLi');
//var myUl.addEventListener('Cual es la accion', 'Cual es la funcion')
*/

/* TAREA: 

Logo de TELEFE avenetos de mouseover para que cambien de color.

*/