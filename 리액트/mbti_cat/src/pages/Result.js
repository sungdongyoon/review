import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResultData } from '../assets/data/resultdata';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: cener;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  margin-top: 40px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const LogoImage = styled.div`
  margin-top: 10px;
  img {
    width: 350px;
    height: 350px;
    // border-radius: 50%;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;


const Result = () => {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = useState({});
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti])
  const navigate = useNavigate();
  const goTest = () => {
    navigate('/');
  };
  // console.log("mbti", ResultData.map((it) => it.best));
  // const indexNum = ResultData.map((it) => it.best).indexOf(mbti);
  // console.log(indexNum);
  
  return (
    <Wrapper>
      <Header>예비집사 판별기😸</Header>
      <Content>
        <Title>MBTI 결과보기: {resultData.best}</Title>
        <LogoImage>
          <img className='rounded-circle' src={resultData.image}/>
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는? {resultData.name} 입니다</Desc>
        <Button className='test_button' onClick={goTest}>테스트 다시하기</Button>
      </Content>
    </Wrapper>
  )
}

export default Result;
