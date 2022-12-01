// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJvn68EJT4NNa3VfW_2i-k_WLvRKzCsko",
  authDomain: "young-talent-4052f.firebaseapp.com",
  projectId: "young-talent-4052f",
  storageBucket: "young-talent-4052f.appspot.com",
  messagingSenderId: "910163052361",
  appId: "1:910163052361:web:060e53de24c0a403a6bc98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
