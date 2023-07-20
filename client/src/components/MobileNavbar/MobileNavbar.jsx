import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileNavbar.module.scss";

export default function MobileNavbar() {
  return (
    <>
      <nav className={styles.pagesLinkWrapperMobile}>
        <ul className={styles.linkList}>
          <Link className={styles.link} to="/products/1">
            Men
          </Link>
          <Link className={styles.link} to="/products/2">
            Women
          </Link>
          <Link className={styles.link} to="/products/3">
            Children
          </Link>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/">
            About
          </Link>
          <Link className={styles.link} to="/">
            Contarcts
          </Link>
          <Link className={styles.link} to="/products">
            Stores
          </Link>
        </ul>
      </nav>
    </>
  );
}
