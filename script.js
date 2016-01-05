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
var gameTurn = 1;
var player1Score = 0;
var player2Score = 0;

var startGame = function(){
	gameRunning = true;
	whoseTurn();
	continueGame();
	//shuffle the bank 
	shuffle(wordBank);
	theInterval = setInterval(function (){
		$(".screen").append("<p>"+ wordBank[index++ % wordBank.length] + "</p>");
		wordBank.splice(index , 1);
		console.log(wordBank.length);
		console.log(playerTime);
		console.log("test");
		$(".screen p").animate({
			left: '95%'}, 3000, function() {
				if(gameRunning){
				endGame();
			};
		});
	},playerTime);
};

var whoseTurn = function(){
	if (gameTurn % 2 === 1){
		alert("Player 1 turn");
	} else {
		alert("Player 2 turn");
	}
}

//The Fisher-Yates shuffle. Found the code here. http://bost.ocks.org/mike/shuffle/
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

var continueGame = function(){
	console.log(wordCount);
	//adjust time to be quicker the higher the score goes
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
		};
	};
};

var endGame = function(){
	clearInterval(theInterval);
	$(".screen").empty();
	$("#words").val('');
	gameRunning = false;
	if (wordCount === 16){
		//determine which player to give score to
		whichPlayerScore();
		swal("You won!", "Keep going!", "success");
		} else {
		whichPlayerScore();
		swal("You lost!", "Just give up on life", "error");
	};
	wordCount = 0;
	gameTurn++;
}

var whichPlayerScore = function(){
	//Give player a player a score		
	if (gameTurn % 2 === 1){
		player1Score = player1Score + wordCount;
		$("#p1score").html(player1Score);
		return player1Score;
	} else if (gameTurn % 2 === 0){
		player2Score = player2Score + wordCount;
		$("#p2score").html(player2Score);
		whoWon();
		return player2Score;
	};	
}

var whoWon = function(){
	//determine who won
	if (player1Score > player2Score){
		$("#whowon").html("Player 1 Wins!");
	} else {
		$("#whowon").html("Player 2 Wins!");
	}
};

$(document).ready(function(){
	$("#title").slideUp(5000);
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
	});
	//On submission of correct word, remove the current word.
	$("#submit").on("click", function(){
		console.log("click")
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
	//Reset the game
	$("#reset").on("click", function(){
		gameTurn = 1;
		player1Score = 0;
		player2Score = 0;
		$("#p1score").html(player1Score);
		$("#p2score").html(player2Score);
	});

	$(function(){
    $(window).resize(function(){
        placeFooter();
    });
    placeFooter();
    // hide it before it's positioned
    $('#footer').css('display','inline');
	});

	function placeFooter() {    
    var windHeight = ($(window).height() - 2);
    var footerHeight = $('#footer').height();
    var offset = parseInt(windHeight) - parseInt(footerHeight);
    $('#footer').css('top',offset);
	}
})