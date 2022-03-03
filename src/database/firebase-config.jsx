import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage';
import {getFirestore } from "@firebase/firestore";


//-------------------Hands-of-Thambapanni (old)

const firebaseConfig = {
  apiKey: "AIzaSyDORl_IzISIEAP9LnTBQPYr054gHMGxuLc",
    authDomain: "handsofthambapanni.firebaseapp.com",
    projectId: "handsofthambapanni",
    storageBucket: "handsofthambapanni.appspot.com",
    messagingSenderId: "288518372281",
    appId: "1:288518372281:web:06e7bbc520569d4b479468",
    measurementId: "G-WBYJ8BJ2VF"
};



//----------------------HOT-Rott (new)

// const firebaseConfig = {
//   apiKey: "AIzaSyDt-P74LG6y5fUjjPDPf_m4EWm5uQ537SU",
//   authDomain: "hot-rot.firebaseapp.com",
//   projectId: "hot-rot",
//   storageBucket: "hot-rot.appspot.com",
//   messagingSenderId: "44108530183",
//   appId: "1:44108530183:web:24f75cb56b7d85ebb460a2",
//   measurementId: "G-V7VPCE8YV9"
// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const storage = getStorage(app);

export default app;


