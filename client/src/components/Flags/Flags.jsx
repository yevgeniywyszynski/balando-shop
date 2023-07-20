import React from "react";
import styles from "./Flags.module.scss";

const Flags = ({ country }) => {
  switch (country) {
    case "english":
      return (
        <img
          className={styles.languadeIcon}
          src="/img/e.png"
          alt="naguadeImg"
        />
      );
    case "germany":
      return (
        <img
          className={styles.languadeIcon}
          src="/img/d.png"
          alt="naguadeImg"
        />
      );
    default:
      return (
        <img
          className={styles.languadeIcon}
          src="/img/e.png"
          alt="naguadeImg"
        />
      );
  }
};

export default Flags;
