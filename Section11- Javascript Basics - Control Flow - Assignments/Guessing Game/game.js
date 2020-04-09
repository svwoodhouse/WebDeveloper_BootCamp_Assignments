// Create secret number
var secretNumber = 4;

//Ask user for guess
var guess = Number(prompt("Guess a number"));

//Check guess
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}

else if(guess > secretNumber){
    alert("Too high. Guess again");
}

else {
    alert("Too low. Guess again");
}