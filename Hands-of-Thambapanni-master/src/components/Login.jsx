import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";


import "./Modal.css";


function Login({ setOpenModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/paypal");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/paypal");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
<div className="modalBackground">
      <div className="modalContainer">

        <div className="p-4 box">     
        <div>
        <button class="cancelBtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >     <h3 className="mb-4">X</h3> </button>
        </div>

        <h2 className="mb-3">Login</h2>


        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email" className="pw"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
              type="password"
              placeholder="Password" className="pw"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" className="pw">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <div className="p-4 box mt-3 text-center">
      <h4>Don't have an account?  <Link to="/signup">Sign up</Link></h4> 
      </div>
      </div>
      </div>
      </div>
          </>
  );
};

export default Login;
