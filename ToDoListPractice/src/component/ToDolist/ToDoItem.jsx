import React from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";

export const ToDoItem = ({ Ele ,handledel}) => {
  return (
    <Card className="ToDoItem">
      <Row>
        <Col md={1}>
          <Form.Check></Form.Check>
        </Col>
        <Col md="9">
          <Form.Label>{Ele}</Form.Label>
        </Col>
        <Col md="1">
          <Button onClick={(e)=>handledel(Ele)}>Delete</Button>
        </Col>
      </Row>
    </Card>
  );
};
