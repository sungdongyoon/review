import Button from "../Component/Button";
import Header from "../Component/Header";
import Editor from "../Component/Editor";
import DiaryList from "../Component/DiaryList";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../Component/Util";


const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]); 
  useEffect(() => {
    if(data.length >= 1) {
      const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate)
      setFilteredData(
        data.filter((it) => beginTimeStamp <= it.date && it.date < endTimeStamp)
      )
    } else {
      setFilteredData([])
    }
  }, [data, pivotDate]);
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }
  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;
  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
        rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
        />
      <DiaryList data={filteredData}/>
    </div>
  )
}

export default Home;