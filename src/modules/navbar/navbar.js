/* eslint-disable react/prop-types */
import React from "react";
import NavbarCategories from "./navbar-categories/navbar-categories";
import CurrencySelector from "./currency-selector/currency_selector";
import ShoppingCartIndicator
  from "./shopping-cart-indicator/shopping-cart-indicator";
import brandIcon from "../../assets/BrandIcon.svg";

function Navbar({
  selectedCategory,
  setSelectedCategory,
  selectedCurrency,
  setSelectedCurrency,
  shoppingCartItems,
  setShoppingCartItems,
  setOverlayVisible,
})
{
  return (
    <div className="navbar">
      <NavbarCategories
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="brand-logo-container">
        <img src={brandIcon} alt="brand icon" className="brand-logo" />
      </div>
      <CurrencySelector
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <ShoppingCartIndicator
        shoppingCartItems={shoppingCartItems}
        setShoppingCartItems={setShoppingCartItems}
        setOverlayVisible={setOverlayVisible}
      />
    </div>
  );
}
export default Navbar;
