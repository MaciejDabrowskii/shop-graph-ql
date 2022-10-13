/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import NavbarCategories from "./navbar-categories/navbar-categories";
import CurrencySelector from "./currency-selector/currency_selector";
import ShoppingCartIndicator
  from "./shopping-cart-indicator/shopping-cart-indicator";
import brandIcon from "../../assets/BrandIcon.svg";
import "./navbar.css";
import GlobalStateContext from "../global-state-context/global-state-context";

class Navbar extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      shoppingCartItems,
    } = this.context;

    return (
      <div className="navbar">
        <NavbarCategories />
        <div className="navbar-brand-logo-container">
          <img src={brandIcon} alt="brand icon" className="brand-logo" />
        </div>
        <div className="navbar-controls-container">
          <CurrencySelector />
          <ShoppingCartIndicator
            shoppingCartItems={shoppingCartItems}
          />
        </div>
      </div>
    );
  }
}

NavbarCategories.contextType = GlobalStateContext;
CurrencySelector.contextType = GlobalStateContext;
ShoppingCartIndicator.contextType = GlobalStateContext;

export default Navbar;
