import dns from "dns/promises";

const ip = await dns.lookup("naver.com");
console.log("IP", ip);

const any = await dns.resolve("naver.com", "ANY");
console.log("ANY", any);