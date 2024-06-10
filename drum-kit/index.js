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
  buttonAnimation(this.innerHTML);
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

  drumNoise.play();
}

/**
 * Detecting keyboard press
 */
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      buttonAnimation(key);
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      buttonAnimation(key);
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      buttonAnimation(key);
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      buttonAnimation(key);
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      buttonAnimation(key);
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      buttonAnimation(key);
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      buttonAnimation(key);
      break;

    default:
      console.log("no drum for this button :/");
      break;
  }
}

// button animation
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // give it pressed effect

  // remove pressed effect
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
