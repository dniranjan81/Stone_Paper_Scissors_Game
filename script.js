let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const message = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const CompChoice = () => {
  //rock paper and scissors
  let options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const drawGame = () => {
  console.log("game was Draw");
  message.innerText = "Game is Draw! Play Again";
  message.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, genChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win!");
    message.innerText = `You win , Your ${userChoice} beats ${genChoice}`;
    message.style.backgroundColor = "Green";
    userScore.innerText = `${userScore}`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("Computer wins!");
    message.innerText = `Your ${userChoice} beats ${genChoice}`;
    message.style.backgroundColor = "Red";
  }
};
const playGame = (userChoice) => {
  console.log("userChoice=", userChoice);
  const genChoice = CompChoice();
  console.log("genChoice=", genChoice);
  if (userChoice === genChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors and paper
      userWin = genChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock and scissors
      userWin = genChoice === "scissors" ? false : true;
    } else {
      //scissors and paper
      userWin = genChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, genChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
