import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8EWkrzXcSduYsjYCob6pmoH05z6Sui5U",
    authDomain: "auto-guide-1e2b6.firebaseapp.com",
    databaseURL: "https://auto-guide-1e2b6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "auto-guide-1e2b6",
    storageBucket: "auto-guide-1e2b6.appspot.com",
    messagingSenderId: "491542920394",
    appId: "1:491542920394:web:3b773000aa8581f6e60833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);