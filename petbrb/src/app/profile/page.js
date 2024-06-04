"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/lib/contexts/AuthContext";
import styles from "./page.module.css";
import ImageInput from "@/components/Profile/ImageInput/ImageInput";
import ToggleButton from "react-toggle-button";
import { fetchUserData, updateUserAndSitterData } from "./helpers/helpers";
import UserProfile from "@/components/Profile/UserProfile/UserProfile";
import SitterProfileForm from "@/components/Profile/SitterProfileForm/SitterProfileForm";
import UpdateProfPic from "@/components/Profile/UpdateProfPic/UpdateProfPic";

const Profile = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [sitterData, setSitterData] = useState({});
  const [isSitter, setIsSitter] = useState(false);
  const [typeOfPet, setTypeOfPet] = useState("");
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  const handleTypeOfPetChange = (e) => {
    const inputValue = e.target.value;
    setTypeOfPet(inputValue);
    const animals = inputValue.split(",").map((animal) => animal.trim());
    setSelectedAnimals(animals);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { userData, sitterData, isSitter, typeOfPet, selectedAnimals } =
        await fetchUserData(currentUser);
      setUserData(userData);
      setSitterData(sitterData);
      setIsSitter(isSitter);
      setTypeOfPet(typeOfPet);
      setSelectedAnimals(selectedAnimals);
    };

    fetchData();
  }, [currentUser]);

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSitterDataChange = (e) => {
    const { name, value } = e.target;
    setSitterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveProfile = async () => {
    await updateUserAndSitterData(
      currentUser,
      userData,
      isSitter,
      sitterData,
      selectedAnimals
    );
  };

  if (!userData) return <div>Loading...</div>;

  return (
    // <div className={styles.main}>
    //   <h1>My Profile</h1>
    //   <section className={styles.personalPrivateInfos}>
    //     <ImageInput />
    //     <div className={styles.inputsSection}>
    //       <UserProfile userData={userData} handleUserDataChange={handleUserDataChange} />
    //       <label>
    //         Would you like to offer sitting services?
    //         <ToggleButton
    //           value={isSitter}
    //           onToggle={async () => {
    //             const newIsSitter = !isSitter;
    //             setIsSitter(newIsSitter);
    //             if (currentUser) {
    //               await updateUserProfile(currentUser.uid, {
    //                 ...userData,
    //                 isPetSitter: newIsSitter,
    //               });
    //             }
    //           }}
    //         />
    //       </label>
    //       {isSitter && (
    //         <SitterProfileForm
    //           sitterData={sitterData}
    //           typeOfPet={typeOfPet}
    //           selectedAnimals={selectedAnimals}
    //           handleSitterDataChange={handleSitterDataChange}
    //           handleTypeOfPetChange={handleTypeOfPetChange}
    //         />
    //       )}
    //     </div>
    //     <button onClick={handleSaveProfile}>Save Changes</button>
    //   </section>
    // </div>
    <div className={styles.main}>
      <h1>Manage Account</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Personal Details</h2>
        <div className={styles.inputsContainer}>
          <UpdateProfPic userData={userData}/>
          <UserProfile
            userData={userData}
            handleUserDataChange={handleUserDataChange}
          />
        </div>
      </section>
    </div>
  );
};

export default Profile;
