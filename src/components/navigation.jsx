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

import logo from '../logo.png';
import profile from '../profile.png'

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{margin:'0px'}}>
      <div className="container-fluid">
        <img src={logo} width="50px" height="50px" alt=""/>
        <a style={{height: '35px', fontSize: "15px"}} className="navbar-brand fw-bold" href="#">Hands Of Thambapanni</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className="nav-link active px-13 text-uppercase" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link active px-13 text-uppercase" aria-current="page" href="/donation">Donations</a>
            </li>

          </ul>
          <div className="d-flex align-items-center">
            <form className="d-flex pe-3">
            <SearchBar placeholder="Search Enterprise..." data={BookData} />
            </form>
            <img src={profile} width="35px" height="35px" alt=""/>

            <ReactBootStrap.NavDropdown className='navbar-item' title={user?.email} id="collasible-nav-dropdown">
    <ReactBootStrap.NavDropdown.Item href="#action/3.1" onClick={logout}>Logout</ReactBootStrap.NavDropdown.Item>
  </ReactBootStrap.NavDropdown> 


          </div>
        </div>
      </div>
    </nav>
    )
}