import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({type: "ADD_CONTACT", payload: {name, phone}})
  }
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone</Form.Label>
          <Form.Control value={phone} onChange={(e) => {setPhone(e.target.value)}} type="text" placeholder="Enter PhoneNumber" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm;
