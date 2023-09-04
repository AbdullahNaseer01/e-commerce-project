// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import {getAuth} from "firebase/auth"
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBptJ5_SlnbN9KBcw9giX3E1zjz7zqBGcg",
//   authDomain: "e-commerce-32d92.firebaseapp.com",
//   projectId: "e-commerce-32d92",
//   storageBucket: "e-commerce-32d92.appspot.com",
//   messagingSenderId: "14294992967",
//   appId: "1:14294992967:web:48861cf469e73fec994962",
//   measurementId: "G-5Q2TESWDQ4"
// };


// export const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app)
// export const auth = getAuth(app)



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDB7F9TDbfPzNbFTkk-BmpvemIPmKgj97g",
  authDomain: "mycommerce-67280.firebaseapp.com",
  projectId: "mycommerce-67280",
  storageBucket: "mycommerce-67280.appspot.com",
  messagingSenderId: "853674846443",
  appId: "1:853674846443:web:bc50a0c02e6ebd25a7b6ae"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
