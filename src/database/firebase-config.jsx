import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "@firebase/firestore";

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
export const db = getFirestore(app);
export const auth = getAuth(app);


export default app;



