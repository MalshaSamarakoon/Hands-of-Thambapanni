import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import { auth } from "../database/firebase-config";

import React, { useState } from "react";
// import { HashLink } from "react-router-hash-link";
// import { alpha, makeStyles } from '@material-ui/core/styles';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";

import SearchBar from "./SearchBar";
import BookData from "../Data.json";

import Login from "./Login";
import Signup from "./Signup";
import { useUserAuth } from "../context/UserAuthContext";

 
 export const Navigation = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const [user, setUser] = useState({});

onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
});


const logout = async () => {
  await signOut(auth);
 };

    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home" className="navbar-brand"><h1>AYUBOWAN SRI LANKA</h1></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />


  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
   
    <ReactBootStrap.Nav className="mr-auto">  
    <SearchBar placeholder="Search Enterprise..." data={BookData} />
    </ReactBootStrap.Nav>

  <ReactBootStrap.Nav>

  <Link to="/" className='navbar-item'>
    <ReactBootStrap.Nav.Link href="#home"><h3>Home</h3></ReactBootStrap.Nav.Link>
    </Link>    
  
  <Link to="/donation" className='navbar-item'>
    <ReactBootStrap.Nav.Link href="#donation"><h3>Donations</h3></ReactBootStrap.Nav.Link>
  </Link>

  <ReactBootStrap.NavDropdown className='navbar-item' title={user?.email} id="collasible-nav-dropdown">
    <ReactBootStrap.NavDropdown.Item href="#action/3.1" onClick={logout}>Logout</ReactBootStrap.NavDropdown.Item>
  </ReactBootStrap.NavDropdown> 

  </ReactBootStrap.Nav> 

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

