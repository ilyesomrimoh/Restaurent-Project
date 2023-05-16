// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCwv-aQYgvWDgR_0UloDcbLMFqHFLytoOM",
  authDomain: "restaurant-marketplace-60929.firebaseapp.com",
  projectId: "restaurant-marketplace-60929",
  storageBucket: "restaurant-marketplace-60929.appspot.com",
  messagingSenderId: "90174131186",
  appId: "1:90174131186:web:6adc6d3e6033694f6b796b",
  measurementId: "G-15K0RMTDZY"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider  } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDl0m6LaX62wLfBo5xjp2G3kVBM65gK5V0",
//   authDomain: "clickool.firebaseapp.com",
//   projectId: "clickool",
//   storageBucket: "clickool.appspot.com",
//   messagingSenderId: "444306253644",
//   appId: "1:444306253644:web:a29ba90940ec7f892dd1e9"
// };



// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
