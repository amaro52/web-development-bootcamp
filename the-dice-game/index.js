// dice 1
let randomNum1 = Math.floor(Math.random() * 6) + 1; // generate number 1-6
let randomImageSource = "images/dice" + randomNum1 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); // change dice picture

// dice 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;
randomImageSource = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

// If player 1 wins
if (randomNum1 > randomNum2) {
  // player 1 win
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNum2 > randomNum1) {
  // player 2 win
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  // draw
  document.querySelector("h1").innerHTML = "Draw!";
}
