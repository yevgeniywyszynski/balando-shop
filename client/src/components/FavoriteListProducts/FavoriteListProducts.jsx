import React, { useEffect, useState } from "react";
import styles from "./FavoriteListProducts.module.scss";
import axios from "axios";
import ItemCard from "../ItemCard/ItemCard";

const FavoriteListProducts = () => {
  const [favoriteListId, setFavoriteListId] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    let stateLocalStorage = localStorage.getItem("favourites") || "[]";
    let isArray = JSON.parse(stateLocalStorage);
    setFavoriteListId(isArray);
  }, []);

  useEffect(() => {
    getFavoriteProducts();
  }, [favoriteProducts]);

  const getFavoriteProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/favoritelist?favorite[]=${favoriteListId}`
      );
      setFavoriteProducts(res.data);
      console.log("favoriteProducts", favoriteProducts);
    } catch (e) {
      console.log("error message", e.messages);
    }
  };

  console.log("favoriteListId", favoriteListId);
  console.log("favoriteProducts", favoriteProducts);

  return (
    <div className={styles.favcoriteListContainer}>
      <div className={styles.list}>
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((item) => <ItemCard item={item} key={item.id} />)
        ) : (
          <div>No empty</div>
        )}
      </div>
    </div>
  );
};

export default FavoriteListProducts;
