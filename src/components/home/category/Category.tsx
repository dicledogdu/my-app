import React from "react";

import styles from "./category.module.css";

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.category_title}>
        <h3 className={styles.category_title__sub}>CATEGORY</h3>
        <h1 className={styles.category_title__main}>We Offer Best Services</h1>
      </div>

      <div className={styles.category_items}>
        <div className={styles.category_item}>
          <img
            src="/category_1.svg"
            alt="Category 1"
            className={styles.category_item__image}
          />

          <h2 className={styles.category_item__title}>Calculated Weather</h2>
          <h4 className={styles.category_item__subtitle}>
            Built Wicket longer admire do barton vanity itself do in it.
          </h4>
        </div>
        <div className={styles.category_item}>
          <img
            src="category_2.svg"
            alt="Category 2"
            className={styles.category_item__image}
          />
          <h2 className={styles.category_item__title}>Best Flights</h2>
          <h4 className={styles.category_item__subtitle}>
            Engrossed listening. Park gate sell they west hard for the.
          </h4>
        </div>
        <div className={styles.category_item}>
          <img
            src="category_3.svg"
            alt="Category 3"
            className={styles.category_item__image}
          />
          <h2 className={styles.category_item__title}>Local Events</h2>
          <h4 className={styles.category_item__subtitle}>
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </h4>
        </div>
        <div className={styles.category_item}>
          <img
            src="category_4.svg"
            alt="Category 4"
            className={styles.category_item__image}
          />
          <h2 className={styles.category_item__title}>Customization</h2>
          <h4 className={styles.category_item__subtitle}>
            We deliver outsourced aviation services for military customers.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Category;
