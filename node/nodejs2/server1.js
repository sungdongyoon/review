const http = require("http");
const {error} = require("console");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
    res.write("<h1>hello Node</h1>");
    res.write("<p>hello Server</p>");
    res.end("<p>hello KingJS</p>");
  }).listen(8080)
server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기중입니다.");
});
server.on("error", () => {
  console.error(error);
})

const server1 = http
  .createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
    res.write("<h1>hello Node</h1>");
    res.write("<p>hello Server</p>");
    res.end("<p>hello KingJS</p>");
  }).listen(8081)
server1.on("listening", () => {
  console.log("8081번 포트에서 서버 대기중입니다.");
});
server1.on("error", () => {
  console.error(error);
})