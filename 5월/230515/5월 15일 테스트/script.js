
const numButton = document.querySelector(".num_button");
const result = document.querySelector(".result");


function getToken() {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector(".result").innerText = token;
  
  document.querySelector(".num_button").style = "background-color: #fff;";
  document.querySelector(".num_button").setAttribute("disabled", true);
  document.querySelector(".complete_button").style = "background-color: #0068ff; color: #fff;";
  document.querySelector(".complete_button").removeAttribute("disabled");

  getTokenTimer();
}

let interval;
function getTokenTimer() {
  let time = 180;

  interval = setInterval(() => {
    if(time >= 0) {
      const minutes = Math.floor(time / 60);
      const seconds = String(time % 60).padStart(2, "0");
  
      document.querySelector(".time").innerText = `${minutes}:${seconds}`;
      time -= 1;
    } else {
      document.querySelector(".time").innerText = "000000";
      document.querySelector(".num_button").style = "";
      document.querySelector(".num_button").setAttribute("disabled", true);
      document.querySelector(".time").innerText = "3:00";
      document.querySelector(".complete_button").style = "";
      document.querySelector(".complete_button").setAttribute("disabled", true);

      clearInterval(interval);
    }
  }, 1000);  
}

function getTokenTimerConfirm() {
  clearInterval(interval);
  document.querySelector(".complete_button").style = "background-color: #fff;";
  document.querySelector(".complete_button").setAttribute("disabled", true);
  document.querySelector(".complete_button").innerText = "인증완료";
  alert("인증이 완료되었습니다");

  document.querySelector(".join_btn").style = "background-color: #fff; color: #0068ff; border: 1px solid #0068ff;";
  document.querySelector(".join_btn").removeAttribute("disabled");
}

function signup() {
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const pw1 = document.querySelector("#pw1").value;
  const pw2 = document.querySelector("#pw2").value;
  const location = document.querySelector("#location").value;
  const genderWoman = document.querySelector("#gender_w").checked;
  const genderMan = document.querySelector("#gender_m").checked;

  let isValid = true;
  if(email.includes("@") === false) {
    document.querySelector("#error_email").innerText = "이메일이 올바르지 않습니다";
    isValid = false;
  } else {
    document.querySelector("#error_email").innerText = "";
  }
  if(name === "") {
    document.querySelector("#error_name").innerText = "이름이 올바르지 않습니다";
    isValid = false;
  } else {
    document.querySelector("#error_name").innerText = "";
  }
  if(pw1 === "") {
    document.querySelector("#error_pw1").innerText = "비밀번호를 입력해주세요";
    isValid = false;
  } else {
    document.querySelector("#error_pw1").innerText = "";
  }
  if(pw2 === "") {
    document.querySelector("#error_pw1").innerText = "비밀번호가 일치하지 않습니다";
    document.querySelector("#error_pw2").innerText = "비밀번호가 일치하지 않습니다";
    isValid = false;
  } else {
    document.querySelector("#error_pw2").innerText = "";
  }
  if(location !== "서울" && location !== "경기" && location !== "인천") {
    document.querySelector("#error_location").innerText = "지역을 선택해주세요";
  } else {
    document.querySelector("#error_location").innerText = "";
  }
  if(genderWoman === false && genderMan === false) {
    document.querySelector("#error_gender").innerText = "성별을 선택해주세요";
    isValid = false;
  } else {
    document.querySelector("#error_gender").innerText = "";
  }
  if(isValid === true) {
    alert("회원가입을 축하합니다");
  }
}


/* 휴대폰 번호 자동 포커스 변경 */
const changeFocus1 = () => {
  let phone1 = document.querySelector(".phone1").value;
  if(phone1.length === 3) {
    document.querySelector(".phone2").focus();
  }
}
const changeFocus2 = () => {
  let phone2 = document.querySelector(".phone2").value;
  if(phone2.length === 4) {
    document.querySelector(".phone3").focus();
  }
}
const changeFocus3 = () => {
  let phone1 = document.querySelector(".phone1").value;
  let phone2 = document.querySelector(".phone2").value;
  let phone3 = document.querySelector(".phone3").value;

  if(phone1 && phone2 && phone3) {
    numButton.disabled = false;
  } else {
    numButton.disabled = true;
  }
  if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    numButton.style = "background-color: #fff; color: #0068ff";
    document.querySelector(".num_button").removeAttribute("disabled");
  }
}
changeFocus1();
changeFocus2();
changeFocus3();

