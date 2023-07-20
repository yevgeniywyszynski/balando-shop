import React, { useState, useContext, useEffect } from "react";
import styles from "./Product.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import NotFound from "../../components/NotFound/NotFound";
import axios from "axios";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [favorite, setFavotire] = useState(false);
  const [currentProduct, setCurrentProduc] = useState(null);
  const [error, setError] = useState(false);

  console.log("favoriteProduct", favorite);

  const addFavorite = () => {
    setFavotire(!favorite);
  };

  const urlProductId = parseInt(useParams().id);
  const dataCard = useContext(DataContext);

  useEffect(() => {
    getProduct().then((resp) => {
      setCurrentProduc(resp);
    });
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/${urlProductId}`
      );
      return response.data;
    } catch (e) {
      console.log("error message", e.messages);
      setError(true);
    }
  };

  const addProduct = () => {
    if (dataCard.subtotal.addProducts.includes(currentProduct)) {
      currentProduct.count = currentProduct.count + qty;

      dataCard.setSubtotal({
        finalPrice: dataCard.subtotal.finalPrice + currentProduct.price * qty,
        addProducts: dataCard.subtotal.addProducts,
        count: dataCard.subtotal.count + qty,
      });
    } else {
      currentProduct.count = currentProduct.count + qty;
      dataCard.subtotal.addProducts.push(currentProduct);

      dataCard.setSubtotal({
        finalPrice: dataCard.subtotal.finalPrice + currentProduct.price * qty,
        addProducts: dataCard.subtotal.addProducts,
        count: dataCard.subtotal.count + qty,
      });
    }
  };

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <div className={styles.product}>
          <div className={styles.productLeft}>
            <div className={styles.images}>
              <img
                onClick={(e) => setSelectedImg(0)}
                src={currentProduct?.imgList[0]}
                alt="productImg"
                className={styles.productImg}
              />
              <img
                onClick={(e) => setSelectedImg(1)}
                src={currentProduct?.imgList[1]}
                alt="productImg"
                className={styles.productImg}
              />
            </div>
            <div className={styles.mainImg}>
              <img
                src={currentProduct?.imgList[selectedImg]}
                alt="generalImgProduct"
                className={styles.generalImgProduct}
              />
            </div>
          </div>
          <div className={styles.productRight}>
            <h2 className={styles.productRightTitle}>
              {currentProduct?.title}
            </h2>
            <span className={styles.productPrice}>
              {currentProduct?.price}$
            </span>
            <p className={styles.prodcutDesc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              voluptatem expedita doloribus harum incidunt nulla maxime eligendi
              voluptatibus nostrum hic ipsum iste tenetur eius adipisci rem,
              consequuntur doloremque quis reiciendis?
            </p>
            <div className={styles.qtyContainer}>
              <button
                onClick={(e) => setQty((prev) => (prev === 1 ? 1 : prev - 1))}
                className={styles.qtyBtn}
              >
                <RemoveCircleOutlineIcon className={styles.qtyIcon} />
              </button>
              <span>{qty}</span>
              <button
                onClick={(e) => setQty((prev) => (prev === 10 ? 10 : prev + 1))}
                className={styles.qtyBtn}
              >
                <AddCircleOutlineIcon className={styles.qtyIcon} />
              </button>
            </div>
            <div className={styles.addToShopWrapper} onClick={addProduct}>
              <AddShoppingCartIcon />
              <span className={styles.addShowText}>add to cart</span>
            </div>
            <div className={styles.productIconsContainer}>
              <div className={styles.productIconWrapper} onClick={addFavorite}>
                {favorite ? (
                  <FavoriteIcon className={styles.favoIconProduct} />
                ) : (
                  <FavoriteBorderIcon />
                )}
                <span>add to wish list</span>
              </div>
              <div className={styles.productIconWrapper}>
                <BalanceIcon />
                <span>add to balance</span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span>Vendor: Jacket</span>
              <span>Product Type: T-shirt</span>
              <span>Tag: Jacket, Men, DG</span>
            </div>
            <hr />
            <div className={styles.productInfoDesc}>
              <span>description</span>
              <hr />
              <span>additional information</span>
              <hr />
              <span>faq</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
