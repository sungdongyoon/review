const flower = document.querySelector(".flower");
const content = document.querySelector(".content");
const closeSpring = document.querySelector(".close_spring");

const springPage = document.querySelector(".modal_spring");

flower.addEventListener("click", () => {
  content.style.display = "none";
  springPage.style.display = "block";
});

closeSpring.addEventListener("click", () => {
  springPage.style.display = "none";
  content.style.display = "block";
});

/* BX Slider */
$(document).ready(function () {
  $(".slider").bxSlider({
    mode: "horizontal",
    speed: 300,
    auto: true,
    pause: 3000,
    movesSlides: 2,
    autoHover: false,
    autoControls: false,
    pager: true,
  });
});

/* Drag */
$(function () {
  $("#draggable").draggable();
});
$(function () {
  $("#draggable2").draggable();
});
