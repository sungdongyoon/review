const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function clock() {
  const date = new Date();
  hours.innerText = date.getHours() + "시";
  minutes.innerText = date.getMinutes() + "분";
  seconds.innerText = date.getSeconds() + "초";
}

setInterval(clock, 1000);
