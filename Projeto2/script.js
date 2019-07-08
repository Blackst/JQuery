//PRimeira maneira de evitar conflito entre bibliotecas

/*var $j = jQuery.noConflict();

$j(document).ready(function(){
	alert("JQuery sem conflito com outras bibliotecas.")
});*/

//Outra forma é como abaixo chamando a biblioteca diretamente.

jQuery(document).ready(function(){
	alert("Funcionando nativamente...")
});

//Essas opções são usadas quando vc usa varias bibliotecas.