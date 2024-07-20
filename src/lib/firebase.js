// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeoAuUOfIfgLCpCvLEDN3_5Fvya0GDTL8",
  authDomain: "group-chat-react-firebase.firebaseapp.com",
  projectId: "group-chat-react-firebase",
  storageBucket: "group-chat-react-firebase.appspot.com",
  messagingSenderId: "1000515043163",
  appId: "1:1000515043163:web:87660b1843f73cc433a47e",
  measurementId: "G-D55ZL7F11H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
