import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGNYcAPId-ZOxBCtA1FNMlgEJRw57NyCU",
  authDomain: "string-haven-9ce17.firebaseapp.com",
  projectId: "string-haven-9ce17",
  storageBucket: "string-haven-9ce17.appspot.com",
  messagingSenderId: "708885728226",
  appId: "1:708885728226:web:b43e78e32d9ef4332c47bb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
