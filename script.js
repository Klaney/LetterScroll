var wordBank = ["smoke","bank","dinosaur","delicious","crackbaby","winner","loser","football","seachickens",
"baseball","elmo","anything","scroll","amelia","jones","thermos","hike","yosemite","freecell","keyboard",
"enter","exit","carpathia","teutonic","prussia","duchy","castile","habsburg","britain","washington",
"samuel","clemens","enterprise","picard","captain","millenium","commonwealth","novgorod","muscovy","tokugawa",
"samnite","epirote"];
var lvl1 = 2000;
var lvl2 = 1700;
var lvl3 = 1300;
var lvl4 = 1000;
var index = 0;
var wordCount = 0;

function shuffle(array) {
  var m = wordBank.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


var startGame = function(){
		//shuffle the bank 
		shuffle(wordBank);
		//put a new p element with a word into the box
		if (wordCount >= 3){
		setInterval(function (){
			$(".screen").append("<p>"+ wordBank[index++ % wordBank.length] + "</p>");
			wordBank.splice(index , 1);
			console.log(wordBank.length);
			wordCount++;
		},lvl1);
		} else if (wordCount >= 7){
			setInterval(function (){
			$(".screen").append("<p>"+ wordBank[index++ % wordBank.length] + "</p>");
			wordBank.splice(index , 1);
			console.log(wordBank.length);
			wordCount++;
		},lvl2);

		} else if (wordCount >=10){
			setInterval(function (){
			$(".screen").append("<p>"+ wordBank[index++ % wordBank.length] + "</p>");
			wordBank.splice(index , 1);
			console.log(wordBank.length);
			wordCount++;
		},lvl3);

		} else if (wordCount = 20){
			setInterval(function (){
			$(".screen").append("<p>"+ wordBank[index++ % wordBank.length] + "</p>");
			wordBank.splice(index , 1);
			console.log(wordBank.length);
			wordCount++;
		},lvl4);
		} else if (wordCount = 25){
			wordCount = 0;
			$("#screen").val('');
		};

};

$(document).ready(function(){
	// Set enter to 'click' on keyup
	$("#words").keyup(function(event){
    	if(event.keyCode == 13){
        	$("#submit").click();
    	}
	});
	//Starts the game on click
	$("#start").on("click", function(){
		startGame();
		console.log("clicked");
	});

	$("#submit").on("click", function(){
		var theWord = $("p:nth-child(1)").text();
		if ($("#words").val() === theWord){
			$("p:nth-child(1)").remove();
		};
		$("#words").val('');
	});
	

})