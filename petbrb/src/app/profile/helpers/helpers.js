import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../../firebase";
import {
  updateUserProfile,
  getCurrentUserData,
  updateSitterProfile,
} from "@/lib/auth/Helpers/updateUserProfile";

export const fetchUserData = async (currentUser) => {
  try {
    if (currentUser) {
      const userDoc = await getCurrentUserData(currentUser.uid);
      const userData = userDoc;

      if (userDoc.isPetSitter) {
        const sitterDocRef = doc(firestore, "sitters", currentUser.uid);
        const sitterDoc = await getDoc(sitterDocRef);
        if (sitterDoc.exists()) {
          const sitterData = sitterDoc.data();
          const typeOfPet = sitterData.typeOfPet || "";
          const selectedAnimals = sitterData.typeOfPet
            ? sitterData.typeOfPet.split(", ").map((animal) => animal.trim())
            : [];
          return {
            userData,
            sitterData,
            isSitter: true,
            typeOfPet,
            selectedAnimals,
          };
        } else {
          return {
            userData,
            sitterData: {},
            isSitter: true,
            typeOfPet: "",
            selectedAnimals: [],
          };
        }
      } else {
        return {
          userData,
          sitterData: {},
          isSitter: false,
          typeOfPet: "",
          selectedAnimals: [],
        };
      }
    }
    return {
      userData: null,
      sitterData: {},
      isSitter: false,
      typeOfPet: "",
      selectedAnimals: [],
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      userData: null,
      sitterData: {},
      isSitter: false,
      typeOfPet: "",
      selectedAnimals: [],
    };
  }
};

export const updateUserAndSitterData = async (
  currentUser,
  userData,
  isSitter,
  sitterData,
  selectedAnimals
) => {
  try {
    if (currentUser) {
      const updatedUserData = {
        ...userData,
        isPetSitter: isSitter,
      };
      await updateUserProfile(currentUser.uid, updatedUserData);
      if (isSitter) {
        const updatedSitterData = {
          ...sitterData,
          uid: currentUser.uid,
          typeOfPet: selectedAnimals.join(", "),
        };
        await updateSitterProfile(currentUser.uid, updatedSitterData);
      }
      alert("Profile updated successfully");
    }
  } catch (error) {
    console.error("Error updating user and sitter data:", error);
  }
};
