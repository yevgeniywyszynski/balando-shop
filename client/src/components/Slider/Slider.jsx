import React, { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  const [sildeNum, setSlideNum] = useState(0);

  const backSlide = () => {
    setSlideNum(sildeNum === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setSlideNum(sildeNum === 2 ? 0 : (prev) => prev + 1);
  };

  const autoSwitchSlides = () => {
    const interval = setInterval(() => {
      if (sildeNum === 2) {
        backSlide();
      } else {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const clearAutoSwitch = autoSwitchSlides();

    return () => {
      clearAutoSwitch();
    };
  }, []);

  useEffect(() => {
    if (sildeNum > 2) {
      setSlideNum(0);
    }
  }, [sildeNum]);

  const imgLuxMap = [
    "https://fashionweekdaily.com/wp-content/uploads/2015/06/BAL-2C.jpg",
    "https://cdn.shopify.com/s/files/1/0341/3498/2789/files/fall-look-new-banner-desktop-1.jpg",
    "https://www.samschneideroptom.co.za/images/glasses/sunglasses-by-brand/dolce-gabbana-sunglasses-1.jpg",
  ];

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(-${sildeNum * 100}vw)` }}
      >
        <img src={imgLuxMap[0]} alt="slideImg" className={styles.slideImg} />
        <img src={imgLuxMap[1]} alt="slideImg" className={styles.slideImg} />
        <img src={imgLuxMap[2]} alt="slideImg" className={styles.slideImg} />
      </div>
      <div className={styles.sliderArrowIconsWrapper}>
        <div className={styles.icon}>
          <ArrowBackIosNewIcon
            onClick={backSlide}
            className={styles.arrowSlider}
          />
        </div>
        <div className={styles.icon}>
          <ArrowForwardIosIcon
            onClick={nextSlide}
            className={styles.arrowSlider}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
