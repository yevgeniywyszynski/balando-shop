import React, { useState, useContext } from "react";
import styles from "./PaymentType.module.scss";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { DataContext } from "../../context/DataContext";
import PaymentStatus from "../PaymentStatus/PaymentStatus";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentType = () => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [payStatus, setPayStatus] = useState(false);
  const navigate = useNavigate();

  const dataCard = useContext(DataContext);

  const payid = (e) => {
    e.preventDefault();

    if (dataCard.subtotal.finalPrice === 0) {
      return alert("koszyk jest pusty, dodaj produkt");
    }

    if (number.length < 16) {
      return alert("wpisz poprawnie numer karty");
    }

    if (!email) {
      return alert("email jest wymagany");
    }

    let paymentUserData = {
      email: email,
      name: name,
      subtotal: dataCard.subtotal.finalPrice,
      number: number,
    };

    axios.post("http://localhost:8080/transaction/payment", paymentUserData);

    setPayStatus(true);
    dataCard.setSubtotal({ finalPrice: 0, addProducts: [], count: 0 });

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  };

  return (
    <div className={styles.cardWrapper}>
      {payStatus ? (
        <PaymentStatus />
      ) : (
        <>
          <Cards
            className={styles.card}
            number={number}
            expiry={expiry}
            cvc={cvc}
            name={name}
            focused={focus}
          />
          <form className={styles.cardFromWrapper}>
            <input
              type="text"
              className={styles.formControl}
              placeholder="Card Number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              type="text"
              className={styles.formControl}
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              type="tel"
              name="number"
              placeholder="Expiry"
              className={styles.formControl}
              onChange={(e) => setExpiry(e.target.value)}
            />
            <input
              type="tel"
              name="cvc"
              className={styles.formControl}
              value={cvc}
              placeholder="CVC"
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              type="email"
              className={styles.formControl}
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className={styles.cardSubtotal}>
              Subtotal: {dataCard.subtotal.finalPrice}$
            </div>
            <button className={styles.cardPayBtn} onClick={(e) => payid(e)}>
              pay
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PaymentType;
