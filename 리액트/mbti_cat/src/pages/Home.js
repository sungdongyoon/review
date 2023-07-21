import React from 'react';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import PangImage from "../assets/ggompang.jpeg";
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
  margin-bottom: 50px;
  background-color: #999;
  padding: 20px 80px;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // box-shadow: inset 0 0 60px 70px powderblue;
  // border-radius: 30px;
  // padding: 50px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 20px #000;
  margin: 30px 0;
`;

const LogoImage = styled.div`
  margin-top: 10px;
  img {
    width: 350px;
    height: 350px;
    // border-radius: 50%;
  }
`;

const Button = styled.div`
  background-color: cornflowerblue;
  border: 3px solid transparent;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 30px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 3px solid cornflowerblue;
    background-color: #fff;
    color: cornflowerblue;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #999;
  margin-top: 70px;
  margin-bottom: -30px;
  text-align: center;
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
          <img src={PangImage}/>
        </LogoImage>
        <Desc>MBTI를 기반으로 나랑 잘 맞는 고양이를 찾아보자<br/>👇</Desc>
        <Button className='test_button' onClick={goTest}>테스트 시작하기</Button>
      </Content>
    </Wrapper>
  )
}

export default Home;
