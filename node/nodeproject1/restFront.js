// 클라이언트로부터 데이터를 받아서 저장 및 출력하는 역할


async function getUser() {
  try {
    const res = await axios.get('/users');
    console.log(res);
    const users = res.data;
    const list = document.querySelector("#list");
    list.innerHTML = "";
    Object.keys(users).map((key) => {
      const userDiv = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = users[key];
      const edit = document.createElement("button");
      edit.textContent = "수정";
      edit.addEventListener("click", async () => {
        const name = prompt("바꿀 이름을 입력하세요");
        if(!name) {
          return alert("이름을 반드시 입력해야 합니다");
        }
        try {
          await axios.put("/user/" + key, {name});
          getUser();
        } catch(err) {
          console.error(err);
        }
      });
      const remove = document.createElement("button");
      remove.textContent = "삭제";
      remove.addEventListener("click", async () => {
        try {
          await axios.delete("/user/" + key);
          getUser();
        } catch(err) {
          console.error(err)
        }
      })
      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);
      console.log(res.data);
    });
  } catch(err) {
    console.error(err);
  }
}

window.onload = getUser(); // 화면 로딩 시 자동으로 getUser 함수 호출

document.querySelector("#form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.username.value;
  if(!name) {
    return alert("이름을 입력하세요");
  }
  try {
    await axios.post("/user", {name});
    getUser();
  } catch(err) {
    console.error(err);
  }
  e.target.username.value = "";
})