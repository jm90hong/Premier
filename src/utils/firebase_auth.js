import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


//kyw
const firebaseConfig1 = {
  apiKey: "AIzaSyB2tSV0xl5wWHfVpw1mT8I1WJyiDx6lLLI",
  authDomain: "premier-9e169.firebaseapp.com",
  projectId: "premier-9e169",
  storageBucket: "premier-9e169.firebasestorage.app",
  messagingSenderId: "971891374618",
  appId: "1:971891374618:web:9d7273cb9abacff01e2fa3",
  measurementId: "G-KR52XH21JE",
};


//hjm
const firebaseConfig = {
  apiKey: "AIzaSyC7Aqs0stZxgmBGnvD0ZGeRNmLIMWQHniQ",
  authDomain: "jmcoding-27c0b.firebaseapp.com",
  projectId: "jmcoding-27c0b",
  storageBucket: "jmcoding-27c0b.appspot.com",
  messagingSenderId: "66168997581",
  appId: "1:66168997581:web:1156d9477cc2423df20b84",
  measurementId: "G-3DY71V8Q8X"
};





const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



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


const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    alert("sign in success");

    //user 에 저장
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

    //user 에 저장
    console.log(result);


    return true;
  } catch (error) {
    alert(error);
    console.error(error);

    return false;
  }
};

export { auth, signInWithGoogle, login, signUp };
