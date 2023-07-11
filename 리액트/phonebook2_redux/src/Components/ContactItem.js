import React from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const ContactItem = ({it}) => {
  return (
    <Row>
      <Col lg={1}>
        <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'/>
      </Col>
      <Col lg={11}>
        <div>{it.name}</div>
        <div>{it.phone}</div>
      </Col>
    </Row>
  )
}

export default ContactItem;
