import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBNE3xiPsxUyeXPzyBnX9wA1FzdmMr37mk",
  authDomain: "food-5f75c.firebaseapp.com",
  projectId: "food-5f75c",
  storageBucket: "food-5f75c.appspot.com",
  messagingSenderId: "460599114018",
  appId: "1:460599114018:web:5ba8879866c5eb8dfc0d7b",
});
// const app = initializeApp(firebaseConfig);
const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseConfig);
export { db, auth, storage };
