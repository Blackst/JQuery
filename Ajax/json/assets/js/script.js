$(function(){

	$('#form').bind('submit', function(e){
		e.preventDefault();

		var txt = $(this).serialize();

		$.ajax({
			type:'POST',
			url:'ajax.php',
			data:txt,
			datatype:'json',
			success:function(json){
				if(json.status == 'ok'){
					alert("Deu Certo!");
				}else{
					alert("Deu errado!");
				}
			}
		});
	});
});