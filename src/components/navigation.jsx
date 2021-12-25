import * as React from 'react';

import logo from '../logo.png';
import profile from '../profile.png'

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navigation = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  //
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  //
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  //
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={logo} width="50px" height="50px" alt=""/>
          <a style={{height: '35px', fontSize: "15px"}} className="navbar-brand fw-bold" href="#">Hands Of Thumbapanni</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a className="nav-link active px-13 text-uppercase" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link active px-13 text-uppercase" aria-current="page" href="#">Donation</a>
              </li>

            </ul>
            <div className="d-flex align-items-center">
              <form className="d-flex pe-3">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <img src={profile} width="35px" height="35px" alt=""/>
            </div>
          </div>
        </div>
      </nav>
  );
};
