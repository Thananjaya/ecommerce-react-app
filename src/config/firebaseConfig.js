import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFoHWqsmbuPlRtzkA2CAus6KeS6NWhg8E",
  authDomain: "clothing-1993.firebaseapp.com",
  databaseURL: "https://clothing-1993.firebaseio.com",
  projectId: "clothing-1993",
  storageBucket: "clothing-1993.appspot.com",
  messagingSenderId: "426871660325",
  appId: "1:426871660325:web:ff7d7e4d518d22b8a944cc",
  measurementId: "G-CNRKVBJ4ZB"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
