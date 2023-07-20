import React from "react";
import styles from "./Contact.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact_section">
      <div className={styles.contactWrapper}>
        <span className={styles.contactDesc}>be in touch with us:</span>
        <div className={styles.contactFormWrapper}>
          <input
            className={styles.contactInput}
            type="email"
            placeholder="Enter your e-mail"
          />
          <button className={styles.contactBtn}>join us</button>
        </div>
        <div className={styles.contactIconsWrapper}>
          <FacebookIcon className={styles.contactIcon} />
          <InstagramIcon className={styles.contactIcon} />
          <TwitterIcon className={styles.contactIcon} />
          <GoogleIcon className={styles.contactIcon} />
          <PinterestIcon className={styles.contactIcon} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
