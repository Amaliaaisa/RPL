// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeKhEdbvgIhP8L0e3SJiKmXtsWjOyWzVQ",
    authDomain: "aplikasi-input-nilai-mah-f8f4d.firebaseapp.com",
    projectId: "aplikasi-input-nilai-mah-f8f4d",
    storageBucket: "aplikasi-input-nilai-mah-f8f4d.firebasestorage.app",
    messagingSenderId: "1044936586167",
    appId: "1:1044936586167:web:d60bbe432b6d15ac636e32",
    measurementId: "G-MTBWLHP546"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = getFirestore(app);

// Export untuk digunakan di file lain
export { db, collection, addDoc, getDocs, orderBy, query };