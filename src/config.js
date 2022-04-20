// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTVyeLgp4QNLCktchP9Oy-GPn14q88Abs",
  authDomain: "tsf-bank-655f6.firebaseapp.com",
  projectId: "tsf-bank-655f6",
  storageBucket: "tsf-bank-655f6.appspot.com",
  messagingSenderId: "917966894208",
  appId: "1:917966894208:web:b99b7dcea27d4e9b556265",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
