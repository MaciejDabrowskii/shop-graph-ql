/* eslint-disable react/prop-types */
import React from "react";
import NavbarCategories from "./navbar-categories/navbar-categories";
import CurrencySelector from "./currency-selector/currency_selector";
import ShopingCartIndicator from
  "./shoping-cart-indicator/shoping-cart-indicator";
import brandIcon from "../../assets/BrandIcon.svg";

function Navbar({
  selectedCategory,
  setSelectedCategory,
  selectedCurrency,
  setSelectedCurrency,
  shopinCartItems,
  setShopinCartItems,
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
      <ShopingCartIndicator
        shopinCartItems={shopinCartItems}
        setShopinCartItems={setShopinCartItems}
      />
    </div>
  );
}
export default Navbar;
