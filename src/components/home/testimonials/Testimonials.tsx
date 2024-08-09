import React from "react";
import Image from "next/image";
import styles from "./testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>TESTIMONIALS</h2>
      <h1 className={styles.subtitle}>What People Say About Us.</h1>
      <div className={styles.container}>
        <div className={styles.pagination}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <div className={styles.card}>
          <Image
            src="/profilePic.svg"
            alt=""
            width={50}
            height={50}
            className={styles.profileImage}
          />
          <p className={styles.quote}>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className={styles.name}>Mike Taylor</p>
          <p className={styles.location}>Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
