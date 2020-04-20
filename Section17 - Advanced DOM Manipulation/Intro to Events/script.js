var button = document.querySelector("button");
var button2 = document.querySelectorAll("button")[1];
var paragraph = document.querySelector("p");

var lis = document.querySelectorAll("li");

console.log("hi");
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON"); 
    paragraph.textContent = "SOMEONE CLICKED THE BUTTON!";      
});

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
    });
};

button2.addEventListener("click", changeText);

function changeText() {
    alert("Ive been click on!");
}

