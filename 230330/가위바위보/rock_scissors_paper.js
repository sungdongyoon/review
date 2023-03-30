let buttons = document.querySelectorAll("button");
let computerChoice = document.querySelector(".computer-choice");
let userChoice = document.querySelector(".your-choice");
let winner = document.querySelector(".result");
let result = ["가위", "바위", "보"];

const show = (user, computer, result) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = result;
};

const game = (user, computer) => {
  if (user == computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리";
        break;
    }
  }
  show(user, computer, message);
};

const play = (event) => {
  let user = event.target.innerText;
  let randomIndex = Math.floor(Math.random() * 3);
  let computer = result[randomIndex];
  game(user, computer);
  console.log(user, computer);
};

buttons.forEach((buttons) => {
  buttons.addEventListener("click", play);
});
