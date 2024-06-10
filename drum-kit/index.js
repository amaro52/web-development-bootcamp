// "listens" for a button to be clicked, & calls handleClick when a button is clicked
// document.querySelector.addEventListener("click", handleClick);

/**
 * Detecting button press
 */
// add event listener to each drum button
const NUM_OF_DRUMS = document.querySelectorAll(".drum").length;
for (let i = 0; i < NUM_OF_DRUMS; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  switch (this.innerHTML) {
    case "w":
      drumNoise = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      drumNoise = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      drumNoise = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      drumNoise = new Audio("./sounds/tom-4.mp3");
      break;
    case "j":
      drumNoise = new Audio("./sounds/snare.mp3");
      break;
    case "k":
      drumNoise = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      drumNoise = new Audio("./sounds/kick-bass.mp3");
      break;

    default:
      console.log("no drum for this button :/");
      break;
  }
}

/**
 * Detecting keyboard press
 */

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  let drumNoise;
  switch (key) {
    case "w":
      drumNoise = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      drumNoise = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      drumNoise = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      drumNoise = new Audio("./sounds/tom-4.mp3");
      break;
    case "j":
      drumNoise = new Audio("./sounds/snare.mp3");
      break;
    case "k":
      drumNoise = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      drumNoise = new Audio("./sounds/kick-bass.mp3");
      break;

    default:
      console.log("no drum for this button :/");
      break;
  }

  drumNoise.play(); // ik it will not play if valid button is not clicked
}
