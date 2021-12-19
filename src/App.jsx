import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react'

import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import Profile from "./components/profiles";
import Login from "./components/Login";
import Register from "./components/register";
import PayPal from "./components/PayPal";
import Cane from "./components/cane";
import{Button, Modal} from 'react-bootstrap'




function App() {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (


      <div>

<>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              

jhgfdfxchvhkjlk;gh



          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

<Router>
    <div>
    <Navigation />
    <Header/>


<Routes>
    <Route exact path = '/paypal' element = {<PayPal/>} />
    <Route exact path = '/login' element = {<Login/>} />
    <Route exact path = '/register' element = {<Register/>} />

    <Route exact path = '/' element = {<Contact/>} />
    <Route exact path = '/profile' element = {<Profile/>} />
    <Route exact path = '/cane' element = {<Cane/>} />
</Routes>

    </div>
</Router>
  </div>

    )
}

export default App;
