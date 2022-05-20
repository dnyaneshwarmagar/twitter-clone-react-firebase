// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALT-18ukjjFnGc4vrMM4jgYCZIKqqGVq8",
  authDomain: "twitter-clone-21c52.firebaseapp.com",
  projectId: "twitter-clone-21c52",
  storageBucket: "twitter-clone-21c52.appspot.com",
  messagingSenderId: "280596404346",
  appId: "1:280596404346:web:feef6b402104de9b9f43c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firestore

const db = getFirestore(app);

export default db;