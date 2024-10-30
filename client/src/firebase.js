// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-22c24.firebaseapp.com",
  projectId: "mern-estate-22c24",
  storageBucket: "mern-estate-22c24.appspot.com",
  messagingSenderId: "766250489256",
  appId: "1:766250489256:web:aa898e6be9d327d505b99d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);