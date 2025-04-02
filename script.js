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
let round = 0;

choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    playerChoiceDisplay.textContent = playerChoice;
    console.log(playerChoice);

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
    if (result.includes("You win")) last5Games.textContent = "W";
    if (result.includes("Computer wins")) last5Games.textContent = "L";
    if (result.includes("It's a tie!")) last5Games.textContent = "T";
    counter++;
  } else if (counter == 5) {
    if (result.includes("You win"))
      last5Games.textContent = "W - " + last5Games.textContent;
    if (result.includes("Computer wins"))
      last5Games.textContent = "L - " + last5Games.textContent;
    if (result.includes("It's a tie!"))
      last5Games.textContent = "T - " + last5Games.textContent;
    last5Games.textContent = last5Games.textContent.slice(0, -4);
  } else {
    if (result.includes("You win"))
      last5Games.textContent = "W - " + last5Games.textContent;
    if (result.includes("Computer wins"))
      last5Games.textContent = "L - " + last5Games.textContent;
    if (result.includes("It's a tie!"))
      last5Games.textContent = "T - " + last5Games.textContent;
    if (counter < 5) counter++;
  }
  console.log(counter);
}
