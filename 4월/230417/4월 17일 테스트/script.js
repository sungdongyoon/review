const body = document.querySelector("body");
const button = document.querySelector("#button");
const option = document.querySelector("#major");
const userName = document.querySelector("#name");

button.onclick = () => {
  body.classList.toggle("toggle_btn");
  button.value == "NIGHT" ?  button.value = "DAY" : button.value = "NIGHT";
};

function selectOption() {
  let optionText = option.options[option.selectedIndex].innerText;
  alert(`${userName.value}님, 선택된 학과는 ${optionText}입니다`);
};

option.onchange = selectOption;