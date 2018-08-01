// Options up for random selection by Computer.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// game vars
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var guesses = [];

// updateScoreBoard called upon on a Win or Loss.


// UpdateGuesses, called upon when userGuess != ComputerGuess
function updateGuesses() {
    guessesLeft--;
    document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
}

function updateLoss() {
    losses++;
    document.getElementById("losses").textContent = "Your Losses so far: " + losses;
}

function updateWins() {
    wins++;
    document.getElementById("wins").textContent = "Your Wins so far: " + wins;
}

function updateScoreBoard() {
    var guessesLeft = 9;
    document.getElementById("guesses").textContent = "Your Guesses: ";
    document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
}

// reset called upon on a Win or Loss.
function reset() {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    updateScoreBoard();
}

//Lets the computer select a random letter from the available choices
document.onkeyup = function (event) {
    //computerGuess randomizer.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //userGuess capture keypress.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //update list of user guesses.
    guesses.push(userGuess);
    document.getElementById("guesses").textContent = "Your Guesses: " + guesses.join(', ');
    //deincrement guesses using our updateGuesses func.
    updateGuesses();
    if (guessesLeft > 0) {
        if (userGuess == computerGuess) {
            updateWins();
            reset();
        }
        if (guessesLeft < 1) {
            updateLoss();
            alert("YOU HAVE LOST A GAME. Incrementing loses by ONE point.")
            reset();
        }
    }
}