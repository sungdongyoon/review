import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

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
