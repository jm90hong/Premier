import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2tSV0xl5wWHfVpw1mT8I1WJyiDx6lLLI",
  authDomain: "premier-9e169.firebaseapp.com",
  projectId: "premier-9e169",
  storageBucket: "premier-9e169.firebasestorage.app",
  messagingSenderId: "971891374618",
  appId: "1:971891374618:web:9d7273cb9abacff01e2fa3",
  measurementId: "G-KR52XH21JE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    alert("sign in success");
    console.log(result);
  } catch (error) {
    alert(error);
    console.error(error);
  }
};

const login = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    alert("sign in success");
    console.log(result);
  } catch (error) {
    alert(error);
    console.error(error);
  }
};

const signUp = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    alert("sign up success");
    console.log(result);
  } catch (error) {
    alert(error);
    console.error(error);
  }
};

export { auth, signInWithGoogle, login, signUp };
