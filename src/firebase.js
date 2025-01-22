import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEGvumD7INsVsUpzi-NmFQFI8EPuheGgQ",
  authDomain: "aircond-booking-app.firebaseapp.com",
  projectId: "aircond-booking-app",
  storageBucket: "aircond-booking-app.firebasestorage.app",
  messagingSenderId: "1031590049226",
  appId: "1:1031590049226:web:8f7e3c7a3b67ab0e260b33",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
