// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRI264nrmEQndPE5EfHaz6zv3pwpX1OvI",
  authDomain: "ejounal-system.firebaseapp.com",
  projectId: "ejounal-system",
  storageBucket: "ejounal-system.appspot.com",
  messagingSenderId: "1038053853526",
  appId: "1:1038053853526:web:84b4148e83f410b4d3aef7",
  measurementId: "G-R217NMN63Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
