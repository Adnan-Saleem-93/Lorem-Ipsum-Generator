import React, {useState} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";

const ValueSelection = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Row>
        <Col md={{span: 3, offset: 4}}>
          <p className="paragraph-text">Paragraphs: {value}</p>
        </Col>
        <Col md="2">
          <Button variant="outline-primary">Generate</Button>
        </Col>
      </Row>
      <Form.Range value={value} onChange={handleChange} max="20" />
    </>
  );
};

export default ValueSelection;
