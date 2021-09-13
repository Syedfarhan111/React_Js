import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Nav,
  Container,
  Navbar,
  Card,
} from "react-bootstrap";

export const EmiCalc = () => {
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [n, setN] = useState("");
  const [emi, setEmi] = useState("");

  const handleCalc = () => {
    setEmi();
  };

  useEffect(()=>{
      handleCalc();
  },[p,n,r])

  return (
    <Row>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Col md="4"></Col>
      <Col md="4">
        <Card>
          <Form.Control
            type="number"
            placeholder="Principle"
            onChange={(e) => setP(e.target.value)}
          ></Form.Control>
          <Form.Control
            type="number"
            placeholder="Years "
            onChange={(e) => setR(e.target.value)}
          ></Form.Control>
          <Form.Control
            type="number"
            placeholder="Emi "
            onChange={(e) => setN(e.target.value)}
          ></Form.Control>
          <Button variant="primary" onClick={() => handleCalc()}>
            Primary
          </Button>
          <p>Results:<h1>{emi}</h1></p>
        </Card>
      </Col>
      <Col md="4"></Col>
    </Row>
  );
};
