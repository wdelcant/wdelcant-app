// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "wdelcantoapp.firebaseapp.com",
  projectId: "wdelcantoapp",
  storageBucket: "wdelcantoapp.appspot.com",
  messagingSenderId: "998226283395",
  appId: "1:998226283395:web:9275d324e0780f1765c4b6",
  measurementId: "G-5RF0Q4YTLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export default db;