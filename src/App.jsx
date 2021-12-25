import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {Component} from 'react'
import {useState, useRef, useEffect} from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import {UserAuthContextProvider} from "./context/UserAuthContext";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

import PayPal from "./components/PayPal";
import Donation from "./components/donations";
import Home from "./components/home";
import NewUser from "./components/admin/login";
import Cane from "./components/enterprise/cane";

function App() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
          <Router>
          <UserAuthContextProvider>
            <Routes>
              

    {/* <Route exact path = '/paypal' element={()=> <PayPal authorized={false}/>} />   */}
 <Route exact path = '/paypal' element = {<PayPal/>} /> 

    <Route exact path = '/' element = {<Home/>} />
    <Route exact path = '/login' element = {<Login/>} />
    <Route exact path = '/donation' element = {<Donation/>} />
    <Route exact path = '/signup' element = {<Signup/>} />
    <Route exact path = '/admin/login' element = {<NewUser/>} />
   

            <Route exact path='enterprise/cane' element={<Cane />} />

    </Routes>
          </UserAuthContextProvider>
          </Router>
 
  </div>

  )
}

export default App;