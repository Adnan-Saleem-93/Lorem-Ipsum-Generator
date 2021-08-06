import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import ValueSelection from "./components/value-selection";
import ParagraphSection from "./components/paragraph-section";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container className="App">
      <Row>
        <h2 className="heading">Generate Random Lorem Ipsum Paragraphs</h2>
      </Row>
      <Row>
        <ValueSelection value={value} onChange={handleChange} />
      </Row>
      <Row>
        <ParagraphSection value={value} />
      </Row>
    </Container>
  );
}

export default App;
