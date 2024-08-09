import React from "react";
import styles from "./destinations.module.css";

const Destinations = () => {
  return (
    <div className={styles.destinations}>
      <div className={styles["destinations__title"]}>
        <h3 className={styles["destinations__subtitle"]}>Top Selling</h3>
        <h1 className={styles["destinations__main-title"]}>Top Destinations</h1>
      </div>
      <div className={styles["destinations__list"]}>
        <div className={styles["destinations__item"]}>
          <img
            src="/destinations_1.svg"
            alt="Rome, Italy"
            className={styles["destinations__image"]}
          />
          <div className={styles["destinations__info"]}>
            <div className={styles["destinations__details"]}>
              <h3 className={styles["destinations__location"]}>Rome, Italy</h3>
              <span className={styles["destinations__price"]}>$5.42k</span>
            </div>
            <p className={styles["destinations__duration"]}>10 Days Trip</p>
          </div>
        </div>

        <div className={styles["destinations__item"]}>
          <img
            src="/destinations_2.svg"
            alt="London, UK"
            className={styles["destinations__image"]}
          />
          <div className={styles["destinations__info"]}>
            <div className={styles["destinations__details"]}>
              <h3 className={styles["destinations__location"]}>London, UK</h3>
              <span className={styles["destinations__price"]}>$4.2k</span>
            </div>
            <p className={styles["destinations__duration"]}>12 Days Trip</p>
          </div>
        </div>

        <div className={styles["destinations__item"]}>
          <img
            src="destinations_3.svg"
            alt="Full Europe"
            className={styles["destinations__image"]}
          />
          <div className={styles["destinations__info"]}>
            <div className={styles["destinations__details"]}>
              <h3 className={styles["destinations__location"]}>Full Europe</h3>
              <span className={styles["destinations__price"]}>$15k</span>
            </div>
            <p className={styles["destinations__duration"]}>28 Days Trip</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
