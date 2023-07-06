import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams, useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    // query에서 q값을 가져온 값을 searchQuery에 할당
    let url = `https://my-json-server.typicode.com/sungdongyoon/reactshoppingmall/products?q=${searchQuery}`;
    // console.log("쿼리값 :" , searchQuery);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((item) => (
          <Col md={3} sm={12} key={item.id}>
            <ProductCard item={item}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductAll;
