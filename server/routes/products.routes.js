const express = require("express");
const router = express.Router();
const db = require("../db.json");
const dataBase = { ...db };

router.get("/products", (req, res) => {
  const campaign = req.query.campaign;
  const maxPrice = req.query.maxPrice;
  const minPrice = req.query.minPrice;
  const filters = req.query.filters;
  const pharse = req.query.pharse;
  const sort = req.query.sort;
  let filterArray = [];
  // chain of responsibility
  let filtered = dataBase.data;

  console.log("pharse", pharse);
  console.log("sort", sort);

  /*do obgadania*/
  if (pharse) {
    console.log("wchodze");
    filtered = filtered.filter((e) =>
      e.title.toLowerCase().includes(pharse.toLowerCase())
    );
    console.log("filtered", filtered);
  }

  if (sort) {
    if (sort === "highest") {
      filtered.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      filtered.sort(function (a, b) {
        return a.price - b.price;
      });
    }
  }

  if (campaign) {
    filtered = filtered.filter((e) => e.campaigns.includes(campaign));
  }

  if (maxPrice) {
    filtered = filtered.filter((e) => e.price <= maxPrice);
    console.log("maxPriceFiltered", maxPrice);
  }

  if (minPrice) {
    filtered = filtered.filter((e) => e.price >= minPrice);
  }

  if (filters) {
    let res = [];
    console.log(filters);
    //formating objcet and split string for ones element
    for (let key in filters) {
      let elem = filters[key].split(",");
      elem.forEach((e) => {
        res.push(e);
      });
    }

    //checking productCategory for URL
    filtered.forEach((e) => {
      res.forEach((i) => {
        if (e.productCategory == i) {
          filterArray.push(e);
        }
      });
    }); // O(n*m)

    //checking obj length
    let objLength = Object.keys(filterArray).length;
    if (objLength > 0) {
      filtered = filterArray;
    }
  }

  console.log("filtered", filtered);
  res.json(filtered);
  return;
});

router.get("/product/:id", (req, res) => {
  let findProductId = req.params.id;
  let product = dataBase.data.find((item) => item.id == findProductId);
  console.log("findId", product);
  res.json(product);
  return;
});

module.exports = router;
