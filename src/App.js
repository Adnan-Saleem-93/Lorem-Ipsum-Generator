import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import ValueSelection from "./components/value-selection";
import ParagraphSection from "./components/paragraph-section";
import ScrollButton from "./components/scroll-button";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

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
      <ScrollButton />
    </Container>
  );
}

export default App;
