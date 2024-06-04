// Import necessary functions from Firebase
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { firestore } from "../../../../firebase";

// Function to get current user data
const getCurrentUserData = async (uid) => {
  const userDocRef = doc(firestore, "users", uid);
  const userDoc = await getDoc(userDocRef);
  return userDoc.exists() ? userDoc.data() : null;
};

// Function to update user profile
const updateUserProfile = async (uid, userData) => {
  const userDocRef = doc(firestore, "users", uid);
  await updateDoc(userDocRef, userData);
};

// Function to update sitter profile
const updateSitterProfile = async (uid, sitterData) => {
  const sitterDocRef = doc(firestore, "sitters", uid);
  await setDoc(sitterDocRef, sitterData, { merge: true });
};

export { getCurrentUserData, updateUserProfile, updateSitterProfile };
