import React from 'react'

import Profile from "./profiles";
import About from "./about";
import Features from "./features";
import { Contact } from "./contact";

import { Navigation } from "./navigation";
import {Header} from "./header";


function Home() {
    return (
        <div>
<div>  <About/></div>

<div><Navigation /></div>
<div>  <Header/></div>

<div>  <Profile/></div>
<div > <Features/></div>
<div > <Contact/></div>    
        </div>
    )
}

export default Home
