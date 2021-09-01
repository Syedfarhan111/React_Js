import React, { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export const ToDoItem = ({ item, handledel }) => {
  const [check, setCheck] = useState(false);
  return (
    <Card className="todoitem">
      <Row>
        <Col md={1}>
          <Form.Check onClick={() => setCheck(!check)}></Form.Check>
        </Col>
        <Col md={8}>
          <Form.Label className="label">
            {check ? <del>{item}</del> : item}
          </Form.Label>
        </Col>
        <Col md="2">
          <Button onClick={() => handledel(item)}>Delete</Button>
        </Col>
      </Row>
    </Card>
  );
};
