import React from 'react';
import Button from './Button';
import { styled } from 'styled-components';
import { useState } from 'react';


const Container = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
`;

const ShowInputButton = ({show, onClick}: any) => {
  return (
    <Container>
      <Button label={show ? "닫기" : "할 일 쓰기"} color='#F2BE22' onClick={onClick}/>
    </Container>
  )
}

export default ShowInputButton
