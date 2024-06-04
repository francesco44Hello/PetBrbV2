import { useState, useEffect, useMemo } from "react";
import { firestore, auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

/**Returns User Object with userData */
const useFetchUserData = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user] = useAuthState(auth);

  const userDocRef = useMemo(
    () => firestore.collection("users").doc(user.uid),
    [user]
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await userDocRef.get();
        const fetchedUserData = userDoc.data();
        setUserData(fetchedUserData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (userDocRef) {
      fetchUserData();
    }
  }, [userDocRef]);

  return { userData, loading, error };
};

export default useFetchUserData;
