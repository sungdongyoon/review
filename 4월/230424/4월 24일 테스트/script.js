const year = document.querySelector("#year");
const month = document.querySelector("#month");
const date = document.querySelector("#date");
const button = document.querySelector("button");

const result = document.querySelector("#result");
const resultNow = document.querySelector("#result-now");
const resultDate = document.querySelector("#result-date");
const resultHour = document.querySelector("#result-hour");

const today = new Date();

resultNow.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`

button.addEventListener("click", (e) => {
  e.preventDefault();
  let lastDay = new Date(year.value, month.value -1, date.value);

  let diff = lastDay.getTime() - today.getTime();
  let diffDate = Math.floor(diff / (24 * 60 * 60 * 1000));
  let diffHour = Math.floor(diff / (60 * 60 * 1000));

  resultDate.innerText = `날짜로는 ${diffDate}일 남았고`;
  resultHour.innerText = `시간으로는 ${diffHour}시간 남았습니다`;

  year.value = "";
  month.value = "";
  date.value = "";
})

