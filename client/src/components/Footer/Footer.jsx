import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerItem}>
          <h1 className={styles.titleFooter}>Categories</h1>
          <Link to="/" className={styles.footerCategories}>
            Man
          </Link>
          <Link to="/" className={styles.footerCategories}>
            Woman
          </Link>
          <Link to="/" className={styles.footerCategories}>
            Bags
          </Link>
          <Link to="/" className={styles.footerCategories}>
            Accessories
          </Link>
          <Link to="/" className={styles.footerCategories}>
            New Arrivals
          </Link>
        </div>
        <div className={styles.footerItem}>
          <h1 className={styles.titleFooter}>Links</h1>
          <Link to="/" className={styles.footerCategories}>
            FAQ
          </Link>
          <Link to="/" className={styles.footerCategories}>
            Pages
          </Link>
          <Link to="/" className={styles.footerCategories}>
            Stories
          </Link>
          <Link to="/" className={styles.footerCategories}>
            Compare
          </Link>
          <Link to="/" className={styles.footerCategories}>
            Coockies
          </Link>
        </div>
        <div className={styles.footerItem}>
          <h1 className={styles.titleFooter}>About</h1>
          <span className={styles.footerDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            repellendus eaque ad iusto! Recusandae aliquid, natus atque ut quasi
            harum praesentium vitae pariatur, earum placeat voluptate iure nam
            asperiores totam?
          </span>
        </div>
        <div className={styles.footerItem}>
          <h1 className={styles.titleFooter}>Contact</h1>
          <span className={styles.footerDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            repellendus eaque ad iusto! Recusandae aliquid, natus atque ut quasi
            harum praesentium vitae pariatur, earum placeat voluptate iure nam
            asperiores totam?
          </span>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.leftFooter}>
          <span className={styles.footerLogo}>BALANDOSTORE</span>
          <span className={styles.copyright}>
            © Copyright ywyszyn 2023. All Rights Reserved
          </span>
        </div>
        <div className={styles.footerRight}>
          <img
            alt="payIcon"
            className={styles.payIconFooter}
            src="/img/payy.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
