/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect, useState, useRef } from "react";
import cartIcon from "../../../assets/EmptyCart.svg";
import ShoppingCartOverlay from "../shopping-cart-overlay/shopping-cart-overlay";
import { calculateCartItemsQuantity } from "../../shopping-cart-functions/shopping-cart-functions";
import { GlobalStatesMethods } from "../../global-state-context/global-state-context";

function ShoppingCartIndicator()
{
  const { shoppingCartItems, setOverlayVisible } = GlobalStatesMethods();

  const cartCpntainerDiv = useRef();

  const cartIndicator = useRef();

  const [itemsQuantity, setItemsQuantity] = useState(0);

  const [cartOverlayVisible, setCartOverlayVisible] = useState(false);

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

  useEffect(() =>
  {
    setItemsQuantity(() => calculateCartItemsQuantity(shoppingCartItems));
  }, [shoppingCartItems]);

  useEffect(() =>
  {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="shopping-cart-indicator-container" ref={cartCpntainerDiv}>
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
        <ShoppingCartOverlay itemsQuantity={itemsQuantity} />
      )}
    </div>
  );
}

export default ShoppingCartIndicator;
