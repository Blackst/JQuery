
//Todos esses são métodos auxiliares do Ajax e não os principais.

/*$(function(){

	$('button').bind('click', function(){

		$('.desktop').load("teste.html");
	});
});*/


//Outro meio de fazer uma requisição Ajax é da seguinte forma

$(function(){

	$('button').bind('click', function(){

		//Passa o teste.html para o parametro de t via get e tbm da pra fazer via post.
		$.get("teste.html", function(t){
			$('.desktop').html(t);
		});
	});
});