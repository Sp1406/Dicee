// Getting the image elements
var player1Dice = document.querySelector(".img1");
var player2Dice = document.querySelector(".img2");

// Getting the heading
var heading = document.querySelector("h1");

function game() {
  // Getting the dice values
  var randomNumber1 = Math.random() * 6;
  randomNumber1 = Math.floor(randomNumber1) + 1;

  var randomNumber2 = Math.random() * 6;
  randomNumber2 = Math.floor(randomNumber2) + 1;

  // Player 1 If Statement
  if (randomNumber1 === 1) {
    player1Dice.setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    player1Dice.setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    player1Dice.setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    player1Dice.setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    player1Dice.setAttribute("src", "images/dice5.png");
  } else {
    player1Dice.setAttribute("src", "images/dice6.png");
  }

  // Player 2 If Statemenet
  if (randomNumber2 === 1) {
    player2Dice.setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2) {
    player2Dice.setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    player2Dice.setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 4) {
    player2Dice.setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    player2Dice.setAttribute("src", "images/dice5.png");
  } else {
    player2Dice.setAttribute("src", "images/dice6.png");
  }

  // Results If Statement
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins! 🚩";
  } else {
    heading.innerHTML = "Draw!";
  }
}

// Button
var btn = document.querySelector(".playAgain");
btn.addEventListener("click", game);
