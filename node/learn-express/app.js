const express = require('express');
const path = require('path');

const app = express();

// set함수는 서버가 실행될 포트 설정할 때 사용
app.set('port', process.env.PORT || 3000);

// express가 use라는 함수를 사용해서 미들웨어 역할 할 때 특정 경로를 지정하지 않으면 클라이언트로부터 요청받는 모든 요청에 미들웨어를 실행한다

app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됩니다");
  next();
})

// 도메인 주소에 대한 GET 메서드 요청 발생 시 어떤 동작을 하게 할 것인지 정의
app.get("/", (req, res, next) => {
  // res.send('Hello, Express');
  // res.sendFile(path.join(__dirname, '/index.html'));
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error("에러는 에러 처리 미들웨어로 갑니다.");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});