import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import AddToDo from "./ToDolist/AddToDo";
import { ToDoList } from "./ToDolist/ToDoList";
import { Headder } from "./ToDolist/Headder";

import "./ToDolist/ToDoStyle.css";

export const Home = () => {
  const [todoitems, setTodoitems] = useState([
    "Learning React",
    "Getting Job",
    "offer Namaz",
  ]);

  const handleAdd = (newTodo) => {
    setTodoitems([...todoitems, newTodo]);
  };

  const handledel = (currItem) => {
    console.log(currItem);
    const filtered = todoitems.filter((item) => item !== currItem);
    setTodoitems([...filtered]);
  };
  return (
    <React.Fragment>
      <Card className="home">
        <Row>
          <Headder />
        </Row>
        <Row>
          <Col>
            <AddToDo handleAdd={handleAdd} />
          </Col>
          <Col>
            <ToDoList todoitems={todoitems} handledel={handledel} />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
