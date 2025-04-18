const choiceBtns = document.querySelectorAll(".choice-btn");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("last-result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

const numberOfRounds = document.getElementById("rounds");
const last5Games = document.getElementById("last5Games");
const numberOfWins = document.getElementById("winStat");
const numberOfTies = document.getElementById("tieStat");
const numberOfLosses = document.getElementById("loseStat");
const frequentChoices = document.getElementById("freqchoice");
const winPercent = document.getElementById("winPercent");
const losePercent = document.getElementById("losePercent");
const tiePercent = document.getElementById("tiePercent");
const timeDisplay = document.getElementById("timer");

let playerScore = 0;
let computerScore = 0;
let round = 0;

choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    playerChoiceDisplay.textContent = playerChoice;

    // Computer random choice
    const choices = ["✊", "✋", "✌"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    computerChoiceDisplay.textContent = computerChoice;

    //Determine winner
    const result = determineWinner(playerChoice, computerChoice);
    resultDisplay.textContent = result;

    //Update Scores
    if (result.includes("You win")) playerScore++;
    if (result.includes("Computer wins")) computerScore++;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    round++;
    numberOfRounds.textContent = round;
    Last_5_Games(result, last5Games);
    Statistics(result, round);
    FreqChoice(playerChoice, round);
    if (round === 1) startTimer();
  });
});

function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";

  if (
    (player === "✊" && computer === "✌") ||
    (player === "✋" && computer === "✊") ||
    (player === "✌" && computer === "✋")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

let counter = 0;

function Last_5_Games(result, last5Games) {
  if (counter == 0) {
    if (result.includes("You win!")) last5Games.textContent = "W";
    if (result.includes("Computer wins!")) last5Games.textContent = "L";
    if (result.includes("It's a tie!")) last5Games.textContent = "T";
    counter++;
  } else {
    if (result.includes("You win!"))
      last5Games.textContent = "W - " + last5Games.textContent;
    if (result.includes("Computer wins!"))
      last5Games.textContent = "L - " + last5Games.textContent;
    if (result.includes("It's a tie!"))
      last5Games.textContent = "T - " + last5Games.textContent;
    if (counter >= 5)
      last5Games.textContent = last5Games.textContent.slice(0, -4);
    else counter++;
  }
  console.log(counter);
}

let wins = 0;
let lose = 0;
let tie = 0;

function Statistics(result, round) {
  if (result.includes("You win!")) {
    numberOfWins.textContent = ++wins;
  }
  if (result.includes("Computer wins!")) {
    numberOfLosses.textContent = ++lose;
  }
  if (result.includes("It's a tie!")) {
    numberOfTies.textContent = ++tie;
  }
  winPercent.textContent = round ? Math.round((wins / round) * 100) : 0;
  losePercent.textContent = round ? Math.round((lose / round) * 100) : 0;
  tiePercent.textContent = round ? Math.round((tie / round) * 100) : 0;
}

let rock = 0;
let paper = 0;
let scissor = 0;

function FreqChoice(player, round) {
  if (player === "✊") ++rock;
  if (player === "✋") ++paper;
  if (player === "✌") ++scissor;
  if (rock > paper && rock > scissor)
    frequentChoices.textContent = `Rock, ${Math.round((rock / round) * 100)}%`;
  else if (paper > scissor)
    frequentChoices.textContent = `Paper, ${Math.round(
      (paper / round) * 100
    )}%`;
  else
    frequentChoices.textContent = `Scissors, ${Math.round(
      (scissor / round) * 100
    )}%`;
}

let timer;
let seconds = 0;
function startTimer() {
  timeDisplay.textContent = seconds;

  // Start a new timer
  timer = setInterval(() => {
    seconds++;
    timeDisplay.textContent = seconds;
  }, 1000);
}

function resetGame() {
  // playerScore =
  //   computerScore =
  //   round =
  //   wins =
  //   lose =
  //   tie =
  //   rock =
  //   paper =
  //   scissor =
  //   counter =
  //   seconds =
  //     0;
  // clearInterval(timer);
  location.reload();

  // Update all DOM elements to 0/defaults
}
