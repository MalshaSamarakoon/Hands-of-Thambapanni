import React from "react";
import * as ReactBootStrap from "react-bootstrap";

import logo from "./RACLogo.png";
import { auth } from ".././../database/firebase-config";
import { signOut } from "firebase/auth";
import profile from "./profile.png";
import { useUserAuth } from "../../context/UserAuthContext";

export default function Topbar() {

  const { user } = useUserAuth();

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
         <div>
        <img src={logo} width="200px" height="80px" alt="" />
        </div>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
          <img
              src={user?.photoURL != null ? user?.photoURL : profile}
              width="35px"
              height="35px"
              alt=""
            />

            <ReactBootStrap.NavDropdown
              className="navbar-item"
              title={user?.displayName != "" ? user?.displayName : profile}
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#" onClick={logout}>
                Logout
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>          </div>
        </div>
      </div>
    </div>
    
  );
}
