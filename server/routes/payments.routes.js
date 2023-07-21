const express = require("express");
const router = express.Router();
const db = require("../db.json");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");
const dataBase = { ...db };

router.post("/payment", (req, res) => {
  try {
    let { email, name, subtotal, number, purchasedProducts } = req.body;

    let newTransactionObj = {
      id: uuidv1(),
      email: email,
      name: name,
      subtotal: subtotal,
      number: number,
      purchasedProducts: purchasedProducts,
    };

    dataBase.transaction = [...dataBase.transaction, newTransactionObj];
    res.json({ status: "OK" });
  } catch (e) {
    res.status(500).json({ message: "failed  transaction operations" });
  }

  console.log("reqBody", req.body);
  console.log("transaction", dataBase.transaction);
});

router.get("/history", (req, res) => {
  res.json(dataBase.transaction);
  return;
});

module.exports = router;

// https://formik.org/
// https://www.freecodecamp.org/news/build-react-forms-with-formik-library/
