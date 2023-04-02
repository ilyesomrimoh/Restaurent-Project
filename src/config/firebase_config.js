import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl0m6LaX62wLfBo5xjp2G3kVBM65gK5V0",
  authDomain: "clickool.firebaseapp.com",
  projectId: "clickool",
  storageBucket: "clickool.appspot.com",
  messagingSenderId: "444306253644",
  appId: "1:444306253644:web:a29ba90940ec7f892dd1e9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
