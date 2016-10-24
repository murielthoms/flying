(function () {
	
	$("#recuperer").click(function(){
		console.log("succ");
		var addressIp = ("http://192.168.1.21:3000/places"); 
		$.ajax(addressIp)
		.done(ajaxDone)
		.fail(ajaxFail);

	});
	function ajaxDone(response){
		console.log(response);
		for (var i = 0; i < response.places.length; i++) {
			var place = response.places[i];
			console.log(place);
			$('#list').append('<li>' + place.nom + '</li>');
			if (place.nom === "IoT Valley") {
				var MotDePasse = place.password;
				$('#mdp').html('Mot de passe IoT Valley: ' + MotDePasse);
			}
		}
	}
	function ajaxFail(response) {
		console.log(response);
	}

	$('#meteo').click(function(){
		console.log('meteo ok');
		var url = "http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&callback=test&appid=e05300d9bacf77c059ab39927fd4909d&units=metric";
		$.ajax(url)
		.done(meteoDone)
		
		.fail(meteoFail);

	});
	function meteoDone(response){
		console.log(response);

	}


})(); 