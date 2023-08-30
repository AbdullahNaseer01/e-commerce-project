// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCl_ShoJcK3gfyrbyQVgOslNeixNNyBmWI",
//   authDomain: "task-management-app-16ef6.firebaseapp.com",
//   projectId: "task-management-app-16ef6",
//   storageBucket: "task-management-app-16ef6.appspot.com",
//   messagingSenderId: "328893447976",
//   appId: "1:328893447976:web:2f164d9d82722974cb9a1d",
//   measurementId: "G-ZGBT8W3HG6"
// };


// export const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app)
// export const auth = getAuth(app)
// // const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBptJ5_SlnbN9KBcw9giX3E1zjz7zqBGcg",
  authDomain: "e-commerce-32d92.firebaseapp.com",
  projectId: "e-commerce-32d92",
  storageBucket: "e-commerce-32d92.appspot.com",
  messagingSenderId: "14294992967",
  appId: "1:14294992967:web:48861cf469e73fec994962",
  measurementId: "G-5Q2TESWDQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);