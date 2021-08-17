import React, { useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

const AddToDo = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <Card className="addtodo">
      <Card.Title>Add To Do</Card.Title>
      <Row>
        <Col md="10">
          <Form.Control
          placeholder="Add New List"
            typr="text"
            onChange={(e) => setNewTodo(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handleAdd(newTodo);
              setNewTodo("");
            }}
            dissabled={newTodo === ""}
          >
            ADD
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
export default AddToDo;
