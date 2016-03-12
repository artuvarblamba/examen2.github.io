/*
Pregunta 3 (1 ptos)
Se pide una función que recibe un arreglo 
como parámetro y devuelva una copia del arreglo.

Probar con un ejemplo sencillo que funcione.
*/

var arr1 = ["washa", 2, "arturo"];
var arr2 = []

for (var i = 0; i < arr1.length; i++) {
	elem = arr1[i];
	arr2[i] = elem;
	console.log(arr2[i])
};


