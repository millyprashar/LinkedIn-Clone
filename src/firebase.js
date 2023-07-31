// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBDB8cCcMbgKRzUfcR67alLVUf6AyjpefU",
    authDomain: "linkedin-clone-6716d.firebaseapp.com",
    projectId: "linkedin-clone-6716d",
    storageBucket: "linkedin-clone-6716d.appspot.com",
    messagingSenderId: "661056463138",
    appId: "1:661056463138:web:8b94e12099eb57836f057b",
    measurementId: "G-39Y1Z2K5TN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };