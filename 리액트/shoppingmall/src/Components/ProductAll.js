import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    let url = `http://localhost:3004/products`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
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
