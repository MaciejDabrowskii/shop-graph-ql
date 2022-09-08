/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import cartIcon from "../../../assets/EmptyCart.svg";
import ShoppingCartOverlay
  from "../shopping-cart-overlay/shopping-cart-overlay";

function ShoppingCartIndicator(
  {
    shoppingCartItems,
    setOverlayVisible,
  },
)
{
  const cartCpntainerDiv = useRef();
  const cartIndicator = useRef();
  const [itemsQuantity, setItemsQuantity] = useState(0);

  const [
    cartOverlayVisible,
    setCartOverlayVisible,
  ] = useState(false);

  const calculateCartItemsQuantity = (items) =>
  {
    if (items.length > 0)
    {
      return setItemsQuantity(
        items.reduce((sum, item) => sum + item.quantinity, 0),
      );
    }
  };

  const handleClickInside = (e) =>
  {
    if (cartIndicator.current.contains(e.target))
    {
      setCartOverlayVisible((current) => !current);
      setOverlayVisible((current) => !current);
    }
  };

  const handleClickOutside = (e) =>
  {
    if (!cartCpntainerDiv.current.contains(e.target))
    {
      setCartOverlayVisible(false);
      setOverlayVisible(false);
    }
  };

  useEffect(
    () => calculateCartItemsQuantity(shoppingCartItems),
    [shoppingCartItems],
  );
  useEffect(() =>
  {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div
      className="shopping-cart-indicator-container"
      ref={cartCpntainerDiv}
    >
      <div
        className="shopping-cart-icon-container"
        ref={cartIndicator}
        onClick={(e) => handleClickInside(e)}
      >
        <img src={cartIcon} alt="shopping cart icon" />
        {itemsQuantity > 0 && (
        <div className="shopping-cart-indicator">{itemsQuantity}</div>
        )}
      </div>
      {cartOverlayVisible && (
        <ShoppingCartOverlay
          itemsQuantity={itemsQuantity}
          shoppingCartItems={shoppingCartItems}
        />
      )}
    </div>
  );
}
export default ShoppingCartIndicator;
