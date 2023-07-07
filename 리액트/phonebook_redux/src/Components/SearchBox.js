import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({type: "SEARCH_BY_USERNAME", payload: {keyword}});
  }
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control onChange={(e) => {setKeyword(e.target.value)}} value={keyword} type="text" placeholder='Enter Name'/>
        </Col>
        <Col lg={2}>
          <Button type='submit'>Search</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox;
