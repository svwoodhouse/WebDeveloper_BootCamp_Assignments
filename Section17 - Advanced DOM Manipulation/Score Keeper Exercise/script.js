var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.querySelector("#p2Display");
var userInput = document.querySelector("input");
var paragraph = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

resetButton.addEventListener("click",function(){
    reset();
});

player1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
        }
        score();
    }
});

player2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
        score();
    }
});

userInput.addEventListener("change", function() {
        winningScore = Number(this.value); 
        winningScoreDisplay.textContent = winningScore;  
        reset();
});

function score() {
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score
};

function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    score();
};