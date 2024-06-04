import React, { useState, useEffect } from "react";
import "./ImageInput.css";
import { MdAddAPhoto } from "react-icons/md";
import useFetchUserData from "@/lib/hooks/useFetchUserData";
import { auth, firestore } from "../../../../firebase";
import { uploadProfileImage } from "../helpers/ImageInputHelpers";

const ImageInput = () => {
  const [profilePic, setProfilePic] = useState("");
  const { userData } = useFetchUserData();
  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState("");

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
    alert('daje')
  };

  useEffect(() => {
    setProfilePic(userData.profPic);
  }, [userData]);

  return (
    <div className="main-container">
      <div class="image-upload-container">
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleChange}
        />
        <label htmlFor="imageInput" class="image-upload-label">
          <div class="image-upload-preview">
            <span class="upload-icon">
              <MdAddAPhoto />
            </span>
            <p class="upload-text">Update Pic</p>
          </div>
        </label>
      </div>
      <p
        className="text-xs leading-5 text-gray-600"
        style={{ color: "#75818e", marginTop: "10px" }}
      >
        PNG, JPG, GIF up to 10MB
      </p>
      <div class="buttonPercentContainer">
        <p className="pl-1" style={{ color: "#eee" }}>
          {percent} % done
        </p>
        <button onClick={handleUpload} class="button">
          Update picture
        </button>
      </div>
    </div>
  );
};

export default ImageInput;
