import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout/Layout";
import Home from "../src/pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import { DataContext } from "./context/DataContext";
import PaymentType from "./components/PaymentType/PaymentType";
import FavoriteListProducts from "./components/FavoriteListProducts/FavoriteListProducts";

function App() {
  const [data, setData] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [subtotal, setSubtotal] = useState({
    finalPrice: 0,
    addProducts: [],
    count: 0,
  });

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
            <Route path="/favoritelist" element={<FavoriteListProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
