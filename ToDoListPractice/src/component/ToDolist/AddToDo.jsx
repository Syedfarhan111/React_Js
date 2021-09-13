import React, { useState } from "react";
import { Card, Form, Col, Button, Row } from "react-bootstrap";

export const AddToDo = ({ taking }) => {
  const [AddingItem, setAddingItem] = useState();
  return (
    <Card className="AddToDo">
      <Card.Title>Add To Do</Card.Title>
      <Row>
        <Col md="10">
          <Form.Control
            placeholder="Enter Any text ...................."
            type="text"
            onChange={(e) => setAddingItem(e.target.value)}
          ></Form.Control>
        </Col>
        <Col md={2}>
          <Button
            type="primaray"
            onClick={(e) => {
              taking(AddingItem);
              setAddingItem("");
            }}
            disabled={AddingItem === ""}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
