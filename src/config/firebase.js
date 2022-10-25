// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPaNcu_gX6Zny-iKbv8soX7ubGZMnkPxw",
  authDomain: "dts4b-42-final.firebaseapp.com",
  projectId: "dts4b-42-final",
  storageBucket: "dts4b-42-final.appspot.com",
  messagingSenderId: "741171675889",
  appId: "1:741171675889:web:790b592cb61246fd539f50",
  measurementId: "G-KGFNTNS32J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
