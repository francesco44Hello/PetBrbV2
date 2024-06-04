import React from "react";
import styles from "./SitterTile.module.css";

const SitterTile = ({ results }) => {
  return (
    <>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className={styles.resultsContainer}>
            <div className={styles.picNameContainer}>
              <div className={styles.imageGradient}>
                <img
                  src={result.profPic}
                  className={styles.profilePicture}
                ></img>
              </div>
              <h2>{result.firstName}</h2>
            </div>
            <div className={styles.mainAnalyticsContainer}>
              <div className={styles.analyticsContainer}>
                <div className={styles.subContainer}>
                  <p className={styles.label}>Bookings</p>
                  <p className={styles.text}>250</p>
                </div>
                <div className={styles.subContainer}>
                  <p className={styles.label}>Member Since</p>
                  <p className={styles.text}>20/12/2020</p>
                </div>{" "}
                <div className={styles.subContainer}>
                  <p className={styles.label}>Reviews</p>
                  <p className={styles.text}>4.8</p>
                </div>
              </div>
              <div className={styles.labelsContainer}>
                {result.typeOfPet &&
                  result.typeOfPet.split(", ").map((animal, index) => (
                    <span key={index} className={styles.animalsLabel}>
                      {animal}
                    </span>
                  ))}
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>View</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </>
  );
};

export default SitterTile;
