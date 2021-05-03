for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})
//.key is propert of keydown which tells us about the key which has been pressed

//document will help in searching all page addeventlistner is just like ear put
//on to hear and keydown or click are magical things which check for key stocks or
//mouse clicks function(event) is callback function which wil activate when key is pressed
//and do its mgic for what its designed for............

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;


    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log();

  }
}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed");},0.1)
}
