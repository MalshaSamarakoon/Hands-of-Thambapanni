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
          <Header/>
        

      {/* className='text-center' */}
        <div className='container'>       

        <div className='col-md-12'>
      
        <div className='section-title'>
                  <h2>Donations</h2>
                  <div>
 

<ColorButton variant="contained" onClick={() => {
         setModalOpen(true);
       }}><h3>Login</h3></ColorButton>    
   </div>

       <div className='page-scroll'>

       <h1>Preservation, development, encouragement and Promotion of local handicrafts with a traditional and cultural value and enhancement of economic and social status of craftsmen.</h1>

<h3>Login here to make donations </h3>
      
               <div>    
  
   </div>     
                      </div>

            <h3>something</h3>
      
            <h3>something</h3>
      
            <h3>something</h3>
      
           
            </div>
      
          </div>
           
          </div>
          
        </div>
    )
}

export default Donations

