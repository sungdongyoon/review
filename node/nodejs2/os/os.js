const os = require('os');

console.log("운영체제 정보----------");
console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.totalmem());