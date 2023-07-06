import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Aside = styled.div`
  position: fixed;
  top: 170px;
  left: 350px;
  width: 200px;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    font-weight: bold;
    color: #068FFF;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    width: 100%;
    font-size: 12px;
    margin: 5px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  h5 {
    font-weight: bold;
  }
  span {
    font-size: 12px;
  }
  input {
    width: 300px;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
    outline: none;
  }
  label {
    margin-left: 10px;
  }
`;


const ProductAll = () => {
  const newItem = ["베스트 아이템", "반소매 티셔츠", "상의", "아우터", "하의", "우먼", "모자", "가방", "신발", "라이프", "악세사리", "OUTLET"];
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  }
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    let url = `http://localhost:3005/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
    console.log(productList)
  };
  useEffect(() => {
    getProduct();
  }, [])
  return (
    <div>
      <Aside>
        <div className='title'>
          <span>🔥23SS NEW ARRIVAL</span>
          <span>➕</span>
        </div>
        <ul>
          {newItem.map((it) => (
            <li>
              <span>{it}</span>
              <span>➕</span>
            </li>
          ))}
        </ul>
      </Aside>
      <Container>
        <Title>
          <div>
            <h5>베스트 아이템</h5>
            <span>등록제품 : 90개</span>
          </div>
          <div>
            <input type='text' placeholder='제품 검색' onKeyPress={search}/>
            <label>🍳</label>
          </div>
        </Title>
        <Row>
          {productList.map((it) => (
            <Col md={3} sm={12} key={it.id}>
              <Product it={it}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    
  )
}

export default ProductAll;
