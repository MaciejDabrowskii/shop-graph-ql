import React from "react";
import NavbarCategories from "./navbar-categories/navbar-categories";
import CurrencySelector from "./currency-selector/currency_selector";
import ShoppingCartIndicator
  from "./shopping-cart-indicator/shopping-cart-indicator";
import brandIcon from "../../assets/BrandIcon.svg";
import "./navbar.css";

function Navbar()
{
  return (
    <div className="navbar">
      <NavbarCategories />
      <div className="navbar-brand-logo-container">
        <img src={brandIcon} alt="brand icon" className="brand-logo" />
      </div>
      <div className="navbar-controls-container">
        <CurrencySelector />
        <ShoppingCartIndicator />
      </div>
    </div>
  );
}

export default Navbar;
