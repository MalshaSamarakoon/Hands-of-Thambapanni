import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHdy81J14Ctda_a9f5_SMrs0Gs2dPijgI",
  authDomain: "project-506d7.firebaseapp.com",
  databaseURL: "https://project-506d7-default-rtdb.firebaseio.com",
  projectId: "project-506d7",
  storageBucket: "project-506d7.appspot.com",
  messagingSenderId: "524485329305",
  appId: "1:524485329305:web:6fa99ecb5397afdbbb5308",
  measurementId: "G-B221G8Y78T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


export default app;



