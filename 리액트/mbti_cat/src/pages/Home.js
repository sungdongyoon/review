import React from 'react';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import PangImage from "../assets/ggompang.jpeg";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


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




const Home = () => {
  const navigate = useNavigate();
  const goTest = () => {
    navigate('/question');
  }
  
  return (
    <Wrapper>
      <Header>예비집사 판별기😸</Header>
      <Content>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img className='rounded-circle' src={PangImage}/>
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button className='test_button' onClick={goTest}>테스트 시작하기</Button>
      </Content>
    </Wrapper>
  )
}

export default Home;
