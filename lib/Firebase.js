import { initializeApp, getApp, getApps } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxd5K47MUJDyJtZmeRS8MPL5uEJ6bK3p4",
  authDomain: "scribe-notes-ai.firebaseapp.com",
  projectId: "scribe-notes-ai",
  storageBucket: "scribe-notes-ai.appspot.com",
  messagingSenderId: "774183542454",
  appId: "1:774183542454:web:9369410b405777a7931017",
  measurementId: "G-XRXBMTDV6R",
};

let app;
app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = (props) => {
  signInWithPopup(auth, googleProvider)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signInWithFacebook = (props) => {
  signInWithPopup(auth, facebookProvider)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
