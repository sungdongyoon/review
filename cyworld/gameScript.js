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