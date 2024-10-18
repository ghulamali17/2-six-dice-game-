let player1;
let player2;

let btn1 = document.getElementById("player1");
let btn2 = document.getElementById("player2");
let text = document.getElementById("text");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let result = document.getElementById("result");
let input;

// Function to start the game and take toss input from the user
function startGame() {
  input = prompt("Head or Tail", "Head").toLowerCase();
  if (input === "head") {
    player1 = "head";
    player2 = "tail";
  } else if (input === "tail") {
    player1 = "tail";
    player2 = "head";
  } else {
    alert("Invalid input, please enter 'Head' or 'Tail'");
    return;
  }
  // Enabling the toss button and disabling the start button
  document.getElementById("toss").removeAttribute("disabled");
  document.getElementById("text").innerHTML =
    "Game started! Click Toss to decide who plays first.";
  document.getElementById("start").setAttribute("disabled", "true");
}

// Function for toss
function toss() {
  // Generating a random number 0 or 1 for toss
  let randomNm = Math.floor(Math.random() * 2);
  // If random number is 0, Player 2 wins
  if (randomNm === 0) {
    text.innerHTML = `It's ${player1}! Player 1 Wins the Toss`;
    btn2.setAttribute("disabled", "true");
    btn1.removeAttribute("disabled");
  } else {
    // If random number is 1, Player 2 wins
    text.innerHTML = `It's ${player2}! Player 2 Wins the Toss`;
    btn1.setAttribute("disabled", "true");
    btn2.removeAttribute("disabled");
  }
}

// Function to handle the game logic
function game() {
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;

  // Set dice background images based on their values
  dice1.style.backgroundImage = `url('./images/die-face-${random1}.svg')`;
  dice2.style.backgroundImage = `url('./images/die-face-${random2}.svg')`;

  //   checking the winner
  if (random1 === 6 && random2 === 6) {
    btn1.setAttribute("disabled", "true");
    btn2.setAttribute("disabled", "true");
    if (btn1.hasAttribute("disabled")) {
      result.innerHTML = "Player 2 Win the Game";
    } else {
      result.innerHTML = "Player 1 Win the Game";
    }
  } else {
    // If no player wins
    if (btn1.hasAttribute("disabled")) {
      btn1.removeAttribute("disabled");
      btn2.setAttribute("disabled", "true");
    } else {
      btn2.removeAttribute("disabled");
      btn1.setAttribute("disabled", "true");
    }
  }
}
function reloadPage() {
  location.reload();
}
