import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt-P74LG6y5fUjjPDPf_m4EWm5uQ537SU",
  authDomain: "hot-rot.firebaseapp.com",
  projectId: "hot-rot",
  storageBucket: "hot-rot.appspot.com",
  messagingSenderId: "44108530183",
  appId: "1:44108530183:web:24f75cb56b7d85ebb460a2",
  measurementId: "G-V7VPCE8YV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
