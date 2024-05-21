import React from "react";
import styles from "./HeroText.module.css";
const HeroText = () => {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.text}>
        Helping you find the best sitters, so you can{" "}
        <span className={styles.span}>spend less</span> &{" "}
        <span className={styles.span}>worry less</span>
      </h1>
    </div>
  );
};

export default HeroText;
