
// add an event listener to add the drums available.
// start with var the query selector with drums and attach length
// do a for loop and all in the var so it will keep looping the total length
// add in query selector to select drum index and add individual event listeners

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!")
  });
}

