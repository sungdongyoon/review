import React from 'react'
import { styled } from 'styled-components'

const Container = styled.button`
  background-color: ${(props) => props.color};
  border: 0;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
  readonly color?: string;
}

const Button = ({label, onClick, color="#ff5722"}: Props) => {
  return (
    <Container onClick={onClick} color={color}>{label}</Container>
  )
}

export default Button
