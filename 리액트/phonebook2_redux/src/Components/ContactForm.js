import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({type: "ADD_CONTACT", payload: {name, phone}});
  }
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="이름을 입력해주세요" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>전화번호</Form.Label>
        <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="전화번호를 입력해주세요" />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  )
}

export default ContactForm;
