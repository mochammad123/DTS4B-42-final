// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNEz4RN_4g_U1kGeXl_8FFVtpiEWfF9KY",
  authDomain: "newsdts4b-reactfinal.firebaseapp.com",
  projectId: "newsdts4b-reactfinal",
  storageBucket: "newsdts4b-reactfinal.appspot.com",
  messagingSenderId: "675254212243",
  appId: "1:675254212243:web:7133acc6bfb93a46741f66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{auth};