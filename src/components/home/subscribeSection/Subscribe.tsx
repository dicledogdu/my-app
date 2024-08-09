// src/components/SubscribeSection.jsx
import React from "react";
import styles from "./subscribe.module.css";

const SubscribeSection = () => {
  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribeContent}>
        <p className={styles.subscribeDescription}>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <form className={styles.subscribeForm}>
          <input
            type="email"
            placeholder="your email"
            className={styles.subscribeInput}
            required
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
