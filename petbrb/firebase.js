import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAP2cYXDd07C8YKv26epvSgiIFuBAoIjRY",
  authDomain: "petbrbv2.firebaseapp.com",
  projectId: "petbrbv2",
  storageBucket: "petbrbv2.appspot.com",
  messagingSenderId: "840447307156",
  appId: "1:840447307156:web:002aa74ba8a148da43b381"
};
console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
export const firebaseApp = firebase.initializeApp(firebaseConfig);

const enablePersistence = async () => {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    // console.log("Local persistence enabled successfully");
  } catch (error) {
    // console.error("Error enabling local persistence:", error);
  }
};

enablePersistence();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = getStorage(firebaseApp);

// Auth state observer
// Function to listen to authentication state changes
export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};
