function getWordData(){
            const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definitions",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "36bfee0cc8msh9ccfba820cdea65p1a2f28jsn257e52dcbdca",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
};


        $.ajax(settings).done(function (response) {
			console.log(response);
	$('#define').text("Definition: " + response['definitions'][0]['definition']);
});


}

function getExample(){


            const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://wordsapiv1.p.rapidapi.com/words/" + word + "/examples",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "36bfee0cc8msh9ccfba820cdea65p1a2f28jsn257e52dcbdca",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
};


        $.ajax(settings2).done(function (response) {
			console.log(response['examples'])
			if(response['examples'] != null){
				speak(response['examples'][0])
			}
			else{
				speak("there is no example for this word")
			}
			
			$('#synonym').text(response['examples'][0].replaceAll(word.toLowerCase(), '____'))
	
});
}
