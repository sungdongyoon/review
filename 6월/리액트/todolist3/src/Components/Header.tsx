import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #304ffe;
  margin: 0;
  padding: 8px 0;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  z-index: 1;
`;

const Header = () => {
  return (
    <Container>
      <StyledLink to="/">할 일 목록 앱</StyledLink>
    </Container>
  )
}

export default Header
