// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()

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

export const signUp = async (userInfo) => {
  try {
    const { firstName, lastName, email, password } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(db, "users"), {
      firstName, lastName, email,
    });
    alert('User Succesfully Registered')
    return (true)
  } catch (e) {
    alert(e.message)
    throw (e)
  };
}


export const signIn = async (userInfo) => {
  try {
    const { email, password } = userInfo;
    await signInWithEmailAndPassword(auth, email, password)
    alert('Logged In')
    return (true)
  } catch (e) {
    alert(e.message)
    throw (e)
  }
}

export const getData = async (userInfo) => {
  const querySnapshot = await getDocs(collection, (db, 'ads'))
  const ads = []
  querySnapshot.forEach((doc) => {
    const ad = []
    ad.id = doc.id
    ads.push(ad)
  })
  return ads
}