// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebase } from "@react-native-firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5cbJVcOMxYyEpq3BFoDyRZNzFqYwuonI",
  authDomain: "fir-operations-a76b7.firebaseapp.com",
  databaseURL: "https://fir-operations-a76b7-default-rtdb.firebaseio.com",
  projectId: "fir-operations-a76b7",
  storageBucket: "fir-operations-a76b7.appspot.com",
  messagingSenderId: "459637200410",
  appId: "1:459637200410:web:b2108400e68cd905b9a3a3",
  measurementId: "G-7M6P3Z4CCL",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
firebase.firestore();
const analytics = getAnalytics(app);

export default firebaseapp;
