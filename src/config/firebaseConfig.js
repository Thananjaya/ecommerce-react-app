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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        userName: displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const storage = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
