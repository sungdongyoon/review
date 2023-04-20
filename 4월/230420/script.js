function Cylinder(cylinderDiameter, cylinderHeight) {
  this.diameter = cylinderDiameter;
  this.height = cylinderHeight;

  this.volume() = function() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(1);
  };
};

// class Cylinder {
//   constructor(cylinderDiameter, cylinderHeight) {
//     this.diameter = cylinderDiameter;
//     this.height = cylinderHeight;
//   }
//   volume() {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(1);
//   }
// }

const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", function(e) {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;
  
  if(diameter == "" || height == "") {
    result.innerText = `지름과 높이값을 입력하세요`;
  } else {
    let cylinder = new Cylinder(diameter, height);
    result.innerText = `원기둥의 부피는 ${cylinder.volume()} 입니다`;
  }
});