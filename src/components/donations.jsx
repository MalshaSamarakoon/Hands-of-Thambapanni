import Login from "./Login";
import React, { useState } from "react";
import { alpha, makeStyles } from '@material-ui/core/styles';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from "../database/firebase-config";
import { Header } from "./header";
import { Navigation } from "./navigation";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


import HomeCarousel from '../HomeCarousel';




export const Donations = (props) => {

  const [modalOpen, setModalOpen] = useState(false);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

    return (
      <div id='donations' >   

          {modalOpen && <Login setOpenModal={setModalOpen} />}
        <Navigation/>
        <div><Header/></div>
        

      {/* className='text-center' */}
        <div className='container'>       

        <div className='col-md-12'>
      
        <div className='section-title'>
                  <h2>Donations</h2>
                  <div>
 

<Button variant="contained"  color="success" onClick={() => {
         setModalOpen(true);
       }}><h3>Login</h3></Button>    
   </div>

       <div className='page-scroll'>

       <h1>Login here to make donations</h1>


     <div>    
  
   </div>     
    </div>
    </div>
     </div>
      </div>
          
        </div>
    )
}

export default Donations

