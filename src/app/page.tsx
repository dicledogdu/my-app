import Image from "next/image";
import styles from "./page.module.css";
import logo from "public/logo.png";
import MainBanner from "src/components/home/mainBanner/MainBanner";
import Category from "src/components/home/category/category";
import Destinations from "src/components/home/destinations/Destinations";
import Trip from "src/components/home/trip/Trip";
import Testimonials from "src/components/home/testimonials/Testimonials";
import LogoGrid from "src/components/home/logogrid/LogoGrid";
import SubscribeSection from "src/components/home/subscribeSection/Subscribe";
import Footer from "src/components/home/footer/Footer";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Image src={logo} alt="Logo" className={styles.logo} />

          <div className={styles.navContainer}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Destinations</li>
              <li className={styles.navItem}>Hotels</li>
              <li className={styles.navItem}>Flights</li>
              <li className={styles.navItem}>Bookings</li>
              <li className={styles.navItem}>Login</li>
              <li className={styles.navItem}>
                <div className={styles.signUp}>
                  <p>Sign up</p>
                  {/* SVG içeriği olmadan */}
                </div>
              </li>
              <li className={styles.navItem}>
                <div>
                  <p>En</p>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </header>

        <div className={styles.content}>
          <MainBanner />
          <Category />
          <Destinations />
          <Trip />
          <Testimonials />
          <LogoGrid />
          <SubscribeSection />
          <Footer />
        </div>

        {/* <div className={styles.imageContainer2}>
          <Image src={services} alt="Açıklama 3" className={styles.image3} />
        </div>

        <div className={styles.imageContainer4}>
          <Image
            src={destinations}
            alt="Açıklama 4"
            className={styles.image4}
          />
        </div>

        <div className={styles.imageContainer5}>
          <Image src={bookatrip} alt="Açıklama 5" className={styles.image5} />
        </div>

        <div className={styles.imageContainer6}>
          <Image src={dusunceler} alt="Açıklama 6" className={styles.image5} />
        </div>

        <div className={styles.imageContainer7}>
          <Image src={logos} alt="Açıklama 7" className={styles.image7} />
        </div>

        <div className={styles.imageContainer8}>
          <Image src={subscribe} alt="Açıklama 8" className={styles.image8} />
        </div>

        <div className={styles.imageContainer9}>
          <Image src={footer} alt="Açıklama 9" className={styles.image9} />
        </div> */}
      </div>
    </>
  );
}
