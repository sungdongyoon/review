import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const disaptch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    disaptch({type: "SEARCH_BY_USENAME", payload: {keyword}});
  }
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control onChange={(e) => setKeyword(e.target.value)} value={keyword} type='text' placeholder='이름을 입력해주세요'/>
        </Col>
        <Col lg={2}>
          <Button type='submit'>찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox;
