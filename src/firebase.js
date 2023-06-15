
//import "firebase/firebase-app"
import "firebase/auth"
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPqd7genhE_GTh59UgCANqfDVpvvYvz-M",
  authDomain: "chat-react-firebase-storage.firebaseapp.com",
  projectId: "chat-react-firebase-storage",
  storageBucket: "chat-react-firebase-storage.appspot.com",
  messagingSenderId: "196709058247",
  appId: "1:196709058247:web:e867cc426b39ef4df5e0e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = firebase.firestore();
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export{db, auth, provider}