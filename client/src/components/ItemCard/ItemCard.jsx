import React from "react";
import styles from "./ItemCard.module.scss";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Link className={styles.cardLink} to={`/product/${item.id}`}>
      <div className={styles.itemCard}>
        <div className={styles.imgItemWrapper}>
          {item.isNew && <span className={styles.newSeason}>New Season</span>}
          <img
            src={item.imgList[0]}
            alt="imgCard"
            className={styles.itemCardImg}
          />
          <img
            src={item.imgList[1]}
            alt="imgCard"
            className={styles.secondItemCardImg}
          />
        </div>
        <span className={styles.cardTitle}>{item.title}</span>
        <div className={styles.priceWrapper}>
          {item.oldPrice ? (
            <span className={styles.firstPrice}>{item.oldPrice}$</span>
          ) : null}
          <span className={styles.secondPrice}>{item.price}$</span>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
