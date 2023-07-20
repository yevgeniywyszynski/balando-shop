import React from "react";
import styles from "./CategoryItem.module.scss";

const CategoryItem = () => {
  return (
    <div className={styles.categoryView}>
      <img src="" alt="categoryImg" className={styles.categoryImg} />
      <span className={styles.categoryText}></span>
    </div>
  );
};

export default CategoryItem;
