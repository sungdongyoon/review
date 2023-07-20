import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-dicretion: row;
  justify-content: center;
  align-items: center;
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {id: "EI", score: 0},
    {id: "SN", score: 0},
    {id: "TF", score: 0},
    {id: "JP", score: 0},
  ]);
  const handleClickButtonA = (no, type) => {
    // if(type === 'EI'){
    //   // 기존 스코어에 더할 값을 계산(기존값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체 생성
    //   const newObject = {id: "EI", score: addScore};
    //   // splice 함수 활용, 새로운 객체로 대체
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === 'SN') {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = {id: "SN", score: addScore};
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === 'TF') {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = {id: "TF", score: addScore};
    //   totalScore.splice(2, 1, newObject);
    // } else {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = {id: "JP", score: addScore};
    //   totalScore.splice(3, 1, newObject);
    // }
    const indexNum = totalScore.map((it) => it.id).indexOf(type);
    totalScore.splice(indexNum, 1, {id: totalScore[indexNum].id, score: totalScore[indexNum].score + no});
    setQuestionNo(questionNo + 1);
  };


  const handleClickButtonB = (no, type) => {
    // if(type === 'EI'){
    //   // 기존 스코어에 더할 값을 계산(기존값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체 생성
    //   const newObject = {id: "EI", score: addScore};
    //   // splice 함수 활용, 새로운 객체로 대체
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === 'SN') {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = {id: "SN", score: addScore};
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === 'TF') {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = {id: "TF", score: addScore};
    //   totalScore.splice(2, 1, newObject);
    // } else {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = {id: "JP", score: addScore};
    //   totalScore.splice(3, 1, newObject);
    // }
    const indexNum = totalScore.map((it) => it.id).indexOf(type);
    totalScore.splice(indexNum, 1, {id: totalScore[indexNum].id, score: totalScore[indexNum].score + no});
    setQuestionNo(questionNo + 1);
  };
  console.log("totalscore", totalScore)
  return (
    <Wrapper>
      <ProgressBar striped variant='warning' now={100} style={{marginTop: 20}}/>
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button onClick={() => handleClickButtonA(1, QuestionData[questionNo].type)} style={{width: '40%', minHeight: '200px', fontSize: '15px'}}>{QuestionData[questionNo].answera}</Button>
        <Button onClick={() => handleClickButtonB(0, QuestionData[questionNo].type)} style={{width: '40%', minHeight: '200px', fontSize: '15px', marginLeft: '20px'}}>{QuestionData[questionNo].answerb}</Button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Question;
