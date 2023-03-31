document.write("<h3>문제1</h3>");
let number = prompt("번호를 입력하세요");
let result = number.substring(0, 7) + "****";

document.write(result, "<br/><br/>");

document.write("<h3>문제2</h3>");
let a = "btn_out.jpg";
let b = a.replace("out", "over");

document.write(a + " => ");
document.write(b, "<br/><br/>");

document.write("<h3>문제3</h3>");
let menu = ["햄버거", "초밥", "국밥", "라면", "치킨"];
let lunch = Math.floor(Math.random() * menu.length);

document.write(menu[lunch]);
