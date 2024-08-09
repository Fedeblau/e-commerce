// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyA-DU7Am2S9vGfmXT9xbGSrTNtMumH7M-4",
  authDomain: "react-62335.firebaseapp.com",
  projectId: "react-62335",
  storageBucket: "react-62335.appspot.com",
  messagingSenderId: "531416905241",
  appId: "1:531416905241:web:b1147d50d421a667e41c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)