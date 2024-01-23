// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

export const signUp = (userInfo) => {
  const { email, password } = userInfo;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert('User Succesfully Registered')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(error.message)
    });
}

export const signIn = (userInfo) => {
  const { email, password } = userInfo;
  signInWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    alert('Logged In')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
}
