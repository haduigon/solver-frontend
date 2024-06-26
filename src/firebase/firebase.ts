/* eslint-disable */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbk2oWzNgTEaKBtfbMdSirTR3wfM0c08E",
  authDomain: "login-test-cff45.firebaseapp.com",
  projectId: "login-test-cff45",
  storageBucket: "login-test-cff45.appspot.com",
  messagingSenderId: "478707345021",
  appId: "1:478707345021:web:58c12728f1a5b41c4fb314",
  measurementId: "G-FJ9CM7JS4N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function logInWithEmailAndPassword(email: string, password: string) {
  try {
    const login = await signInWithEmailAndPassword(auth, email, password);
    return JSON.parse(JSON.stringify(login));
  } catch (error) {
    return error;
  }
}

async function createUserEmailPassword(email: string, password: string) {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error: any) {
    return JSON.parse(JSON.stringify(error));
  }
}

async function logout() {
  await signOut(auth);
}

export {
  logInWithEmailAndPassword,
  createUserEmailPassword,
  logout,
};