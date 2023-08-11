// const a = false;
// if(a) {
//   require("./var");
// }
// console.log("성공");


// CJS 모듈은 실행문 중간에 외부 모듈 불러오기가 가능하나(*dynamic import), ESM 모듈의 경우, 실행문 중간에 외부 모듈 불러오기 불가능
const a = false;
if(a) {
  const m1 = await import("./func.js");
  console.log(m1);
}