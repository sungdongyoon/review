import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';

const Body = styled.body`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 500px;
  margin-top: 80px;
`;

const Img = styled.img`
width: 60%;
  display: flex;
`;

const ProductInfo = styled.div`
  border-top: 2px solid #000;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  .title {
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .origin-price {
    color: #ccc;
    font-size: 18px;
    text-decoration: line-through;
  }
  .price {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 20px;
    b {
      color: red;
      margin-right: 10px;
    }
  }
  .benefitBox {
    background-color: #eee;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-weight: bold;
    b{
      color: red;
    }
    .go {
      font-size: 20px;
      color: red;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  margin: 30px 0;
  img {
    width: 100px;
    margin-right: 20px; 
  }
`;

const Size = styled.div`
  span {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const ProductDetail = () => {
  const [product, setProduct] = useState("");
  const getProduct = async () => {
    let url = `http://localhost:3005/products/0`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, [])
  return (
    <Body>
      <Container>
        <Img src={product.img}/>
        <ProductInfo>
          <div className='title'>
            <span>{product.title}</span>
            <img src='https://wiisnt.co.kr/images/cm_icon_socials.gif'/>
          </div>
          <div className='origin-price'>100000원</div>
          <div className='price'><b>20%</b>{product.price}원</div>
          <div className='benefitBox'>
            <span>공식 홈페이지 <b>회원혜택</b> 확인하기</span>
            <span className='go'>Go</span>
          </div>
          <ImgContainer>
            <img src={product.img}/>
            <img src={product.img}/>
            <img src={product.img}/>
            <img src={product.img}/>
          </ImgContainer>
          <Size>
            <span>230</span>
            <span>240</span>
            <span>250</span>
            <span>260</span>
            <span>270</span>
            <span>280</span>
          </Size>
        </ProductInfo>
      </Container>
    </Body>
    
  )
}

export default ProductDetail;
