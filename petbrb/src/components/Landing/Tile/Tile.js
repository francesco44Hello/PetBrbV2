import React from "react";
import styles from "./Tile.module.css";

const Tile = ({ text, icon: Icon }) => {
  return (
    <div className={styles.container}>
     <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>
      <h2 className={styles.text}>{text}</h2>
     
    </div>
  );
};

export default Tile;
