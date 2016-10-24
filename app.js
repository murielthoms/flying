(function () {
	
	$("#récupérer").click(function(){
		console.log("succ");
		var addressIp = ("http://192.168.1.21:3000/places"); 
		$.ajax(addressIp){
			
		}
	});
	function ajaxDone(data){
		console.log(done);
		var places = reponce.places
		for (var i=0, i<places.length, i++)
			console.log(places[i]);
	}
})(); 