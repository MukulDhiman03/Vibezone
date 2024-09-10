import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXrLlHAkA1ijwXz1KCtLGAlAUFzeRlegE",
  authDomain: "vibezone-bd265.firebaseapp.com",
  projectId: "vibezone-bd265",
  storageBucket: "vibezone-bd265.appspot.com",
  messagingSenderId: "72653690917",
  appId: "1:72653690917:web:b65c956daed6bc88ddc7cc",
  measurementId: "G-S82BZD2PT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
