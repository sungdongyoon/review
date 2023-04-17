//마우스 오른쪽 클릭 금지 안내 & 기본값 디폴트
window.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  this.alert("오른쪽 버튼을 사용할 수 없습니다");
})

const container = document.querySelector("#container");
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg", "pic-6.jpg"];

container.style.backgroundImage = `url(/img/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach((e) => {
  e.addEventListener("click", (e) => {
    if(e.target.id === "left") {
      i--;
      if(i < 0) {
        i = pics.length - 1;
      }
    } else if(e.target.id === "right") {
      i++;
      if(i >= pics.length) {
        i = 0;
      } 
    }
    container.style.backgroundImage = `url(/img/${pics[i]})`;
  })
})