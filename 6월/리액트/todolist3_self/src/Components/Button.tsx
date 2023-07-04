import React from 'react';
import { styled } from 'styled-components';

const Container = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 20px;
  &: hover {
    background-color: white;
    color: #F86F03;
    border: 1px solid #F86F03;
  }
`;

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
  readonly color?: string; 
}

const Button = ({label, onClick, color="#D3D04F"}: Props) => {
  return (
    <Container onClick={onClick} color={color}>{label}</Container>
  )
}

export default Button
