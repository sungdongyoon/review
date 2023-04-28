const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let cat = new Image();
cat.onload = function() {
  ctx.drawImage(cat, 0, 0, canvas.width, canvas.height);
}

cat.src = "/img/cat.jpg";

ctx.beginPath();
ctx.ellipse(180, 150, 100, 140 , 0, 0, Math.PI * 2);
ctx.clip();