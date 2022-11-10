import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <Container>
        <div className="row my-4" style={{ justifyContent: "center" }}>
          <div className="col-md-3 com-md-offset-3">
            <Card>
              <Form>
                <Card.Title>Register</Card.Title>

                <Form.Group
                  className="my-3"
                //   style={{ justifyContent: "center" }}
                  controlId="formBasicEmail"
                >  
                  <Card.Header>Email</Card.Header>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group
                  className="my-3"
                //   style={{ justifyContent: "center" }}
                  controlId="formBasicEmail"
                >  
                  <Card.Header>User name</Card.Header>
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Enter username"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Card.Header>Password</Card.Header>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Link className="link" variant="primary" type="submit" style={{margin: "10px"}} to="/" >
                  Register
                </Link>
              </Form>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
