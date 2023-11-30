// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCil4QYhVsc1_3Q3oyOsznQEJChVMTFTIE",
    authDomain: "insta-auth-1a7fa.firebaseapp.com",
    projectId: "insta-auth-1a7fa",
    storageBucket: "insta-auth-1a7fa.appspot.com",
    messagingSenderId: "1086708716778",
    appId: "1:1086708716778:web:f7dde00b3106415dd33393"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }