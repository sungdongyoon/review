import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin: 10px;
`;

const Img = styled.img `
  width: 300px;
`;

const Title = styled.div`
  font-size: 14px;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Product = ({it}) => {
  const navigate = useNavigate();
  const showItem = () => {
    navigate(`/products/${it.id}`)
  }
  return (
    <Container onClick={showItem}>
      <Img src={it.img}/>
      <Title>{it.title}</Title>
      <Price>{it.price}</Price>
    </Container>
  )
}

export default Product;
