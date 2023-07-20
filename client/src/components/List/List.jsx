import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./List.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import { useSearchParams, useLocation } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import axios from "axios";

const List = ({ maxPrice, sort, categoryFilters, minPrice }) => {
  const locations = useLocation();
  const [param] = useSearchParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
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
    getData();
  }, [maxPrice, minPrice, sort, categoryFilters, contextAppData.searchPhrase]);

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
