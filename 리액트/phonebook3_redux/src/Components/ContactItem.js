import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({it}) => {
  return (
    <Row>
      <Col lg={2}>
        <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg'/>
      </Col>
      <Col lg={10}>
        <div>{it.name}</div>
        <div>{it.phone}</div>
      </Col>
    </Row>
  )
}

export default ContactItem;
