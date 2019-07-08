/*$(function(){
	alert("Opa, tudo Bom!");
});*/

/*$(document).ready(function(){
	alert("Opa Tudo Bom !");
});*/

//Função para rodar por fora e ser carregada pela JQuery

function tudoPronto(){
	alert("Tudo Pronto !");
}

//Document é a página toda o ready significa que quando a página estiver pronta executa o JQuery,
//renderizando tudo.

$(document).ready(tudoPronto);