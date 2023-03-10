// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl0m6LaX62wLfBo5xjp2G3kVBM65gK5V0",
  authDomain: "clickool.firebaseapp.com",
  projectId: "clickool",
  storageBucket: "clickool.appspot.com",
  messagingSenderId: "444306253644",
  appId: "1:444306253644:web:a29ba90940ec7f892dd1e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



module.exports = {app}; 