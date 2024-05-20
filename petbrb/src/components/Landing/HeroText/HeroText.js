import React from "react";
import styles from "./HeroText.module.css";
const HeroText = () => {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.text}>
        Helping you find the best sitters, so you can spend less & worry less
      </h1>
    </div>
  );
};

export default HeroText;
