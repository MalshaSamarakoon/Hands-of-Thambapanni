import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../database/firebase-config";
import { doc, getDoc } from "@firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function adminLogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
  //     setUser(currentuser);
  //     console.log("Auth", currentuser);
  //     setUserRole("ADMIN");
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (user && user.uid) {
  //     // const docRef = doc(db, "Users", user.uid);
  //     // const docSnap = await getDoc(docRef);

  //     // if (docSnap.exists()) {
  //     //   console.log("Document data:", docSnap.data().Role);
  //     //   setUserRole("ADMIN");
  //     // } else {
  //     //   console.log("test");
  //     //   setUserRole(null);
  //     // }
  //     setUserRole("ADMIN");
  //     console.log("teateateata", userRole);
  //   }
  // }, [user]);

  return (
    <userAuthContext.Provider
      value={{
        user,
        userRole,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        adminLogIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
