// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import { initializeAuth, getReacNativePersistance } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJ0Qu4CyW4oe_GbKA7dUCLnTlJp9Szjz0",
    authDomain: "orvalla.firebaseapp.com",
    projectId: "orvalla",
    storageBucket: "orvalla.firebasestorage.app",
    messagingSenderId: "410398057665",
    appId: "1:410398057665:web:2be261461331f6b63ee040",
    measurementId: "G-0XRCD1VDVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);