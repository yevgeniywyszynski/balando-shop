import React from "react";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
