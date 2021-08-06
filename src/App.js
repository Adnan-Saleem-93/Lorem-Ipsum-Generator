import {Container, Row} from "react-bootstrap";
import ValueSelection from "./components/value-selection";
import "./App.css";

function App() {
  return (
    <Container className="App">
      <Row>
        <h2 className="heading">Generate Random Lorem Ipsum Paragraphs</h2>
      </Row>
      <Row>
        <ValueSelection />
      </Row>
      <Row></Row>
    </Container>
  );
}

export default App;
