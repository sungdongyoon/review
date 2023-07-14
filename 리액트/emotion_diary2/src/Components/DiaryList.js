import './DiaryList.css';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import DiaryItem from './DiaryItem';

const sortOptionList = [
  {value: "latest", name: "최신순"},
  {value: "oldest", name: "오래된순"},
]

const DiaryList = ({data}) => {
  const [sortType, setSortType] = useState("latest");
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate('/new');
  };
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const compare = (b, a) => {
      if(sortType === "latest") {
        return Number(b.date) - (a.date);
      } else {
        return Number(a.date) - (b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare)
    setSortedData(copyList);
    console.log(sortedData)
  }, [data, sortType])
  return (
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>{it.name}</option>
            ))}
          </select>
        </div>
        <div className='right_col'>
          <Button onClick={onClickNew} type={"positive"} text={"새 일기 쓰기"}/>
        </div>
      </div>
      <div className='list_wrapper'>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it}/>
        ))}
      </div>
    </div>
  )
}

export default DiaryList;
