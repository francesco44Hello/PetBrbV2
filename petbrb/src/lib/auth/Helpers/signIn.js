import { auth, firestore } from "../../../../firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const addUserToFirestore = async (user) => {
  const userDocRef = doc(firestore, "users", user.uid);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) {
    await setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      isPetSitter: false,
    });
  }
};

const signInWithGoogle = async (router) => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    await addUserToFirestore(user);
    
    console.log(user.email);
    // router.push("/dashboard");
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }
};

const handleLogin = async (email, password, router, setLogErr) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await addUserToFirestore(user);

    console.log("Login successful:", user.uid);
    console.log("this is email!", email);
    // router.push("/dashboard");
  } catch (error) {
    // Handle login errors
    setLogErr("Invalid Log in attempt.", error);
    console.error("Login error", error);
  }
};

export { signInWithGoogle, handleLogin };
