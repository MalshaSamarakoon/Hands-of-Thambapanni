import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { ContactUs } from "./mailer";
import { Link } from "react-scroll";
import logo from "../logo.png";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, user } = useUserAuth();
  const navigate = useNavigate();

  console.log(user?.email, "*****");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      <Link to="mailer" spy={true} smooth={true} />;
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/donation");
      <Link to="mailer" spy={true} smooth={true} />;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="p-4 box">
            <img src={logo} width="200px" height="200px" alt="" />
            <h2 className="center">Hands Of Thambapanni</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  className="pw"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="pw"
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
              <h4>
                Don't have an account? <a href="/signup">Sign Up</a>
              </h4>
            </div>
            <div className="p-4 box mt-3 text-center">
              <h4><a href="/">Cancel</a></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
