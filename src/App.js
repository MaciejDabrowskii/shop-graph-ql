/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./modules/navbar/navbar";
import MainContent from "./modules/main-content/main-content";

function App()
{
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState({});
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          shoppingCartItems={shoppingCartItems}
          setShoppingCartItems={setShoppingCartItems}
          setOverlayVisible={setOverlayVisible}
        />
        <MainContent
          categoryName={selectedCategory}
          selectedCurrency={selectedCurrency}
          selectedCategory={selectedCategory}
          shoppingCartItems={shoppingCartItems}
          setShoppingCartItems={setShoppingCartItems}
          overlayVisible={overlayVisible}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
