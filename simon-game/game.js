const BUTTON_COLORS = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let level = 0;
let gameOver = false;

/**
 * Once a key is pressed, start game
 */
$("body").keydown(function () {
  if (level == 0 || gameOver) {
    // reset game
    gameOver = false;
    level = 0;

    // reset patterns
    gamePattern = [];
    userPattern = [];

    nextSequence(); // go to first sequence
  }
});

/**
 * Add the next color in the sequence
 */
function nextSequence() {
  level++; // increment level
  $("#level-title").text("Level " + level); // change title

  userPattern = []; // reset user's pattern

  let randomNumber = Math.floor(Math.random() * 4); // random number 0 - 3
  let randomColor = BUTTON_COLORS[randomNumber]; // get a random button
  gamePattern.push(randomColor); // add random color to the sequence

  // add effect to color
  $("#" + randomColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  // play sound for color
  playSound(randomColor);
}

/**
 * Handle the event in which a button is clicked
 */
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");

  // animation and sound
  animatePress(userChosenColor);
  playSound(userChosenColor);

  userPattern.push(userChosenColor); // add color to user's list

  checkAnswer(userPattern.length - 1); // check user's answers
});

/**
 * Function to check to user's answers
 * @param {*} currentLevel
 */
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    endGame();
    //
    // $("body").addClass("game-over");
    // $("#level-title").text("Game Over, Press Any Key to Restart");

    // setTimeout(function () {
    //   $("body").removeClass("game-over");
    // }, 200);

    // startOver();
  }
}

/**
 *  Play the sound of the color that was clicked
 *  @param {string} color is to identify which color sound should be played
 */
function playSound(color) {
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

/**
 * function to animate when a user clicks a color
 * @param {string} currentColor is the color that the user has clicked
 */
function animatePress(color) {
  $("#" + color).addClass("pressed");

  // turn color back to original
  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);
}

/**
 * sequence to end the game
 */
function endGame() {
  // game ending text and colors
  $("#level-title").text("Game Over, Press Any Key to Restart"); // change title
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 250);

  gameOver = true;
}
