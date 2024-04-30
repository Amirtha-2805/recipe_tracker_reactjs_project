// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0eSmLWQEFXnx30eq2-rApOvnuWOhpfeQ",
  authDomain: "react-recipe-tracker.firebaseapp.com",
  projectId: "react-recipe-tracker",
  storageBucket: "react-recipe-tracker.appspot.com",
  messagingSenderId: "61711308434",
  appId: "1:61711308434:web:2d7ca2ccab97e0b1a8384b"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;