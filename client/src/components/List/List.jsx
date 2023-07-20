import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./List.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import { useSearchParams, useLocation } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import axios from "axios";

const List = ({ maxPrice, sort, categoryFilters, minPrice }) => {
  const locations = useLocation();
  const [param] = useSearchParams();
  //const [counter, forceRender] = useState(0);
  //const [isLoaded, setIsLoaded] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState([]);
  //let paramUrl = param.get("campaign"); //sale
  const paramUrl = useRef(param.get("campaign"));

  const contextAppData = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    paramUrl.current = param.get("campaign");
    getData();
  }, [locations]);

  useEffect(() => {
    console.log("changed pharse", contextAppData.searchPhrase);
    getData();
  }, [maxPrice, minPrice, sort, categoryFilters, contextAppData.searchPhrase]);

  // useEffect(() => {
  //   console.log("sort", sort);
  //   if (isLoaded) {
  //     // axios.get("localhost:8080/produces?sort=asc")
  //     if (sort === "highest") {
  //       contextAppData.setFilteredNames(
  //         contextAppData.data.sort(function (a, b) {
  //           return b.price - a.price;
  //         })
  //       );
  //     } else {
  //       contextAppData.setFilteredNames(
  //         contextAppData.data.sort(function (a, b) {
  //           return a.price - b.price;
  //         })
  //       );
  //     }
  //   }
  //   forceRender(counter + 1);
  // }, [sort]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/products?campaign=${
          paramUrl.current ? paramUrl.current : ""
        }&maxPrice=${maxPrice}&pharse=${
          contextAppData.searchPhrase
        }&minPrice=${minPrice}&filters[]=${categoryFilters}&sort=${sort}`
      );
      setCategoryProducts(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.list}>
      {categoryProducts &&
        categoryProducts.map((item) => <ItemCard item={item} key={item.id} />)}
    </div>
  );
};

export default List;
