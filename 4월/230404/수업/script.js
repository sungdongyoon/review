let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

for (let i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic);
}

function changePic() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic);
}

let isOpen = false;
let view = document.querySelector("#view");
view.addEventListener("click", pageOpen);

function pageOpen() {
  if (isOpen == false) {
    document.querySelector("#detail").style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;
  } else {
    document.querySelector("#detail").style.display = "none";
    view.innerHTML = "상세 설명 보기";
    isOpen = false;
  }
}
