import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { Component } from 'react'
import { useState, useRef, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import Profile from "./components/profiles";
import About from "./components/about";
import Register from "./components/register";
import PayPal from "./components/PayPal";
import { Button, Modal } from 'react-bootstrap'
import MyForm from "./admin/login";
import Donation from "./components/donations";
import Home from "./components/home";
import Cane from "./components/enterprise/cane";
import Carvings from "./components/enterprise/carvings";





function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (


    //       <div>

    // <>
    //         <Button variant="primary" onClick={handleShow}>
    //           Launch demo modal
    //         </Button>

    //         <Modal show={show} onHide={handleClose}>
    //           <Modal.Header closeButton>
    //             <Modal.Title>Modal heading</Modal.Title>
    //           </Modal.Header>
    //           <Modal.Body>


    // jhgfdfxchvhkjlk;gh



<Routes>
    {/* <Route exact path = '/paypal' component={()=> <PayPal authorized={false}/>} /> */}
    <Route exact path = '/paypal' element = {<PayPal/>} />

    <Route exact path = '/login' element = {<Login/>} />
    <Route exact path = '/register' element = {<Register/>} />
    <Route exact path = '/' element = {<Home/>} />
    <Route exact path = '/donation' element = {<Donation/>} />

    <Route exact path = '/cane' element = {<Cane/>} />


</Routes>

    </div>
</Router>
  </div>

    )
}

export default App;
