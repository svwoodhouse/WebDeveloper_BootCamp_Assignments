// Gets the HTML Spans containing the numbers of the RGB colors from 0 - 255
var rColorSpan = document.getElementById("rSpan");
var gColorSpan = document.getElementById("gSpan");
var bColorSpan = document.getElementById("bSpan");

// Creates a random number from 0 - 255
var rColorSelection = Math.floor(Math.random() * 255);
var gColorSelection = Math.floor(Math.random() * 255);
var bColorSelection = Math.floor(Math.random() * 255);

// changes the text to the random RGB values and displays it in the banner
rColorSpan.textContent = rColorSelection;
gColorSpan.textContent = gColorSelection;
bColorSpan.textContent = bColorSelection;

//get easy and hard button
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");

//add listeners to easy and hard buttons
easyButtonFunctionality();
hardButtonFuntionality();

//Function for the easy button containing the functions/actions for this button
function easyButtonFunctionality()
{
    // Listener for mousehover
    easyButton.addEventListener("mouseover", function() {
        this.classList.add("selectedButton");
    });

    //listener for standard mode
    easyButton.addEventListener("mouseout", function() {
        this.classList.remove("selectedButton");
    });

    //listener for onclick
    easyButton.addEventListener();
};

function hardButtonFuntionality(){
    // Listener for mousehover
    hardButton.addEventListener("mouseover", function() {
        this.classList.add("selectedButton");
    });

    //listener for standard mode
    hardButton.addEventListener("mouseout", function() {
        this.classList.remove("selectedButton");
    });

    //listener for onclick
    hardButton.addEventListener();
};

