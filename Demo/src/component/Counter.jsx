import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Counter.css";

export const Counter = () => {
  return (
    <div>
      <Card className="Card">
        <h1>Counter</h1>

        <Button className="Button">-</Button>
        <p>0</p>
        <Button className="Button">+</Button>
      </Card>
    </div>
  );
};
