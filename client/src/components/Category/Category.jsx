import React from "react";
import styles from "./Category.module.scss";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className={styles.category} id="category_items">
      <div class={styles.categoryGridWrapper}>
        <Link to="products?campaign=sale" class={styles.item}>
          <img
            src="https://cdn.vitkac.com/uploads/landing-page/AW20/LP-1200x400-poziomo.png"
            alt="categoryImg"
            className={styles.categoryImg}
          />
        </Link>
        <Link to="products?campaign=new" class={styles.item2}>
          <span className={styles.categoryText}>New season</span>
          <img
            src="https://media.boohooman.com/i/boohooman/mzz87756_red_xl?$product_image_main_mobile$&fmt=webp"
            alt="categoryImg"
            className={styles.categoryImg}
          />
        </Link>
        <Link to="products?campaign=men" class={styles.item}>
          <span className={styles.categoryText}>Men</span>
          <img
            src="https://www.baird-group.co.uk/m/Look-13-020-2.png"
            alt="categoryImg"
            className={styles.categoryImg}
          />
        </Link>
        <Link to="products?campaign=accessories" class={styles.item}>
          <span className={styles.categoryText}>Accessories</span>
          <img
            src="https://img.freepik.com/premium-photo/woman-pink-hat-pink-hat-stands-front-pink-background_235573-4430.jpg"
            alt="categoryImg"
            className={styles.categoryImg}
          />
        </Link>
        <Link to="products?campaign=women" class={styles.item}>
          <span className={styles.categoryText}>Women</span>
          <img
            src="https://img.freepik.com/free-photo/portrait-three-international-friends_197531-12986.jpg"
            alt="categoryImg"
            className={styles.categoryImg}
          />
        </Link>
        <Link to="products?campaign=shoes" class={styles.item6}>
          <span className={styles.categoryText}>Shoes</span>
          <img
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMHNob2VzfGVufDB8fDB8fHww&w=1000&q=80"
            alt="categoryImg"
            className={styles.categoryImg}
          />
        </Link>
      </div>
    </div>
  );
};

export default Category;
