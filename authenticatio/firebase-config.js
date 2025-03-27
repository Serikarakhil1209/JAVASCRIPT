// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRsUjWbmn0lqPjqDyvlN5KtrEkf6iJGww",
  authDomain: "newproject-bb92e.firebaseapp.com",
  projectId: "newproject-bb92e",
  storageBucket: "newproject-bb92e.appspot.com",
  messagingSenderId: "332649247855",
  appId: "1:332649247855:web:f1110e36a61343131ec99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { auth, db };
