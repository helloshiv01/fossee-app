import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDv7epuAg-h9c_d70QoX9fenfTkBIHX2yw",
  authDomain: "fir-cad-63c07.firebaseapp.com",
  projectId: "fir-cad-63c07",
  storageBucket: "fir-cad-63c07.appspot.com",
  messagingSenderId: "341709159829",
  appId: "1:341709159829:web:b772ea975ad52f80d74a9c",
  measurementId: "G-223DK111B6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);