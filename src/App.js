import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import ValueSelection from "./components/value-selection";
import ParagraphSection from "./components/paragraph-section";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  // function to handle click event of 'Generate' button
  const handleClick = (newValue) => {
    setValue(newValue);
  };
  return (
    <Container className="App">
      <Row>
        <h2 className="heading">Generate Random Lorem Ipsum Paragraphs</h2>
      </Row>
      <Row>
        <ValueSelection onBtnClick={handleClick} />
      </Row>
      <Row>
        <ParagraphSection paraLength={value} />
      </Row>
    </Container>
  );
}

export default App;
