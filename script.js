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
const frequentChoices = document.getElementById("freqchoice");

let playerScore = 0;
let computerScore = 0;

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
  });
});

function determineWinner(player, computer) {
  if (player === computer) "It's a tie!";

  if (
    (player === "✊" && computer === "✌") ||
    (player === "✋" && computer === "✊") ||
    (player === "✌" && computer === "✋")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}
