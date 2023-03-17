import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8VzszkAITKSL_8rw1BjRk6pxfrlCx4Xs",
  authDomain: "movies-61494.firebaseapp.com",
  projectId: "movies-61494",
  storageBucket: "movies-61494.appspot.com",
  messagingSenderId: "685365230147",
  appId: "1:685365230147:web:c04e30064993aefea6f2f6",
  measurementId: "G-S8FVN3YXGW"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);