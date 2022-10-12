/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import NavbarCategories from "./navbar-categories/navbar-categories";
import CurrencySelector from "./currency-selector/currency_selector";
import ShoppingCartIndicator
  from "./shopping-cart-indicator/shopping-cart-indicator";
import brandIcon from "../../assets/BrandIcon.svg";
import "./navbar.css";

class Navbar extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      selectedCategory,
      setSelectedCategory,
      selectedCurrency,
      setSelectedCurrency,
      shoppingCartItems,
      setShoppingCartItems,
      isOverlayVisible,
      toggleOverlay,
      closeOverlay,
      incrementQuantity,
      decrementQuantity,
      removeItem,
      clearCart,
    } = this.props;

    return (
      <div className="navbar">
        <NavbarCategories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <div className="navbar-brand-logo-container">
          <img src={brandIcon} alt="brand icon" className="brand-logo" />
        </div>
        <div className="navbar-controls-container">
          <CurrencySelector
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />
          <ShoppingCartIndicator
            shoppingCartItems={shoppingCartItems}
            setShoppingCartItems={setShoppingCartItems}
            selectedCurrency={selectedCurrency}
            isOverlayVisible={isOverlayVisible}
            closeOverlay={closeOverlay}
            toggleOverlay={toggleOverlay}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
            clearCart={clearCart}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
