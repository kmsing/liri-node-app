

//write the code you need to grab the data from keys.js. Then store the keys in a variable.

var fs = require('fs');

// My Scripts
var keys = require('./keys.js');
var twitter = require('twitter');
var twitterKeys = keys.twitterKeys;
var tweetsArray = [];
var input = process.argv[2];
var command = process.argv[3];
var basesong = "Rise";
var basemovie = "Titanic";

//var tmdbKey = keys.tmdbKey;

function takeCommand(input, command){
	switch(input){
		case 'my-tweets':
			mytweets(); 
			break;

		case 'spotify-this-song':
			if(input === undefined){
				command = basesong;
			}
			spotifyThis(command);
			break;

		case 'move-this':
			if(command === undefined){
				command = basemovie;
			}
			movieThis(command);
			break;

		case 'do-what-it-says':
			doWhatItSays();
			break;

		default: 
			console.log(Input your command.);

	}
}

 
function mytweets(){
  	var = insides {screen_name: 'KSCodeCamp'}
  		client.get('statuses/user_timeline', insides, function(error, tweets, response)
  		{
  			if(!error)
  			{
  				tweetsArray = tweets;
  				console.log(' ');
  				console.log('------------ Tweet Tweets ----------');

  				for(i=0; i<tweetsArray.length; i++) 
  				{
  					console.log('Time Created: ' + tweetsArray[i].created_at);
  					console.log('Tweet Text: ' + tweetsArray[i].text);
  					console.log('---------------------');
  				}
  			}
  			else {
  			console.log(error);
  		}
};

function spotifyThis(song){
	if(song === " "){
		song = "Rise";
	}

	spotify.search({type: 'track', query: song}), function(err, data){
		if (err){
			console.log("There was an error.");
			return;
		}

		var song = data.tracks.items[0];
		console.log("--------- Artist -----------");
		for(i=0; i<song.artists.length; i++){
			console.log(song.artist[i].name);
		}

		console.log("--------- Song Name -------- ");
		console.log(song.name);

		console.log("--------- Preview Link ------- ");
		console.log(song.preview_url);
		console.log(song.album.name);

	};//function

}

function movieThis(movie){
	console.log(movie);
	request("   ")

	var movieID = JSON.parse(body).results[0].id;

	var queryURL = " " + movieID + "?api_key=" + tmdbKey + "&append_to_response=credits,releases";

	request(queryURL, function(error, response, body){
		var movieObj - JSON.parse(body);


	})

}function doWhatItSays(){
	fs.readFile('random.txt', 'utf8', function(err, data){

		if (err){ 
			return console.log(err);
		}

		var dataArr = data.split(',');

		processCommands(dataArr[0], dataArr[1]);
	});
}

takeCommand(input, command);



  
