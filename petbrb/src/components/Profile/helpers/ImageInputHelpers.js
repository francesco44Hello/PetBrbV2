import { storage } from "../../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const uploadProfileImage = async (
    file,
    setPercent,
    setImagePreview,
    sendPost
  ) => {
    if (!file) {
      alert("Please upload an image first!");
    }
  
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          sendPost(url);
        });
      }
    );
  };

  export {uploadProfileImage}