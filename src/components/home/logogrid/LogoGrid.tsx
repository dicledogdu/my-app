import React from "react";
import styles from "./logoGrid.module.css";
const LogoGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <img
          src="axon.svg"
          alt="Axon"
          width={130}
          height={130}
          className={styles.logo}
        />
        <img
          src="/jetstar.svg"
          alt=""
          width={172.86}
          height={110}
          className={styles.logo}
        />

        <img
          src="/expedia_1.svg"
          alt=""
          width={162}
          height={162}
          className={styles.logo}
        />

        <img
          src="/qantas.svg"
          alt=""
          width={150}
          height={32}
          className={styles.logo}
        />
        <img
          src="/litalia.svg"
          alt=""
          width={162}
          height={32}
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default LogoGrid;
