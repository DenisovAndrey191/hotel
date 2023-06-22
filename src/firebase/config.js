import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb2MvZEqUq6rZ4vm59yoruXGlDJpoee14",
  authDomain: "hotel-reg-25a76.firebaseapp.com",
  projectId: "hotel-reg-25a76",
  storageBucket: "hotel-reg-25a76.appspot.com",
  messagingSenderId: "433505453552",
  appId: "1:433505453552:web:0e77c25c25f6af815a4935"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)