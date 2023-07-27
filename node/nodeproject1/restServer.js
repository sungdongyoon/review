const https = require('https');
const fs = require('fs');
const path = require('path');

const users = {};

https.createServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync("도메인 비밀 키 경로"),
  ca: [
    fs.readFileSync("상위 인증서 경로"), fs.readFileSync("상위 인증서 키"),
  ]
}, (req, res) => {
  try {
    console.log(req.method, req.url);
    if(req.method === 'GET') {
      if(req.url === '/') {
        const data =  fs.readFile(path.join(__dirname, './restFront.html'));
        res.writeHead(200, {'Content-Type' : 'text/html; charste=utf-8'})
        return res.end(data);
      } else if (req.url === '/about') {
        const data =  fs.readFile(path.join(__dirname, './about.html'));
        res.writeHead(200, {'Content-Type' : 'text/html; charste=utf-8'})
        return res.end(data);
      } else if(req.url === '/users') {
        res.writeHead(200, {'Content-Type' : 'application/json; charste=utf-8'})
        return res.end(JSON.stringify(users));
      }
      try {
        const data =  fs.readFile(path.join(__dirname, req.url));
        return res.end(data);
      } catch(err) {}
    } else if(req.method === "POST") {
      if(req.url === '/user/') {
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log("POST 본문(body)", body);
          const {name} = JSON.parse(body);
          const id = Date.now();
          users[id] = name;
          res.writeHead(201, {'Content-Type' : 'text/plain; charste=utf-8'});
        });
      }
    } else if(req.method === "PUT") {
      if(req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log("PUT 본문(body)", body);
          users[key] = JSON.parse(body).name;
          res.writeHead(200, {'Content-Type' : 'application/json; charste=utf-8'});
          return res.end(JSON.stringify(users));
        });
      }
    } else if(req.method === "DELETE") {
      if(req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        delete users[key];
        res.writeHead(200, {'Content-Type' : 'application/json; charste=utf-8'});
        return res.end(JSON.stringify(users));
      }
    }
    res.writeHead(404);
    return res.end("NOT FOUND");
  } catch (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type' : 'text/plain; charste=utf-8'});
    res.end(err.message);
  }
}).listen(443, () => {
  console.log("443번 포트에서 서버 대기중입니다");
});