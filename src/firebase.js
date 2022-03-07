// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpsqxUut_rbSxdmz-YVlz7pA0iuegTypo",
  authDomain: "linkedin-lite-fe6ac.firebaseapp.com",
  projectId: "linkedin-lite-fe6ac",
  storageBucket: "linkedin-lite-fe6ac.appspot.com",
  messagingSenderId: "396674583981",
  appId: "1:396674583981:web:e67cd9258752e952f7e524"
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);
 
export const auth = getAuth(app)
 
