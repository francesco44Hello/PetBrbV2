import { auth } from "../../../../firebase";
import firebase from "firebase/compat/app";

const handleSignOut = (router) => {
  if (auth.currentUser) {
    auth
      .signOut()
      .then(() => {

        router.push("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  }
};

export { handleSignOut };
