import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArPPkQipbqQ0K6zHG3_7lcFEeCG6PgZGE",
  authDomain: "daw-proyecto-b2478.firebaseapp.com",
  projectId: "daw-proyecto-b2478",
  storageBucket: "daw-proyecto-b2478.firebasestorage.app",
  messagingSenderId: "53824679401",
  appId: "1:53824679401:web:528f4b7e063464e67eef78"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);