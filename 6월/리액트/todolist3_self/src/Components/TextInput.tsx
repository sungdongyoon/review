import React from 'react';
import { styled } from 'styled-components';


const Input = styled.input`
  height: 40px;
  width: 500px;
  border: 2px solid #E7CEA6;
  border-radius: 10px;
`;

interface Props {
  readonly value: string;
  readonly onChange: (text: string) => void;
}

const TextInput = ({value, onChange}: Props) => {
  return (
    <Input value={value} onChange={(e: any) => onChange(e.target.value)}/>
  )
}

export default TextInput
