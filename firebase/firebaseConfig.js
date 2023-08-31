import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBptJ5_SlnbN9KBcw9giX3E1zjz7zqBGcg",
  authDomain: "e-commerce-32d92.firebaseapp.com",
  projectId: "e-commerce-32d92",
  storageBucket: "e-commerce-32d92.appspot.com",
  messagingSenderId: "14294992967",
  appId: "1:14294992967:web:48861cf469e73fec994962",
  measurementId: "G-5Q2TESWDQ4"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const auth = getAuth(app)