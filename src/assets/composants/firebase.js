// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3qJQ0yvFs2eyUVcsraAgjX3Y0YJPGONM",
  authDomain: "samatodolist-react.firebaseapp.com",
  projectId: "samatodolist-react",
  storageBucket: "samatodolist-react.firebasestorage.app",
  messagingSenderId: "627228121820",
  appId: "1:627228121820:web:bdcaf8dfc44241a3603219",
  measurementId: "G-XJ02ZJQ8XY"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firebase Analytics
const analytics = getAnalytics(app);

export { app, analytics };
