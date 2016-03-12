/*
Pregunta 5 (3 ptos)
Crear la clase (con la función constructora) de teléfono, 
un teléfono tiene un número asignado que se le pasa a la 
función constructora, 
y carácterístcas como marca y color. (1 pto)

Crear un método que se llame marcar 
que aumente el contador de llamadas en uno. (1 pto)

Crear un arreglo de teléfonos 
y crear una función reciba un arreglo de teléfonos 
y que permita devolver otro arreglo con todos los 
teléfono de una marca. (1 pto)

*/


function Telefono(marca, color, numero){
	this.marca = marca;
	this.color = color; 
	this.numero = numero;
	Telefono.marcar = function(){
		llamadas+= 1;
	}
}

var tel = [
	{marca: 'Samsung', color = 'negro', numero = '1'},
	{marca: 'Iphone', color = 'blanco', numero = '2'},
	{marca: 'Samsung', color = 'azul', numero = '3'},
]


function marcas(tel, m){
	.filter(function(tel){
		return tel.marca == m;
	})
	.map(function(tel){
		return tel.marca;
		return tel.color;
		return tel.numero;
	})

}

console.log(marcas);







