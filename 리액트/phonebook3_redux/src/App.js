import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

// <사용자 요구 정의>
// 왼쪽: 연락처 등록 폼 / 오른쪽 : 연락처 리스트 & 검색창
// 연락처 리스트에 사용자 이름 & 전화번호 추가 기능 탑재
// 연락처 리스트에 아이템이 몇 개 있는지 확인 가능
// 사용자 본인 이름을 검색할 수 있는 기능 탑재

function App() {
  return (
    <div className="App">
      <h1 className='title'>연락처</h1>
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
