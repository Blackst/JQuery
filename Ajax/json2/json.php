<?php 
	
	$json = file_get_contents("http://www.correiodoestado.com.br/climatempo/json");
	$json = json_decode($json);

	$obj  = new StdClass();
	$obj->codigo = 111;
	$obj->cidade = "São Paulo";
	$obj->uf = "SP";
	$obj->baixa = 01;
	$obj->alta = 02;
	$obj->pico = 2;
	$obj->frase = "Alguma";
	$obj->data = "...";
	$obj->dia_mes = "janeiro";
	$obj->dia_semana = "quarta-feira";
	$obj->selecionada = 1;

	$json->previsao[] = $obj;

	echo "Cidades retornadas: ".count($json->previsao)."<br><br>";

	//Manipula o Json
	
	/*foreach ($json->previsao as $item) {
		echo "Cidade: ".$item->cidade." - baixa: ".$item->baixa." - Alta: ".$item->alta." - (".$item->frase.")<br>";
	}*/

	//Volta a virar json
	echo json_encode($json);
 ?>