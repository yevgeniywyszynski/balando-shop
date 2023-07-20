import React, { useContext } from "react";
import styles from "./AddCard.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";

const AddCard = () => {
  const dataCard = useContext(DataContext);

  const resetCart = () => {
    dataCard.setData(dataCard.data.map((e) => ({ ...e, count: 0 })));
    dataCard.setSubtotal({ finalPrice: 0, addProducts: [], count: 0 });
  };

  const removeProduct = (product) => {
    dataCard.setData(
      dataCard.data.map((e) => {
        if (e.id === product.id) {
          return { ...e, count: 0 };
        } else {
          return e;
        }
      })
    );

    let cardFinalPrice = dataCard.subtotal.finalPrice;

    dataCard.setSubtotal({
      finalPrice: cardFinalPrice - product.price * product.count,
      addProducts: dataCard.subtotal.addProducts.filter(
        (e) => e.id !== product.id
      ),
      count: dataCard.subtotal.count - product.count,
    });
  };

  return (
    <div className={styles.addCard}>
      {dataCard.subtotal.finalPrice === 0 ? (
        <span>No empty</span>
      ) : (
        <h2 className={styles.addCardTitle}>Products in your cart</h2>
      )}
      {dataCard.subtotal.addProducts?.map((product) => (
        <div key={product.id} className={styles.itemCard}>
          <img
            src={product.imgList[0]}
            alt="productImgCard"
            className={styles.cardImg}
          />
          <div className={styles.addCardProductDetails}>
            <span className={styles.productCardTitle}>{product.title}</span>
            <p className={styles.productCardDesc}>{product.title}</p>
            <div className={styles.addProductPrice}>
              {product.count} x ${product.price}
            </div>
          </div>
          <DeleteIcon
            className={styles.removeProduct}
            onClick={() => removeProduct(product)}
          />
        </div>
      ))}
      <div className={styles.total}>
        <span>subtotal</span>
        <span>{dataCard.subtotal.finalPrice} $</span>
      </div>
      <Link to="/payment" className={styles.proceedCheckBtn}>
        Proceed to checkout
      </Link>
      <span className={styles.resetCard} onClick={resetCart}>
        reset card
      </span>
    </div>
  );
};

export default AddCard;
