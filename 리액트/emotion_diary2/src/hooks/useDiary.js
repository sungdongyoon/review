import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const useDiary = (id) => {
  const navigate = useNavigate();
  const data = useContext(DiaryStateContext);
  // console.log('data', data)
  const [diary, setDiary] = useState();
  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    console.log(id);
    if(matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("일기가 존재하지 않습니다");
      navigate('/', {replace: true});
    }
  }, [id, data])
  return diary;
};

export default useDiary;