import React, { useState } from "react";
import { AddToDo } from "./ToDolist/AddToDo";
import { Card, Col, Row } from "react-bootstrap";

import { ToDoList } from "./ToDolist/ToDoList";
import "./ToDolist/ToDoStyle.css";

export const Home = () => {
  const [todocontent, setToDocontent] = useState([
    "hellow",
    "Working at evenoing",
    "Yesterday meeting",
  ]);
  const AddHandle = (AddingItem) => {
    setToDocontent([...todocontent, AddingItem]);
  };
  const handledel = (curElement) => {
    console.log(curElement);
    const filtered = todocontent.filter((element) => element !== curElement);
    setToDocontent([...filtered]);
  }
  return (
    <React.Fragment>
      <Card className="home">
        <Row>
          <Col>
            <AddToDo taking={AddHandle} />
          </Col>
          <Col>
            <ToDoList todocontent={todocontent} handledel={handledel} />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
