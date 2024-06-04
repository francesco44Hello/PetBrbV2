import React from "react";
import styles from "./Tile.module.css";

const Tile = ({ text, icon: Icon, id }) => {
  return (
    <div className={styles.container} key={id}>
     <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>
      <h2 className={styles.text}>{text}</h2>
     
    </div>
  );
};

export default Tile;
