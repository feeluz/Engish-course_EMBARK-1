
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  setPersistence
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBxcoT8ALj6ftuY-P-uTXmnm3AwGSGx8RI",
  authDomain: "ingles-na-barca.firebaseapp.com",
  projectId: "ingles-na-barca",
  storageBucket: "ingles-na-barca.firebasestorage.app",
  messagingSenderId: "871046069777",
  appId: "1:871046069777:web:cb9f19ea562bd704cefbb0",
  measurementId: "G-GG2C03VFVH"
};

export function hasFirebaseConfig() {
  return true;
}

export let app = initializeApp(firebaseConfig);
export let auth = getAuth(app);

await setPersistence(auth, browserLocalPersistence);

export {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};
