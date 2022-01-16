import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDORl_IzISIEAP9LnTBQPYr054gHMGxuLc",
    authDomain: "handsofthambapanni.firebaseapp.com",
    projectId: "handsofthambapanni",
    storageBucket: "handsofthambapanni.appspot.com",
    messagingSenderId: "288518372281",
    appId: "1:288518372281:web:06e7bbc520569d4b479468",
    measurementId: "G-WBYJ8BJ2VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;



// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyDORl_IzISIEAP9LnTBQPYr054gHMGxuLc",
//     authDomain: "handsofthambapanni.firebaseapp.com",
//     projectId: "handsofthambapanni",
//     storageBucket: "handsofthambapanni.appspot.com",
//     messagingSenderId: "288518372281",
//     appId: "1:288518372281:web:06e7bbc520569d4b479468",
//     measurementId: "G-WBYJ8BJ2VF"
//   };

//   const app = initializeApp(firebaseConfig);  //INITIALIZING FIREBASE CONFIGR

//   export const auth = getAuth(app)  // PASS app INSIDE GETAUTH FUNCTION
// // auth IS FOR createUserWithEmailAndPassword IN rgister.jsx
//   export default app;

  
//   // export const firestore = firebase.firestore();

//   // export const createUserDocument = async (user, additionalData) => {
//   //   if (!user) return;

//   //   const userRef = firestore.doc('users/${user.uid}');


//   //   if(!snapshot.exists){
//   //     const {email}=user;
//   //     const {name} = additionalData;

//   //     try{
//   //       userRef.set({
//   //         name,
//   //         email,
//   //         createdAt:newDate(),
//   //       });
//   //     }catch (error){
//   //       console.log('Error',error)
//   //     }
//   //   }
//   // }