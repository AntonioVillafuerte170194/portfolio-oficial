// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNDT_s-X5lciC2RM2tPfZTmsBEaPlzHYQ",
  authDomain: "portfolio-crud-b38d0.firebaseapp.com",
  projectId: "portfolio-crud-b38d0",
  storageBucket: "portfolio-crud-b38d0.appspot.com",
  messagingSenderId: "30998119040",
  appId: "1:30998119040:web:ec8f57970a047dc0145c65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);