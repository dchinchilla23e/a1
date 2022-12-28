import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOB68COZny0kzmlwW9CD2mY6S_R8wB-6A",
  authDomain: "marketplace-e6327.firebaseapp.com",
  projectId: "marketplace-e6327",
  storageBucket: "marketplace-e6327.appspot.com",
  messagingSenderId: "1077157506630",
  appId: "1:1077157506630:web:52a43bb3049429cb6ce447"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
