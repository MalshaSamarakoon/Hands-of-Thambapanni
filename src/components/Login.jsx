import { useState,useRef, useEffect, useCallback  } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from "../database/firebase-config";
import "./Modal.css";



function Login({ setOpenModal }) {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

  
   const login = async  () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
   };
  
   const logout = async () => {
    await signOut(auth);
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
  
        <div className="title">
          <h3> Login </h3>

          <div className="body">
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
             setLoginPassword(event.target.value);
            }}
          />
  
          <button onClick={login}> Login</button>
        </div>
        
  
        <button onClick={logout}> Sign Out </button>

        <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="/register">Sign Up</a>
            </p>
          </div>







        
        
      </div>
        </div>
      </div>
    </div>
    );
  }

  export default Login;