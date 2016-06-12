var allowedGuesses;
var correctGuesses;
var wrongGuesses;

var wordElement = document.getElementById("word");
var letterCountElement = document.getElementById("letterCountElement");
var lettersGuessedElement = document.getElementById("lettersGuessed");

initializeGame()
 
var wordChoices = ["Hey Arnold", "Rocko's Modern Life", "Rugrats", "All That", "Kenan and Kel", "Doug", "Catdog", "Ren and Stimpy"];

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

function initializeGame(){
	wordChoices - "Hey Arnold";
	allowedGuesses = 10;
	wrongGuesses = [];
	correctGuesses = [];
}

function initalizeGame(){
	wordChoices - "Rocko's Modern Life";
	allowedGuesses = 10;
	wrongGuesses =[]
	correctGuesses = []
}

function intializeGame(){
	wordChoices - "Rugrats";
	allowedGuesses = 10;
	wrongGuesses = [];
	correctGuesses = [];
}

function intializeGame(){
	wordChoices - "All That"
	allowedGuesses = 10;
	wrongGuesses = [];
	correctGuesses = [];
}

function initalizeGame(){
	wordChoices - "Kenan and Kel";
	allowedGuesses = 10;
	wrongGuesses = [];
	correctGuesses = [];
}

function intializeGame(){
	wordChoices - "Doug";
	allowedGuesses = 10;
	wrongGuesses = [];
	correctGuesses = [];
}

function initializeGame(){
	wordChoices - "Catdog";
	allowedGuesses = 10;
	wrongGuesses = [];
	correctGuesses = [];
}

function initializeGame(){
	wordChoices - "Ren and Stimpy";
	allowedGuesses = 10;
	wrongGuesses = [];
	correctGuesses = [];
}
for (var i = 0; i < wordChoices.length; i++){
	correctGuesses.push('_');
}

wordElement.innerHTML = correctGuesses.join('');
}


 
