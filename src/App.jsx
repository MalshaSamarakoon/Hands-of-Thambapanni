import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {Component} from 'react'
import {useState, useRef, useEffect} from "react";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import { ContactUs } from "./components/mailer";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";



import PayPal from "./components/PayPal";
import Donation from "./components/donations";
import Home from "./components/home";
import NewUser from "./components/admin/login";
import AUser from "./components/admin/newUser/NewUser";
import ImageUpload from "./components/ImageUpload"

import Cane from "./components/enterprise/cane";

function App() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isAuth,setIsAuth] = useState(false)

    return (
      <div>
    <Router>
      <UserAuthContextProvider>
        <Routes>
        
{/* user */}
    <Route exact path = '/' element = {<Home/>} />
    <Route exact path = '/login' element = {<Login/>} />
    <Route exact path = '/donation' element = {<Donation/>} />
    <Route exact path = '/signup' element = {<Signup/>} />
    <Route exact path = '/admin/login' element = {<NewUser/>} />
    <Route exact path = '/upload' element = {<ImageUpload/>} />

    
    {/* <ProtectedRoute path = '/paypal' element = {PayPal} isAuth={isAuth}/> */}
    <Route exact path = '/paypal' element = {<PayPal/>} /> 
    <Route element={<ProtectedRoute/>}>
      <Route exact path = '/mailer' element = {<ContactUs/>} />
    </Route>

{/* profiles */}
   <Route exact path='/cane' element={<Cane />} />


{/* admin */}
   <Route exact path = '/adduser' element = {<AUser/>} />

    </Routes>
      </UserAuthContextProvider>
        </Router>
 
  </div>

  )
}

export default App;