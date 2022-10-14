/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from "react";
import cartIcon from "../../../assets/EmptyCart.svg";
import ShoppingCartOverlay
  from "../shopping-cart-overlay/shopping-cart-overlay";
import { calculateCartItemsQuantity }
  from "../../shopping-cart-functions/shopping-cart-functions";
import GlobalStateContext
  from "../../global-state-context/global-state-context";

class ShoppingCartIndicator extends Component
{
  constructor(props)
  {
    super(props);

    const { shoppingCartItems } = this.props;

    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = JSON.parse(localStorage.getItem("CartOverlayData")) || {
      itemsQuantity: calculateCartItemsQuantity(shoppingCartItems),
    };
    this.cartContainerDiv = createRef();
  }

  componentDidMount()
  {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate()
  {
    const { shoppingCartItems } = this.context;

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
    const { closeOverlay } = this.context;

    if (!this.cartContainerDiv.current.contains(event.target))
    {
      closeOverlay();
    }
  };

  render()
  {
    const { itemsQuantity } = this.state;

    const { isCartOverlayVisible, toggleOverlay } = this.context;

    return (
      <div
        className="shopping-cart-indicator-container"
        ref={this.cartContainerDiv}
      >
        <div
          className="shopping-cart-icon-container"
          onClick={() => toggleOverlay()}
        >
          <img src={cartIcon} alt="shopping cart icon" />
          {itemsQuantity > 0 && (
            <div className="shopping-cart-indicator">{itemsQuantity}</div>
          )}
        </div>
        {isCartOverlayVisible && (
          <ShoppingCartOverlay itemsQuantity={itemsQuantity} />
        )}
      </div>
    );
  }
}

ShoppingCartOverlay.contextType = GlobalStateContext;

export default ShoppingCartIndicator;
