import emotion1 from './Img/emotion1.png';
import emotion2 from './Img/emotion2.png';
import emotion3 from './Img/emotion3.png';
import emotion4 from './Img/emotion4.png';
import emotion5 from './Img/emotion5.png';

export const getEmotionImgbyId = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if(month < 10) {
    month = `0${month}`;
  }
  if(date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
}

export const emotionList = [
  {
    id: 1,
    name: "완전 좋음",
    img: getEmotionImgbyId(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgbyId(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgbyId(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgbyId(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: getEmotionImgbyId(5),
  },
]

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
  // date에 들어갈 해당 날짜의 시작
  // date 날짜의 연도, 월의 1일로 시작
  const endTimeStamp = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59).getTime();
  // date에 들어갈 해당 날짜의 끝
  // date 날짜의 연도, 익월의 0일 23시 59분 59초
  // 익월의 1일이 시작하기 직전 까지
  return { beginTimeStamp, endTimeStamp };
}