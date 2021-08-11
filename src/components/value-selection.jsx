import React, {useState} from "react";
import {Form, Button, Col} from "react-bootstrap";
import "../css/value-selection.css";

const ValueSelection = ({onBtnClick}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Col md={{span: 3, offset: 4}}>
        <p className="selected-paragraphs">Paragraphs: {value}</p>
      </Col>
      <Col md="2">
        <Button variant="outline-primary" onClick={() => onBtnClick(value)}>
          Generate
        </Button>
      </Col>
      <Form.Range value={value} onChange={handleChange} max="20" />
      <p className="helper-text">
        Move slider to select the number of paragraphs to be generated.!
      </p>
    </>
  );
};

export default ValueSelection;
