import List from './components/listComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container>
  <Row>
    <Col></Col>
    <Col>
    <div className="App">
      <h1>My TODO list</h1>
      <List/>
    </div>
    </Col>
    <Col></Col>
  </Row>
</Container>
    
  );
}

export default App;
