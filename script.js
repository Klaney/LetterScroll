var wordBank = ["smoke","bank","dinosaur","delicious","crackbaby","winner","loser","football","seachickens",
"baseball","elmo","anything","scroll","amelia","jones","thermos","hike","yosemite","freecell","keyboard",
"enter","exit","carpathia","teutonic","prussia","duchy","castile","habsburg","britain","washington",
"samuel","clemens","enterprise","picard","captain","millenium","commonwealth","novgorod","muscovy","tokugawa",
"samnite","epirote"];
var lvl1 = 1500;
var lvl2 = 1200;
var lvl3 = 900;
var lvl4 = 500;
var index = 0;

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
		setInterval(function (){
			$(".screen").append("<p>"+ wordBank[index++ % wordBank.length] + "</p>");
			wordBank.splice(index , 1);
			console.log(wordBank.length);
		},1500);

};

$(document).ready(function(){
	$("#words").keyup(function(event){
    	if(event.keyCode == 13){
        	$("#submit").click();
    	}
	});

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