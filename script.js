 var wordBank = ["smoke","bank","dinosaur","delicious","crackbaby","winner","loser","football","seachickens",
"baseball","elmo","anything","scroll","amelia","jones","thermos","hike","yosemite","freecell","keyboard",
"enter","exit","carpathia","teutonic","prussia","duchy","castile","habsburg","britain","washington",
"samuel","clemens","enterprise","picard","captain","millenium","commonwealth","novgorod","muscovy","tokugawa",
"samnite","epirote"];

//var wordBank = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"];
var playerTime = 2000;
var index = 0;
var wordCount = 0;
var gameRunning = false;
var theInterval;
var gameCheckInterval;
var gameTurn = 0;
var player1 = false;
var player2 = false;

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

var checkEnd = function(){
	// while (gameRunning){
		var currentWord = $("p").first();
		var wordPosition = currentWord.position();
		// console.log(wordPosition);
		// if (wordPosition.left >= 100){
		// 	endGame();
		// };
	// };
}

var endGame = function(){
	clearInterval(gameCheckInterval);
	clearInterval(theInterval);
		$(".screen").empty();
		gameRunning = false;
		wordCount = 0;
		gameTurn++;
		alert("You lost");
}

var startGame = function(){
	gameRunning = true;
	continueGame();
	theInterval = setInterval(function (){
		$(".screen").append("<p>"+ wordBank[index++ % wordBank.length] + "</p>");
		wordBank.splice(index , 1);
		console.log(wordBank.length);
		console.log(playerTime);
		$(".screen p").animate({
			left: '95%'}, 3000, function() {

				endGame();
		});
	},playerTime);
	// setTimeout(checkEnd,playerTime);
	gameCheckInterval = setInterval(checkEnd, 100);
};

var continueGame = function(){
	console.log(wordCount);
	//shuffle the bank 
	shuffle(wordBank);
	//put a new p element with a word into the box
	if (gameRunning === true){
		if (wordCount <= 3){
			playerTime = 2000;
		} else if (wordCount <= 7){
			playerTime = 1700;
		} else if (wordCount <= 10){
			playerTime = 1400;
		} else if (wordCount <= 13){
			playerTime = 1000;
		} else if (wordCount >= 16){
			endGame();
			gameTurn++;
		};
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
	$("#start").on("click", function(event){
		event.preventDefault();
		startGame();
		$("#words").focus();
		/* stuff to do after animation is complete */
		console.log("clicked");
	});
	//On submission of correct word, remove the current word.
	$("#submit").on("click", function(){
		if (gameRunning === true){
		 var theWord = $("p:nth-child(1)").text();
		if ($("#words").val() === theWord){
			$("p:nth-child(1)").stop(true, false);
			$("p:nth-child(1)").remove();
			wordCount++;
			console.log(wordCount);
		};
		$("#words").val('');
		continueGame();
		};
	});
	$(".screen").on("p", function(){
	})
})