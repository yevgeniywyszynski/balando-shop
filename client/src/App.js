import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout/Layout";
import Home from "../src/pages/Home/Home";
import Product from "./pages/Product/Product";
import axios from "axios";
import Products from "./pages/Products/Products";
import { DataContext } from "./context/DataContext";
import PaymentType from "./components/PaymentType/PaymentType";
//import PaymentFormik from "./components/PaymentFormik/PaymentFormik";

function App() {
  const [data, setData] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [subtotal, setSubtotal] = useState({
    finalPrice: 0,
    addProducts: [],
    count: 0,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/products");
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        subtotal,
        setSubtotal,
        searchPhrase,
        setSearchPhrase,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/payment" element={<PaymentType />} />
            {/* <Route path="/payment" element={<PaymentFormik />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
