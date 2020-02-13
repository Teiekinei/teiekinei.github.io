(function(){
	var online = /asus\.com/.test( window.location.hostname ), path = online?'/':'';
	document.write( '<link rel="stylesheet" href="' + path + '/css/main.css">');
	document.write( '<script src="' + path + '/js/main.js"></script>');
})();



