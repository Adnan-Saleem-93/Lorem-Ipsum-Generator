import React from "react";
import {Form, Button, Col} from "react-bootstrap";

const ValueSelection = ({value, onChange}) => {
  return (
    <>
      <Col md={{span: 3, offset: 4}}>
        <p className="paragraph-text">Paragraphs: {value}</p>
      </Col>
      <Col md="2">
        <Button variant="outline-primary">Generate</Button>
      </Col>
      <Form.Range value={value} onChange={onChange} max="20" />
    </>
  );
};

export default ValueSelection;
