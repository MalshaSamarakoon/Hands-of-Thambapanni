import { Link } from "react-router-dom"; 
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { alpha, makeStyles } from '@material-ui/core/styles';
import{Button, Modal} from 'react-bootstrap'


import SearchBar from "./SearchBar";
import BookData from "../Data.json";

import Login from "./Login";

export const Navigation = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}


            
          </button>
          <Link to='/' className='navbar-brand page-scroll'>
          Hands Of Thambapanni
                </Link>
        
        </div>

        {/* <div>
           <SearchBar placeholder="Search Enterprise..." data={BookData} />
        </div> */}

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
         
          <li>
              <Link to='/' className='page-scroll'>
                Home
              </Link>
            </li>
            <li>
              <HashLink to='/paypal' className='page-scroll'>
                Donations
              </HashLink>
            </li>
            <li>
              <HashLink to='/profile' className='page-scroll'>
                Profiles
              </HashLink>
            </li>

            <li>
            <div className='page-scroll'>
                  <button
                    className="openModalBtn"
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    Login
                  </button>

                  {modalOpen && <Login setOpenModal={setModalOpen} />}
                </div>
            </li>

            <li>              
              <SearchBar placeholder="Search Enterprise..." data={BookData} />
            </li>
            


          </ul>
        </div>
      </div>
    </nav>
  )
}
