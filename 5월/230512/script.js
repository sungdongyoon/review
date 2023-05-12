let isStarted = false;
const numButton = document.querySelector(".num_button");
const result = document.querySelector(".result");


// button.addEventListener("click", randomNum = () => {
//   let random = Math.floor(Math.random() * 1000000);
//   let resultNum = String(random).padStart(6, "0");

//   result.style.color = `#${resultNum}`;
//   result.innerText = resultNum;

//   let time = 180;

//   setInterval(function() {
//     if(time >= 0) {
//       let min = Math.floor(time / 60);
//       let sec = String(time%60).padStart(2, "0");
//       document.querySelector(".time").innerText = `${min}:${sec}`;
//       time = time - 1;
//     }
//   }, 1000)
// });

numButton.addEventListener("click", randomNum = () => {
  if(isStarted === false) {
  // 카운트 작동
  isStarted = true;
  let random = Math.floor(Math.random() * 1000000);
  let resultNum = String(random).padStart(6, "0");

  result.style.color = `#${resultNum}`;
  result.innerText = resultNum;

  let time = 180;
  document.querySelector("#complete_button").disabled = false;
  function timer() {
    if(time >= 0) {
      let min = Math.floor(time / 60);
      let sec = String(time%60).padStart(2, "0");
      document.querySelector(".time").innerText = `${min}:${sec}`;
      time = time - 1;
    } else {
      document.querySelector("#complete_button").disabled = true;
      isStarted = false;
    }
  }

  setInterval(timer, 1000);
  } else {
  // 카운트 작동
  }
});


const check = function() {
  let phone1 = document.querySelector("#phone1").value;
  let phone2 = document.querySelector("#phone2").value;
  let phone3 = document.querySelector("#phone3").value;

  if(phone1 && phone2 && phone3) {
    numButton.disabled = false;
  } else {
    numButton.disabled = true;
  }
}
check();

const changeFocus1 = () => {
  let phone1 = document.querySelector("#phone1");
  if(phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
}
const changeFocus2 = () => {
  let phone2 = document.querySelector("#phone2");
  if(phone2.length === 4) {
    document.querySelector("#phone3").focuse();
  }
}
const changeFocus3 = () => {
  let phone1 = document.querySelector("#phone1").value;
  let phone2 = document.querySelector("#phone2").value;
  let phone3 = document.querySelector("#phone3").value;

  if(phone1 && phone2 && phone3) {
    numButton.disabled = false;
  } else {
    numButton.disabled = true;
  }
}


// const check = function() {
//   let email = document.querySelector("#email").value;
//   let pw1 = document.querySelector("#pw1").value;
//   let pw2 = document.querySelector("#pw2").value;

//   if(email !== "" && pw1 !== "" && pw2 !== "") {
//     document.querySelector("#submit").disabled = false;
//   } else {
//     document.querySelector("#submit").disabled = true;
//   }
// }

// check();