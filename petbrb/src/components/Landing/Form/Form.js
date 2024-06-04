"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Form.module.css";
import FloatingLabelInput from "@/components/shared/Input/Input";

const Form = () => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    location: "",
    petType: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    router.push(`/search?${query}`);
  };

  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom: "10px" }}>What are you looking for?</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.subSection}>
          <FloatingLabelInput
            label="Where?"
            width="45%"
            name="location"
            value={filters.location}
            onChange={handleChange}
          />
          <FloatingLabelInput
            label="What service?"
            width="45%"
            name="location"
            // value={filters.location}
            onChange={handleChange}
          />
        </div>
        <div className={styles.subSection}>
          <FloatingLabelInput
            label="Type of pet"
            width="45%"
            name="petType"
            value={filters.petType}
            onChange={handleChange}
          />
          <FloatingLabelInput
            label="Budget"
            width="45%"
            name="budget"
            value={filters.budget}
            onChange={handleChange}
            type="number"
          />
        </div>
        <button type="submit" className={styles.button}>
          Search..
        </button>
      </form>
    </div>
  );
};

export default Form;
