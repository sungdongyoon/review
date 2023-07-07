import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Number Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
