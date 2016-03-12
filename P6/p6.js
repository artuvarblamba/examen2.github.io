/*
Pregunta 6 (1pto)
El siguiente código debería remplazar un elemento de la página,
pero por algún motivo (o varios) no funciona, 
hay que arreglarlo.

<html> 
<head> 
<meta charset="utf-8"> 
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<title></title> 
<link rel="stylesheet" href="https://code.jquery.com/jquery-2.2.1.min.js"> 
<script src="prueba.js"> 
</head> <body> 
<p id="#p1"> Hola </p> 
</body> 
</html> 

~~~javascript  ~~~

HINT: utilizar el inspector de elementos 
y la consola de javascript del navegador.

*/
$(document).ready(function(){
	$( '#p1' ).html( 'Nuevo parrafo' );
});







