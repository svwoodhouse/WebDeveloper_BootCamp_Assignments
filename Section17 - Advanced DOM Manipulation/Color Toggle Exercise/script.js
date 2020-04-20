var button = document.querySelector("button");
var body  = document.querySelector("body");
var on = true;
//Using if statement
//button.addEventListener("click", function(){
//    if(on){
//        body.style.backgroundColor = "purple";
//        on = false;
//    }
//    else{
//        body.style.backgroundColor = "white";
//        on = true;
//    }
//});

//using classlist.toggle
button.addEventListener("click", function(){
    body.classList.toggle("purpleBackground");
});
