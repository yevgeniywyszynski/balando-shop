import React, { useEffect, useState } from "react";
import styles from "./FeaturedProducts.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/products");
      setFeaturedProducts(data);
    } catch (e) {
      console.log("error message", e.messages);
    }
  };

  return (
    <div className={styles.featuredProductsContainer}>
      <div className={styles.featuredTop}>
        <span className={styles.featuredTitle}>{type} Products</span>
        <p className={styles.featuredDesc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem deserunt quidem repudiandae veniam! Mollitia ut porro
          nostrum totam. Eveniet esse provident magni quasi porro quam!
          Doloremque expedita quis qui exercitationem.
        </p>
      </div>
      {type === "trending" ? (
        <div className={styles.featuredBottom}>
          {featuredProducts
            .filter((product) => product.dataTrending)
            .map((item) => (
              <ItemCard item={item} key={item.id} />
            ))}
        </div>
      ) : (
        <div className={styles.featuredBottom}>
          {featuredProducts
            .filter((product) => product.featuredProduct)
            .map((item) => (
              <ItemCard item={item} key={item.id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
