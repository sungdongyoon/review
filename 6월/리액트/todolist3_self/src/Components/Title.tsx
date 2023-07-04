import React from 'react';
import { styled } from 'styled-components';

const TitleText = styled.h1`
  font-size: 20px;
`

const Title = ({label}: any) => {
  return (
    <TitleText>{label}</TitleText>
  )
}

export default Title
