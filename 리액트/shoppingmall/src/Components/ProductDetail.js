import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dropdown, Container, Row, Col, Button } from 'react-bootstrap';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  },[])
  if(loading || product == null) return <h1>Loading</h1>;
  return (
    <Container>
      <Row>
        <Col className='product-detail-img'>
          <img src={product.img}/>
        </Col>
        <Col className='product-info'>
          <div>{product.title}</div>
          <div>{product.price}원</div>
          <div className='choice'>
            {product.choice ? "Conscious Choice" : ""}
          </div>
          <Dropdown className='drop-down'>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.size.map((it) => (
                <Dropdown.Item href='#/action-1'>{it}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant='dark' className='add-button'>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
