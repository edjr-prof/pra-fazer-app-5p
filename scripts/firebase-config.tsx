import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLbYmo0lcIkzA5RYeqWvAYB9rBK3v0iC4",
  authDomain: "projeto-2026-1-69b50.firebaseapp.com",
  projectId: "projeto-2026-1-69b50",
  storageBucket: "projeto-2026-1-69b50.firebasestorage.app",
  messagingSenderId: "967161540895",
  appId: "1:967161540895:web:5fa02b98dae36620b7002a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
