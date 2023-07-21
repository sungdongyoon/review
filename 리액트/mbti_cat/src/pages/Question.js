import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ProgressBar } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';
import { createSearchParams, useNavigate } from 'react-router-dom';

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

const Button = styled.button`
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background-color: cornflowerblue;
  border-radius: 10px;
  padding: 80px 50px;
  margin: 30px;
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {id: "EI", score: 0},
    {id: "SN", score: 0},
    {id: "TF", score: 0},
    {id: "JP", score: 0},
  ]);
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) => s.id === type ? {id: s.id, score: s.score + no} : s); 
    // const indexNum = totalScore.map((it) => it.id).indexOf(type);
    // totalScore.splice(indexNum, 1, {id: totalScore[indexNum].id, score: totalScore[indexNum].score + no});
    setTotalScore(newScore);
    if(QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) => acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), "" 
      );
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti
        })}`
      });
    }
  };

  console.log("totalscore", totalScore)
  
  return (
    <Wrapper>
      <ProgressBar striped variant='warning' now={(questionNo / QuestionData.length) * 100} style={{marginTop: 20}}/>
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button onClick={() => handleClickButton(1, QuestionData[questionNo].type)} >{QuestionData[questionNo].answera}</Button>
        <Button onClick={() => handleClickButton(0, QuestionData[questionNo].type)} >{QuestionData[questionNo].answerb}</Button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Question;
