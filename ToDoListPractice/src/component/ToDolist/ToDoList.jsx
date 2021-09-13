import React from "react";
import { Card } from "react-bootstrap";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ todocontent ,handledel }) => {
  return (
    <Card className="ToDoItem">
      <Card.Title>To Do List</Card.Title>
      {todocontent.map((element) => (
        <ToDoItem Ele={element} handledel={handledel} />
      ))}
    </Card>
  );
};
