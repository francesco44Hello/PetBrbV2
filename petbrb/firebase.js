import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

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
