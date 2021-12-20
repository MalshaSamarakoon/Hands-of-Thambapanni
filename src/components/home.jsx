import React from 'react'

import Profile from "./profiles";
import About from "./about";
import Features from "./features";
import { Contact } from "./contact";

function Home() {
    return (
        <div>
<div>  <About/></div>
<div>  <Profile/></div>
<div > <Features/></div>
<div > <Contact/></div>    
        </div>
    )
}

export default Home
