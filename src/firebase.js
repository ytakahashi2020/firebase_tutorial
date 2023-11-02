// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYvi7rxCqwntPYVK87A_N20VYSw8Mz8Ic",
  authDomain: "newtest-77f3d.firebaseapp.com",
  projectId: "newtest-77f3d",
  storageBucket: "newtest-77f3d.appspot.com",
  messagingSenderId: "1032491140687",
  appId: "1:1032491140687:web:e50a717bda0a133edf0c3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
