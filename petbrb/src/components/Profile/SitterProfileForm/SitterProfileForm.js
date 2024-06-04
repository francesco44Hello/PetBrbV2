import React from "react";
import FloatingLabelInput from "@/components/shared/Input/Input";
import styles from "./SitterProfileForm.module.css";

const SitterProfileForm = ({
  sitterData,
  typeOfPet,
  selectedAnimals,
  handleSitterDataChange,
  handleTypeOfPetChange,
}) => {
  return (
    <>
      <div className={styles.inputsContainer}>
        <FloatingLabelInput
          type="text"
          name="firstName"
          value={sitterData.firstName || ""}
          onChange={handleSitterDataChange}
          label="First Name"
        />

        <FloatingLabelInput
          type="text"
          name="surname"
          value={sitterData.surname || ""}
          onChange={handleSitterDataChange}
          label="Surname"
        />
      </div>
      <div className={styles.inputsContainer}>
        <FloatingLabelInput
          type="text"
          name="city"
          value={sitterData.city || ""}
          onChange={handleSitterDataChange}
          label="City"
        />

        <FloatingLabelInput
          type="text"
          name="postcode"
          value={sitterData.postcode || ""}
          onChange={handleSitterDataChange}
          label="Postcode"
        />
      </div>
      <div className={styles.inputsContainer}>
        <FloatingLabelInput
          type="text"
          value={typeOfPet}
          onChange={handleTypeOfPetChange}
          label="Enter type of pets (separate with commas)"
        />

        <FloatingLabelInput
          type="number"
          name="rate"
          value={sitterData.rate || ""}
          onChange={handleSitterDataChange}
          label="Rate"
        />
      </div>
    </>
  );
};

export default SitterProfileForm;
