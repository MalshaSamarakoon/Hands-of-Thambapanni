import { useState,useRef, useEffect, useCallback  } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from "../database/firebase-config";
import "./Modal.css";



function Register({ setOpenModal }) {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
  
    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  
   const register = async () => {
  
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  
   };
  
  
  

    
    return (
      <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          
      <div className="App">
        <button
            onClick={() => {
              setOpenModal(false);
            }}
          >  X </button>
  
      

        <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
          </div>





        
         
          <div>
          <h3> Register User </h3>
          <input
            placeholder="Email..." 
            onChange={(event) => { 
              setRegisterEmail(event.target.value); }}
          />
  
          <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
  
          <button onClick={register}> Create User</button>
       
        </div>
        
      </div>
        </div>
      </div>
    );
  }

  export default Register;