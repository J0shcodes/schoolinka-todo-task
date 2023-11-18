// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdfHv8-_1J1ADAEGWRiQiEfjO0jEppfJs",
  authDomain: "schoolinka-todo.firebaseapp.com",
  projectId: "schoolinka-todo",
  storageBucket: "schoolinka-todo.appspot.com",
  messagingSenderId: "51845659018",
  appId: "1:51845659018:web:ef3a3fd84068c9b48db073",
  measurementId: "G-LV195R3NM2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireStore(app);

export {db}
