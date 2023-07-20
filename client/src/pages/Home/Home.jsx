import React from "react";
import styles from "./Home.module.scss";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Slider />
      <FeaturedProducts type="featured" />
      <Category />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
