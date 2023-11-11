// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/fisestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtH0q_ctUTJWCP5ZhJBmcpeEEQvkWp4oc",
  authDomain: "insta-auth-ca60b.firebaseapp.com",
  projectId: "insta-auth-ca60b",
  storageBucket: "insta-auth-ca60b.appspot.com",
  messagingSenderId: "245078118757",
  appId: "1:245078118757:web:10a225962c671140f9d18c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }