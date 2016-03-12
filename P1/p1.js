/*
Preguntas de javascript
Pregunta 1 (1pto)
Crear una función que tome los números de un arreglo 
entregado como parámetro y devuelva la suma de los elementos.

Probar con [1,2,3,4,5,6], 
el resultado debería ser 21, 
pero debe funcionar cualquier arreglo, 
si uno de los elementos no es un número deber ser ignorado.
*/

var arr = [];
var N = parseInt(prompt("Introduce el numero de elementos en tu arreglo."))
var total = 0;

for (var i = 0; i < N; i++) {
	E = parseInt(prompt("introduce un numero."));
	arr[i] = E;
}

function Suma(arr){

	for (var i = 0; i < N; i++) {
		E = arr[i];
		total += E;
	}
	console.log( total );	
}

Suma(arr);




