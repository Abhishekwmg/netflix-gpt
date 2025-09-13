// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3ggCr-QdJdRt5taIrM8jKsCFDUg4wyGE",
    authDomain: "netflixgpt-27503.firebaseapp.com",
    projectId: "netflixgpt-27503",
    storageBucket: "netflixgpt-27503.firebasestorage.app",
    messagingSenderId: "842321330629",
    appId: "1:842321330629:web:6315b69fd02da419358bac",
    measurementId: "G-002XY5G1L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

//npm install -g firebase-tools