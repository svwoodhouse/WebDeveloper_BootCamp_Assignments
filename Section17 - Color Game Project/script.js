// Gets the HTML Spans containing the numbers of the RGB colors from 0 - 255
var rColorSpan = document.getElementById("rSpan");
var gColorSpan = document.getElementById("gSpan");
var bColorSpan = document.getElementById("bSpan");

// Creates a random number from 0 - 255
var rColorSelection = Math.floor(Math.random() * 255);
var gColorSelection = Math.floor(Math.random() * 255);
var bColorSelection = Math.floor(Math.random() * 255);

rColorSpan.textContent = rColorSelection;
gColorSpan.textContent = gColorSelection;
bColorSpan.textContent = bColorSelection;