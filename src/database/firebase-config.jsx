import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDORl_IzISIEAP9LnTBQPYr054gHMGxuLc",
    authDomain: "handsofthambapanni.firebaseapp.com",
    projectId: "handsofthambapanni",
    storageBucket: "handsofthambapanni.appspot.com",
    messagingSenderId: "288518372281",
    appId: "1:288518372281:web:06e7bbc520569d4b479468",
    measurementId: "G-WBYJ8BJ2VF"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)