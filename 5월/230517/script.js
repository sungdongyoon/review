let today = String(prompt("오늘 날짜를 입력해주세요"));
let carNumber = String(prompt("차량번호 4자리를 입력해주세요"));

function solution(e) {
  let take = carNumber.charAt(3);
  if (e !== "") {
    if (e % 10 == take) {
      alert(`오늘은 차량운행을 할 수 없는 날입니다`);
    } else {
      alert(`안전운전 하세요`);
    }
  };
}
solution(today);