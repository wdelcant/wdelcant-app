// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* Una forma de ocultar la clave API del público. */
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: 'wdelcantoapp',
  storageBucket: 'wdelcantoapp.appspot.com',
  messagingSenderId: '998226283395',
  appId: '1:998226283395:web:9275d324e0780f1765c4b6',
  measurementId: 'G-5RF0Q4YTLV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Auth
export const auth = getAuth(app);

export default db;
