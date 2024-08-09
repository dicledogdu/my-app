import React from "react";
import styles from "./trip.module.css";

const Trip = () => {
  return (
    <div className={styles.trip}>
      <div className={styles.trip_title}></div>

      <div className={styles.steps}>
        <h3 className={styles.trip_title__sub}>Easy and Fast</h3>
        <h1 className={styles.trip_title__main}>
          Book your next trip in 3 easy steps
        </h1>
        <div className={styles.step_item}>
          <img src="/trip_1.svg" alt="" className={styles.step_image} />
          <div className={styles.step_text}>
            <h2 className={styles.step_title}>Choose Destination</h2>
            <p className={styles.step_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>

        <div className={styles.step_item}>
          <img src="/trip_2.svg" alt="" className={styles.step_image} />
          <div className={styles.step_text}>
            <h2 className={styles.step_title}>Make Payment</h2>
            <p className={styles.step_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>

        <div className={styles.step_item}>
          <img src="/trip_3.svg" alt="" className={styles.step_image} />
          <div className={styles.step_text}>
            <h2 className={styles.step_title}>
              Reach Airport on Selected Date
            </h2>
            <p className={styles.step_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="easyFast.svg" alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default Trip;
