import React from "react";

import styles from "./mainBanner.module.css";

import Image from "next/image";

import Category from "../category/category";

const MainBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_leftSide}>
        <h4 className={styles.wrapper_leftSide__subHeader}>
          Best Destinations around the world
        </h4>

        <div>
          <div className={styles.wrapper_bottomSide}>
            <h4 className={styles.wrapper_bottomSide__Header}>
              Travel, enjoy and live a new and full life
            </h4>
          </div>
        </div>
        <div>
          <div className={styles.wrapper_footerSide}>
            <h4 className={styles.wrapper_footerSide__Header}>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_rightSide}>
        <img src="aciklama2.png" alt="" className={styles.wrapper_image} />
      </div>
      <div className={styles.wrapper_buttonWrapper}>
        <button className={styles.wrapper_buttonWrapper__button1}>
          Find Out More
        </button>
        <button className={styles.wrapper_buttonWrapper__button2}>
          <img src={"playIcon.svg"} alt="play" />
          Play Demo
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
