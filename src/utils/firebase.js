// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "travel-blogs-87eaa.firebaseapp.com",
  projectId: "travel-blogs-87eaa",
  storageBucket: "travel-blogs-87eaa.appspot.com",
  messagingSenderId: "282506099493",
  appId: "1:282506099493:web:219dcd36677f02f782f8cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// using test mode so data will be deleted after 30 days