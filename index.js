// add an event listener to add the drums available.
// start with var the query selector with drums and attach length
// do a for loop and all in the var so it will keep looping the total length
// add in query selector to select drum index and add individual event listeners

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key)
});

// function is called by both event listener above. 
// switch statement to play audio when above event listener condition are met
function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('public/sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('/public/sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('public/sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('public/sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('public/sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('public/sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('public/sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(innerHTML)
      break;
  }
}

// function is called by both event listener above. 
// function to animate buttons when users press key or tap the button
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)

  activeButton.classList.add("pressed")

  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);
}