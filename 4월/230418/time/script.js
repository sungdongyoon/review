// 1. 시간(오전/오후)에 대한 개념정의
// 2. 시간변화에 따라서 출력해줘야하는 이미지가 어떤것인지에 대한 정의 > 시간 변화 정의 -> 이미지 정의
// 3. 이미지 출력할 공간에 대한 정의

const container = document.querySelector("#container");
//시간 정의
const today = new Date();
const hrs = today.getHours();
//이미지 정의
let newImg = document.createElement("img");
//시간에 따른 이미지 정의
newImg.src = (hrs < 12) ? "/img/morning.jpg" : "/img/afternoon.jpg";

container.appendChild(newImg);