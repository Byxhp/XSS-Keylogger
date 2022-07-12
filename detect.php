<?php
// Se o parâmetro (log) no url (detect.php?log=) não for vazio, irá detectar automaticamente oque está nele e salvar em um txt
if (!empty($__GET["log"])) {
	$file = fopen("dados.txt", "a+");
	fwrite($file, $_GET["file"]);
	fclose($file);
}
?>