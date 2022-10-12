/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from "react";
import cartIcon from "../../../assets/EmptyCart.svg";
import ShoppingCartOverlay
  from "../shopping-cart-overlay/shopping-cart-overlay";
import { calculateCartItemsQuantity }
  from "../../shopping-cart-functions/shopping-cart-functions";

class ShoppingCartIndicator extends Component
{
  constructor(props)
  {
    super(props);

    const { shoppingCartItems } = this.props;

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleCartVisibility = this.toggleCartVisibility.bind(this);
    this.closeCartOverlay = this.closeCartOverlay.bind(this);

    this.state = JSON.parse(localStorage.getItem("CartOverlayData"))
    || {
      itemsQuantity: calculateCartItemsQuantity(shoppingCartItems),
      isCartOverlayVisible: false,
    };
    this.cartContainerDiv = createRef();
    this.cartIndicator = createRef();
  }

  componentDidMount()
  {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate()
  {
    const { shoppingCartItems } = this.props;

    const { itemsQuantity } = this.state;

    localStorage.setItem("CartOverlayData", JSON.stringify(this.state));

    if (itemsQuantity !== calculateCartItemsQuantity(shoppingCartItems))
    {
      this.setState((prevState) => ({
        ...prevState,
        itemsQuantity: calculateCartItemsQuantity(shoppingCartItems),
      }));
    }
  }

  componentWillUnmount()
  {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) =>
  {
    const { isOverlayVisible, toggleOverlay } = this.props;

    if (!this.cartContainerDiv.current.contains(event.target))
    {
      this.setState((prevState) => ({
        ...prevState,
        isCartOverlayVisible: false,
      }));

      if (isOverlayVisible)
      {
        toggleOverlay();
      }
    }
  };

  toggleCartVisibility = () =>
  {
    const { toggleOverlay } = this.props;

    this.setState((prevState) => ({
      ...prevState,
      isCartOverlayVisible: !prevState.isCartOverlayVisible,
    }));
    toggleOverlay();
  };

  closeCartOverlay = () =>
  {
    const { closeOverlay } = this.props;

    this.setState((prevState) => ({
      ...prevState,
      isCartOverlayVisible: false,
    }));
    closeOverlay();
    console.log("closeCartOverlay");
  };

  render()
  {
    const {
      shoppingCartItems,
      selectedCurrency,
      incrementQuantity,
      decrementQuantity,
      removeItem,
      clearCart,
    } = this.props;

    const {
      itemsQuantity,
      isCartOverlayVisible,
    } = this.state;

    return (
      <div
        className="shopping-cart-indicator-container"
        ref={this.cartContainerDiv}
      >
        <div
          className="shopping-cart-icon-container"
          ref={this.cartIndicator}
          onClick={this.toggleCartVisibility}
        >
          <img src={cartIcon} alt="shopping cart icon" />
          {itemsQuantity > 0 && (
          <div className="shopping-cart-indicator">{itemsQuantity}</div>
          )}
        </div>
        {isCartOverlayVisible && (
        <ShoppingCartOverlay
          itemsQuantity={itemsQuantity}
          shoppingCartItems={shoppingCartItems}
          selectedCurrency={selectedCurrency}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
          clearCart={clearCart}
          closeCartOverlay={this.closeCartOverlay}
        />
        )}
      </div>
    );
  }
}

export default ShoppingCartIndicator;
