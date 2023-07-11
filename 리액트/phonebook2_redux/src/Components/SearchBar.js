import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({type: "SEARCH_BY_USERNAME", payload: {keyword}})
  }
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" placeholder='이름을 입력해주세요'/>
        </Col>
        <Col lg={2}>
          <Button type='submit'>찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBar;
