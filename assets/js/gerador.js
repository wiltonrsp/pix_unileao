var qrcode = new QRCode("pix_qrcode");

function makeCode () {		
	var valor = 'www.google.com.br';
	qrcode.makeCode(valor);
}

makeCode();

 