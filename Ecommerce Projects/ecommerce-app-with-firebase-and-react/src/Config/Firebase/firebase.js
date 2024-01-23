// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu4mCqpXNch1YTOdQrVPOi0vDNIokA_pk",
  authDomain: "ecommerce-app-592b9.firebaseapp.com",
  projectId: "ecommerce-app-592b9",
  storageBucket: "ecommerce-app-592b9.appspot.com",
  messagingSenderId: "678389830289",
  appId: "1:678389830289:web:d71110cd21ffedd499a530",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
