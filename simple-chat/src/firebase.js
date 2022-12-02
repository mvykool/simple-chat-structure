// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
import { getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-W5FT_IfJ860uWBdi6lFc9Of7qPA-KtI",
  authDomain: "chat-initial-f9ac2.firebaseapp.com",
  projectId: "chat-initial-f9ac2",
  storageBucket: "chat-initial-f9ac2.appspot.com",
  messagingSenderId: "337792263720",
  appId: "1:337792263720:web:0d36e408ff0bbbb253b71d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);