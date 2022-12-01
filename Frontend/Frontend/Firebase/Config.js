// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLtzI2cl5NQpsiIkgu6A3b8Aor_I4ZZZg",
  authDomain: "imageprocessingproject-425ee.firebaseapp.com",
  projectId: "imageprocessingproject-425ee",
  storageBucket: "imageprocessingproject-425ee.appspot.com",
  messagingSenderId: "498394873686",
  appId: "1:498394873686:web:628be6b9a0943ca3e520f7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);
export const auth = getAuth();
const storage = getStorage();

// getDocs firebase function to get documents from firestore
export { storage };
