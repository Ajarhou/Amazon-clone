import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_API_FIREBASE_KEY,
  authDomain: process.env.REACT_API_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_API_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_API_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_API_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
