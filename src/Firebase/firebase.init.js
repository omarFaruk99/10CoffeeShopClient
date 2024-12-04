// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOgmhjDmC53y3Jye60C9Ob3S5_b4lmIVY",
  authDomain: "coffeeshop-887c3.firebaseapp.com",
  projectId: "coffeeshop-887c3",
  storageBucket: "coffeeshop-887c3.firebasestorage.app",
  messagingSenderId: "438286502300",
  appId: "1:438286502300:web:71b6d1e7ef4cc612d2e059",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
