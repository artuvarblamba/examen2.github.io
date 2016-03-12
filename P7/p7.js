/*
Pregunta 7 (2pto)
Se está busca una página que al hacer click 
en un div este cambie de color, 
el problema es que no queremos que esto pase cuando 
se haga click en las cosas que estan dentro del div, 
arreglar el código.

~~~html <html> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title></title> <link rel="stylesheet" href="http://code.jquery.com/jquery-2.2.1.js"> </head> <body> El div de abajo al cambiarse de color al hacer click <div id="evento" style="background-color:yellow"> <p> Hacerme click no deberías cambiar el color </p> </div> </body> </html> ~~~

Este ejercicio vale 2 ptos

Hint: Bubbling

*/
/*
$(document).ready(function(){
	$( '#p1' ).html( 'Nuevo parrafo' );
});
*/
$('#outer').on( "click", function() {
    $( this ).css("background-color": "black");
});

$('#inner').click(function(e) {
    e.stopPropagation();
});






