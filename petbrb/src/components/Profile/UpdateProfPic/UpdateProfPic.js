'use client';
import React, { useState, useEffect } from 'react';
import useFetchUserData from "@/lib/hooks/useFetchUserData";
import { firestore, auth } from '../../../../firebase';
import { uploadProfileImage } from '../helpers/ImageInputHelpers';
import styles from './UpdateProfPic.module.css';
import { useAuth } from '@/lib/contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';

const UpdateProfPic = () => {
  const [profilePic, setProfilePic] = useState("");
  const { userData } = useFetchUserData();
  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [userObj, setUserObj] = useState(null);

  const { currentUser } = useAuth();
console.log(currentUser.uid)
  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userDocRef = doc(firestore, "sitters", currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          setUserObj(userDocSnapshot.data());
          console.log(userObj)
        } else {
          console.log("User document does not exist");
        }
      }
    };

    fetchUserData();
  }, [currentUser]);
console.log(userData)
  const UID = auth.currentUser.uid;
  const postRef = firestore.collection("sitters").doc(UID);

  const sendPost = async (imgLink) => {
    await postRef.update({
      profPic: imgLink,
    });
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    const previewURL = URL.createObjectURL(event.target.files[0]);
    setImagePreview(previewURL);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    uploadProfileImage(file, setPercent, setImagePreview, sendPost);
    alert('daje');
  };

  useEffect(() => {
    setProfilePic(userData.profPic);
  }, [userData]);

  return (
    <div className={styles.container}>
      <div className={styles.imageGradient}>
        <img
          src={userData.profPic}
          className={styles.profilePicture}
        ></img>
      </div>
      <input type='file'></input>
    </div>
  );
};

export default UpdateProfPic;