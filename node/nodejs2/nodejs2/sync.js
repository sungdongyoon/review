const fs = require('fs');

console.log('시작');

// readFileSync() : 동기처리방식으로 데이터 가져온다
let data = fs.readFileSync('./readme2.txt');
console.log("1번", data.toString());
data = fs.readFileSync('./readme2.txt');
console.log("2번", data.toString());
data = fs.readFileSync('./readme2.txt');
console.log("3번", data.toString());

console.log('끝');