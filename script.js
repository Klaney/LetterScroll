var wordBank = ["smoke","bank","dinosaur","delicious","crackbaby","winner","loser","football","seachickens",
"baseball","elmo","anything","scroll","amelia","jones","thermos","hike","yosemite","freecell","keyboard",
"enter","exit","carpathia","teutonic","prussia","duchy","castile","habsburg","britain","washington",
"samuel","clemens","enterprise","picard","captain","millenium","commonwealth","novgorod","muscovy","tokugawa",
"samnite","epirote"];
var lvl1 = 1500;
var lvl2 = 1200;
var lvl3 = 900;
var lvl4 = 500;

var startGame = function(){
	setInterval(function (){
		$("screen").text(wordBank[1]);
	},1000);

};

$(document).ready("DOMcontentloaded", function(){
	$("start").on("click", function(){
		startGame();
	});

})