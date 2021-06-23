import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX_JCG1jGe97nfrXC1YHW6cCtp-b4I41I",
  authDomain: "cloth-shop-6150c.firebaseapp.com",
  projectId: "cloth-shop-6150c",
  storageBucket: "cloth-shop-6150c.appspot.com",
  messagingSenderId: "380091522055",
  appId: "1:380091522055:web:d4df7762555db4c1219ea2",
  measurementId: "G-LG0FBSD5VS"
};

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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
