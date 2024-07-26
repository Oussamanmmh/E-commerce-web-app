import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDzMg3XDcwIBEFPpk4AC9XDkWkPiI5tMiU",
    authDomain: "e-commerce-web-app-474de.firebaseapp.com",
    projectId: "e-commerce-web-app-474de",
    storageBucket: "e-commerce-web-app-474de.appspot.com",
    messagingSenderId: "150727797306",
    appId: "1:150727797306:web:c3688233f9c1324e9a2303",
    measurementId: "G-LE1PE10P79"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app)
  const db = getFirestore(app);

  export {app, auth , storage ,db} 