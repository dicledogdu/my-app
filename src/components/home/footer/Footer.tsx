import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Jadoo.</h2>
          <p>Book your trip in minute, get full control for much longer.</p>
        </div>
        <div className={styles.links}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.icons}>
            <img src="/fb.svg" alt="Facebook" />
            <img src="/inst_2.svg" alt="Instagram" />
            <img src="/tw.svg" alt="Twitter" />
          </div>
          <div className={styles.apps}>
            <p>Discover our app</p>
            <div>
              <img
                src="/Google_Play.svg
              "
                alt="Google Play"
              />
              <img src="/Play_Store.svg" alt="App Store" />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>All rights reserved@jadoo.co</p>
    </footer>
  );
};

export default Footer;
