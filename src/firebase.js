import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuqLUzuszv3XDu6_eyEs0ZrCfBOGQgHrc",
  authDomain: "replyflow-ai.firebaseapp.com",
  projectId: "replyflow-ai",
  storageBucket: "replyflow-ai.firebasestorage.app",
  messagingSenderId: "2282640553",
  appId: "1:2282640553:web:1412df559aab8cb81c85b8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
