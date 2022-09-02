/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React, { useState } from "react";
import Navbar from "./modules/navbar/navbar";
import CategoryPage from "./modules/category-page/category-page";

function App()
{
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [shopinCartItems, setShopinCartItems] = useState([]);

  return (
    <div className="App">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        shopinCartItems={shopinCartItems}
        setShopinCartItems={setShopinCartItems}
      />
      <CategoryPage
        categoryName={selectedCategory}
        selectedCurrency={selectedCurrency}
        selectedCategory={selectedCategory}
      />
      {/* <div>{selectedCategory}</div> */}
    </div>
  );
}

export default App;