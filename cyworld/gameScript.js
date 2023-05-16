/* 끝말잇기 */
const startWord = () => {
  let myword = document.querySelector("#myword").value;
  let word = document.querySelector("#word").innerText;

  let lastword = word[word.length - 1];
  let firstword = myword[0];

  if(lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "오답입니다";
    document.querySelector("#myword").value = "";
  }
}

/* 로또 */
const lottoBtn = document.querySelector(".wrapper_lotto_btn");
const resultNum = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
}


lottoBtn.addEventListener("click", () => {
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for(let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber + 1));
  }
  resultNum.innerText = `${[...myNumber]}`
})
