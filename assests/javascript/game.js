// variables for game matches ids
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
// variables for text of game
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessedLettersText = document.getElementById("guessedLetters");
// possible computer guesses 
var computerGuess = "abcdefghijklmnopqrstuvwxyz";
var compGuess = ""
var compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
console.log(compGuess);
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (userGuess >= 'a' && userGuess <= 'z') {
        guessedLetters.push(userGuess);
        if (guessesLeft > 1) {
            guessedLettersText.textContent = ("Your guesses so far: " + guessedLetters);
            guessesLeft--;
            guessesLeftText.textContent = ("Guesses Left: " + guessesLeft);
            if (userGuess === compGuess) {
                wins++;
                winsText.textContent = ("Wins: " + wins);
                guessedLetters = [];
                guessesLeft = 9;
                guessesLeftText.textContent = ("Guesses Left: " + guessesLeft);
                guessedLettersText.textContent = ("Your guesses so far: ");
                compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
                console.log(compGuess);
            }
        } else {
            losses++;
            lossesText.textContent = ("Losses: " + losses);
            guessesLeft = 9;
            guessedLettersText.textContent = ("Your guesses so far: ");
            compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
            guessesLeftText.textContent = ("Guesses Left: " + guessesLeft);
            guessedLetters = [];
            console.log(compGuess);
        }
    } else {
        alert("That is not a letter!");
    }
}
