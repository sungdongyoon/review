const url = require('url');

const {URL} = url;
const myURL = new URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EA%B5%90%EB%B3%B4%EB%AC%B8%EA%B3%A0");
console.log("new URL(): ", myURL);
console.log("url.format(): ", url.format(myURL));