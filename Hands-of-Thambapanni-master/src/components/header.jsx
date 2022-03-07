import { Link } from "react-router-dom"; 
import React, { useState } from "react";
import Login from "./Login";
import Donation from "./donations";


export const Header = (props) => {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header id='header' style={{padding:'0px'}}>
      <div className='intro'>
        
        <div className='overlay'>
          
          <div className='container'>
            
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              {/* {modalOpen && <Login setOpenModal={setModalOpen} />}
              <div>
     <button
       className="openModalBtn"
       onClick={() => {
         setModalOpen(true);
       }}
     >
       Open
     </button> 
            </div> */}
            
                <h1>Hands Of Thambapanni</h1>
                <p> "Good business leaders create a vision, articulate the vision, passionately own the vision and relentlessly drive it to completion..."</p>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;