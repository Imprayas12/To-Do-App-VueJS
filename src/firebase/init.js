// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvC7QCbxuNi3XK-X2sLKSrWsqDgr8sJZ0",
  authDomain: "vuecrudapp-8617b.firebaseapp.com",
  projectId: "vuecrudapp-8617b",
  storageBucket: "vuecrudapp-8617b.appspot.com",
  messagingSenderId: "1055717378762",
  appId: "1:1055717378762:web:843860068402cdfbd28233",
  measurementId: "G-75KQEM9B8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export default db
export const auth = getAuth()