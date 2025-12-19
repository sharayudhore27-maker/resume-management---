// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHFRcA0wOPjWRC4Er6WepE9y7Xo-7LM_8",
  authDomain: "resume-management-system-a08e8.firebaseapp.com",
  projectId: "resume-management-system-a08e8",
  storageBucket: "resume-management-system-a08e8.firebasestorage.app",
  messagingSenderId: "598577009220",
  appId: "1:598577009220:web:456e143e398f6c396e6211",
  measurementId: "G-2HT2PVYSZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };