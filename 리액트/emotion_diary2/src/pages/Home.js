import React, { useEffect } from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';
import DiaryList from '../Components/DiaryList';
import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';
import { getMonthRangeByDate } from '../utill';

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]); // 출력되는 기본 데이터인 mockData가 배열이기 때문에 초기값 배열로 설정
  useEffect(() => {
    if(data.length >= 1) {
      const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
      setFilteredData(data.filter((it) => beginTimeStamp <= it.date && endTimeStamp >= it.date));
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate])
  const onPrevMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }
  const onNextMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  const titleDate = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;
  
  console.log(data, pivotDate);
  return (
    <div>
      <Header 
      title={titleDate} 
      leftchild={<Button text={"<"} onClick={onPrevMonth}/>} 
      rightchild={<Button text={">"} onClick={onNextMonth}/>}/>
      <DiaryList data={filteredData}/>
    </div>
  )
}

export default Home;
