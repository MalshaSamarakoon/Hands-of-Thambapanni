import { Link } from "react-router-dom"; 
import React, { useState } from "react";
import Login from "./Login";

export const Header = (props) => {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header id='header'>
      <div className='intro'>
        
        <div className='overlay'>
          
          <div className='container'>
            
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
             
              <div>
     <button
       className="openModalBtn"
       onClick={() => {
         setModalOpen(true);
       }}
     >
       Open
     </button>

     {modalOpen && <Login setOpenModal={setModalOpen} />}
   </div>
                <h1>
                Hands Of Thambapanni
                  {/* {props.data ? props.data.title : 'Loading'} */}
                  <span></span>
                </h1>
                <p> "Good business leaders create a vision, articulate the vision, passionately own the vision and relentlessly drive it to completion..."</p>
                {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}

                {/* <div>
     
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Login setOpenModal={setModalOpen} />}
    </div>


   */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;