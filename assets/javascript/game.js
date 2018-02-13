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

}
// Main logic process
start();