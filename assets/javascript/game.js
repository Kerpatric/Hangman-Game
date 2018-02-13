// Variables and Arrays


var wordList = ["", "", "", "", "",]; 
var computerPick = ""; 
var wordsLetters = [];
var numBlanks = 0;
var blanksAndSuccess = [];
var wrongLetters = [];

//Game Trackers
var winCount = 0;
var lossCount = 0;
var guessesRemain = 9;

// Functions to be called upon when needed

//Begins game
function start() {
    computerPick = wordList[Math.floor(Math.random() * wordList.length)];
    wordsLetters = computerPick.split("");
    numBlanks = wordsLetters.lenght;

    //Resets
    guessesRemain = 9;
    wrongLetters = [];
    blanksAndSuccess = [];

    //Adds blanks and successes with the right number of blanks.
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccess.push("_");
    }

    // Change HTML to reflect the conditions of the round
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccess.join("  ");
    document.getElementById("guessLeft").innerHTML = guessesRemain;
    document.getElementById("win").innerHTML = winCount;
    document.getElementById("losses").innerHTML = lossCount;

}
//Compares letter guessed to letters in pick
function compareLetters(letter) {
    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++){
        if(computerPick[i] == letter) {
            isLetterInWord = true;
        }
    }
}

// Main Process

// Initiates code for the first time
start();

// registers the users key presses
document.onkeyup = function(event) {
    var letterPicked = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterPicked);

}