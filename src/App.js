/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React, { useState } from "react";
import NavbarCategories from "./components/navbar/navbar";
import CurrencySelector from "./components/navbar/currency_selector";

function App()
{
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");

  return (
    <div className="App">
      <div className="navbar">
        <NavbarCategories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      </div>
    </div>
  );
}

export default App;
