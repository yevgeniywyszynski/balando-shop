import React, { useState } from "react";
import styles from "./Products.module.scss";
import List from "../../components/List/List";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minPrice, setMiPrice] = useState(100);
  const [sort, setSort] = useState(null);
  const [categoryFilters, setCategoryFilters] = useState([]); /*(new Set())*/

  let categories = ["tisherts", "shoes", "bags"];

  // const updateFilters = (checked, categoryFilter) => {
  //   if (checked)
  //     setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
  //   if (!checked)
  //     setcategoryFilters((prev) => {
  //       const next = new Set(prev);
  //       next.delete(categoryFilter);
  //       return next;
  //     });
  // };

  const updateFilters = (checked, categoryFilter) => {
    if (checked) {
      if (!categoryFilters.includes(categoryFilter)) {
        setCategoryFilters((prev) => [...prev, categoryFilter]);
        console.log("addTag", categoryFilters);
      }
    }
    if (!checked) {
      setCategoryFilters(categoryFilters.filter((e) => e !== categoryFilter));
    }
  };

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.productsFilterItem}>
          <h2 className={styles.productsFilterTitle}>Product Categories</h2>
          {categories.map((elem) => (
            <div className={styles.productCategoryChoiceWrapper}>
              <label className={styles.productCategoryTitle}>
                <input
                  type="checkbox"
                  onChange={(e) => updateFilters(e.target.checked, elem)}
                />
                {elem}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.productsFilterItem}>
          <h2 className={styles.productsFilterTitle}>Filter by Price</h2>
          <div className={styles.productsPriceItem}>
            <div className={styles.priceFilter}>
              <label for="minPrice" className={styles.priceFilterTitle}>
                Min price
              </label>
              <input
                onChange={(e) => setMiPrice(e.target.value)}
                type="text"
                id="minPrice"
                placeholder={minPrice}
                className={styles.priceFilterInput}
              />
            </div>
            <div className={styles.priceFilter}>
              <label for="maxPrice" className={styles.priceFilterTitle}>
                Max price
              </label>
              <input
                onChange={(e) => setMaxPrice(e.target.value)}
                type="text"
                id="maxPrice"
                placeholder={maxPrice}
                className={styles.priceFilterInput}
              />
            </div>
          </div>
        </div>
        <div className={styles.productsFilterItem}>
          <h2 className={styles.productsFilterTitle}>Sort by</h2>
          <div className={styles.productsInputItem}>
            <input
              onChange={(e) => setSort("lower")}
              className={styles.productCheck}
              type="radio"
              id="lower"
              value="asc"
              name="price"
            />
            <label className={styles.productLabel} htmlFor="lower">
              Price (Lower first)
            </label>
          </div>
          <div className={styles.productsInputItem}>
            <input
              onChange={(e) => setSort("highest")}
              className={styles.productCheck}
              type="radio"
              id="highest"
              value="asc"
              name="price"
            />
            <label className={styles.productLabel} htmlFor="highest">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          src="https://gmo.com.pe/media/wysiwyg/Cat_DolceGabanna_desk.png"
          alt="bannerProducts"
          className={styles.productsBanner}
        />
        <List
          categoryFilters={categoryFilters}
          maxPrice={maxPrice}
          minPrice={minPrice}
          sort={sort}
        />
      </div>
    </div>
  );
};

export default Products;
