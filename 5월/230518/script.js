const arr = ["teacher", "time", "student", "beautiful", "good"];

function solution(arr) {
  let answer = "";
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > answer.length) {
      answer = arr[i];
    }
  }
  return answer;
}
console.log(solution(arr));

function solution(e) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;

  for(let el of e) {
    if(el.length > max) {
      max = el.length;
      answer = el;
    }
  }
  return answer;
}
console.log(solution(arr));