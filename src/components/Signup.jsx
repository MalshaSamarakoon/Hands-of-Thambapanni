import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

import "./Modal.css";


  function Signup() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="modalBackground">
      <div className="modalContainer-signup">
      <div className="p-4 box">
        <h2 className="mb-3">Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form id="signup-form" onSubmit={handleSubmit}>

        <Form.Group className="mb-3" >
            <Form.Control
              type="text"
              placeholder="First Name"  className="pw"/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control
              type="text"
              placeholder="Last Name"  className="pw"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"  className="pw"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"  className="pw"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary"  className="pw" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
        <hr />
      <div className="p-4 box mt-3 text-center">
      <h4>Already have an account? <Link to="/donation">Log In</Link></h4> 
      </div>
      </div>
      </div>
      </div>

    </>
  );
};

export default Signup;
