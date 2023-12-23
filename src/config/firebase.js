
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5Mya9shPN46_2gK6jw-ja0wgbHZK2Dh0",
  authDomain: "movie-7e5b6.firebaseapp.com",
  projectId: "movie-7e5b6",
  storageBucket: "movie-7e5b6.appspot.com",
  messagingSenderId: "493668761273",
  appId: "1:493668761273:web:54102ba76d31be2af86568",
  measurementId: "G-55P178XH7D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);