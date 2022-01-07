import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react'

import { useState, useRef, useEffect } from "react";
// import { Spring } from "react-spring";

function About() {
    return(
      
      <div id='about'>
        {/* className='text-center' */}
        <div className='container'  >
          <div className='row' style={aboutStyle1}>
            <div className='col-md-5' >

              <div className='section-title' >
                <h2 style={{color:'white'}}>What Is “Hands of Thambapanni”?</h2>
                <p style={paraStyle1}>Hands of Thambapanni is the second phase of the project See Lanka, launched by the Rotaract Club of Uva Wellassa University - Badulla. It was launched with the aim of assisting  The Small and Medium Enterprises  in the tourism sector in Sri Lanka, which were affected by the pandemic. To make See Lanka all the more impactful, the Sri Lanka Tourism Promotion Bureau (SLTPB) and The Hotels Association of Sri Lanka joined hands with the Rotaract Club of Uva Wellassa University - Badulla. After the successful and award-winning project See Lanka, Hands of Thambapanni was launched to further the help given to SMEs, to help them truly stand up on their own. Hands of Thambapanni helps SMEs with product development and augmenting  market space, by exposing them to online platforms and new demographics.</p>
              
              </div>

            </div>
            <div className='col-md-2'></div>
            <div className='col-md-5'>
              <div className='section-title'>
                <h2 style={{color:'white'}}>Why “Hands of Thambapanni”?</h2>
                <p style={paraStyle1}>Hands of Thambapanni is the best way to extend your help to those who run Sri Lanka's economy; the Small and Medium Scale Entrepreneurs. The truly working hands of Sri Lanka need support in these hard times, and Hands of Thambapanni is the best conduit which connects the current socially-distanced world to the courageous SMEs that strive hard to keep going</p>

              </div>

            </div>
          </div>

        </div>
      </div>
      
    );
    }

    // const aboutStyle = {
    //   background: 'steelblue',
    //   display: 'flex',
    //   justifycontent: 'space-between',
    //     backgroundimage: "linear-gradient(to right, steelblue , yellow);",
    //       }

    const aboutStyle1 = {
      display: 'flex',
      justifycontent: 'space-between',
          }

    const wawStyle = {
      // padding: '20px 60px 20px 20px',
      background: 'pink',
    }

    const paraStyle1 = {
      color: '#f8fcfc',
      marginright: '1.5rem',
      textAlign: 'justify',
    }


    export default About;