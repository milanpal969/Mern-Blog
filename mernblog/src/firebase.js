// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-48e0a.firebaseapp.com",
  projectId: "mern-blog-48e0a",
  storageBucket: "mern-blog-48e0a.appspot.com",
  messagingSenderId: "211463878879",
  appId: "1:211463878879:web:6dfe55d065c3d64d92516a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);