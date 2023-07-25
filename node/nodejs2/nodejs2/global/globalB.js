const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    }
  }
}

console.time("전체시간");
console.log("평범한 로그입니다");
console.log(string, number, boolean);
console.error("에러 메세지는 console.error");
console.table([{name: "홍길동", birth: 1998}, {name: "영심이", birth: 2000}]);
console.dir(obj, {color: false, depth: 2});
console.dir(obj, {color: true, depth: 1});

console.time("시간 측정");
for(let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
}
function a() {
  b();
}
a();

console.timeEnd("전체 시간");
