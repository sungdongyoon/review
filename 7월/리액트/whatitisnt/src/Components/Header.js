import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 12px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 300px;
`;

const Atag = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 12px;
  padding: 10px 20px;
  cursor: pointer;
`

const Header = ({authentic, setAutentic}) => {
  const leftNav = ['스토어', '룩북', '매거진', '브랜드 소개', 'NEW ARRIVAL', 'SWIM WEAR'];
  const navigate = useNavigate();
  return (
    <Container>
      <Banner>WEEKLY BEST ITEM💥</Banner>
      <Content>
        <Ul>
          {leftNav.map((item, index) => (
            <li><Atag href='#' key={index}>{item}</Atag></li>
          ))}
        </Ul>
        <div onClick={() => navigate('/')}>
          <img src='https://wiisnt.co.kr/images/cm_logo_1_02.svg' width={50}/>
        </div>
        <Ul>
          <li>
            <Atag>매장안내</Atag>
          </li>
          <li>
            <Atag>회원혜택</Atag>
          </li>
          <li>
            <Atag>검색</Atag>
          </li>
          {authentic ? (
            <li onClick={() => setAutentic(false)}>
              <Atag>로그아웃</Atag>
            </li>
          ) : (
            <li onClick={() => navigate('/login')}>
              <Atag>로그인</Atag>
            </li>
          )}
          <li>
            <Atag>장바구니</Atag>
          </li>
        </Ul>
      </Content>
    </Container>
  )
}

export default Header;
