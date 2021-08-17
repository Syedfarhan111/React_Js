import React from "react";
import { ToDoList } from "./ToDolist/ToDoList";
import { ToDoItem } from "./ToDolist/ToDoItem";
import { AddToDo } from "./ToDolist/AddToDo";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  return (
    <Resct.Fregment>
      <Row>
        <Col>
          <AddToDo />
        </Col>
        <Col>
          <ToDoList />
        </Col>
      </Row>
    </Resct.Fregment>
  );
};

export default Home;
