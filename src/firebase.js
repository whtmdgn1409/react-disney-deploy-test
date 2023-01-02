// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi8JEtuk7zgHLd1VHjiED-KeNYDn4Y-7I",
  authDomain: "react-disney-app-c3563.firebaseapp.com",
  projectId: "react-disney-app-c3563",
  storageBucket: "react-disney-app-c3563.appspot.com",
  messagingSenderId: "480503244967",
  appId: "1:480503244967:web:575875e5fbadef6fc11382",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
