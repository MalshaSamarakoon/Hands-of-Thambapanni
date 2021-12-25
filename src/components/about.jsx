
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react'

import { useState, useRef, useEffect } from "react";
// import { Spring } from "react-spring";

function About() {
    return(
      
      <div id='about' style={aboutStyle}>
        {/* className='text-center' */}
        <div className='container'  >
          <div className='row' style={aboutStyle1}>
            <div className='col-md-5' >

              <div className='section-title' >
                <h2 style={{color:'white'}}>Who are we?</h2>
                <p style={paraStyle1}>Our story begins amidst a raging pandemic, when the entire world suddenly came to a stop. We deeply felt the need to reach out and help the tourism sector in Sri Lanka, which was in a piteous condition. It didn't take much longer for us to realize that there are others needing our help too. We, the team Hands of Thambapanni, are a bunch of dedicated and brilliant Rotaractors from the Rotaract Club of Uva Wellassa University - Badulla, striving to revamp the economic conditions of Small and Medium Scale Enterprises affiliated with the tourism industry. We're coupled with the passion to help SMEs and raw talent to drive this project towards success.</p>
              
              </div>

            </div>
            <div className='col-md-2'></div>
            <div className='col-md-5'>
              <div className='section-title'>
                <h2>What do we do?</h2>
                <p style={paraStyle1}>Well, at the moment we're trying our very best to help and support SMEs related to the tourism industry to stand back on their feet. We're using our creative and artistic skills and our buzzing internet presence to open up struggling SMEs to the world!</p>

              </div>

            </div>
          </div>

        </div>
      </div>
      
    );
    }

    const aboutStyle = {
      background: 'steelblue',
      // display: 'flex',
      // justifycontent: 'space-between',
        backgroundimage: "linear-gradient(to right, steelblue , yellow);",
          }

    const aboutStyle1 = {
      display: 'flex',
      justifycontent: 'space-between',
          }

    const wawStyle = {
      // padding: '20px 60px 20px 20px',
      background: 'pink',
    }

    const paraStyle1 = {
      color: 'black',
      marginright: '1.5rem',
      textAlign: 'justify',
    }


    export default About;
    