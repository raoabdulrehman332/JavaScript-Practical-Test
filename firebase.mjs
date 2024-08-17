// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
// import { signInWithEmailAndPasswor } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgJ4JkAwMhw101NVnK99-kFoUojP3Tq3I",
  authDomain: "practical-test-javascript.firebaseapp.com",
  projectId: "practical-test-javascript",
  storageBucket: "practical-test-javascript.appspot.com",
  messagingSenderId: "2361816300",
  appId: "1:2361816300:web:b2a36f611872324527a1c9",
  measurementId: "G-F1CQ1XJDZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{
    app,auth,db
}