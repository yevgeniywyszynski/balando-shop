import React from "react";
import styles from "./PaymentStatus.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PaymentStatus = () => {
  return (
    <div className={styles.pStatusContainer}>
      <div className={styles.pStatusWrapper}>
        <span>Payment was successful</span>
        <CheckCircleIcon className={styles.pStatusIcon} />
      </div>
    </div>
  );
};

export default PaymentStatus;
