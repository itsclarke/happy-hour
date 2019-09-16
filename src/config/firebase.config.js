import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7ZUIJCEj1S7IuQJHF9HVWBQsT8xkdz50",
  authDomain: "happy-helper-1f758.firebaseapp.com",
  databaseURL: "https://happy-helper-1f758.firebaseio.com",
  projectId: "happy-helper-1f758",
  storageBucket: "happy-helper-1f758.appspot.com",
  messagingSenderId: "598966275715",
  appId: "1:598966275715:web:9c135ef9ef9dcdc5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
