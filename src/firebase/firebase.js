import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNE3xiPsxUyeXPzyBnX9wA1FzdmMr37mk",
  authDomain: "food-5f75c.firebaseapp.com",
  projectId: "food-5f75c",
  storageBucket: "food-5f75c.appspot.com",
  messagingSenderId: "460599114018",
  appId: "1:460599114018:web:5ba8879866c5eb8dfc0d7b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

