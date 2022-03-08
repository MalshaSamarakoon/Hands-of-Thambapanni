import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import logo from "./RACLogo.png";


export default function Topbar() {
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
            <NotificationsNone />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    
  );
}
