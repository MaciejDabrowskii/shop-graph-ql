/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import cartIcon from "../../../assets/EmptyCart.svg";

function ShopingCartIndicator({ shopinCartItems, setShopinCartItems })
{
  const [itemsNumber, setItemsNumber] = useState(0);

  const cartItemsNumber = (items) =>
  {
    if (items.length > 0)
    {
      return setItemsNumber(
        items.reduce((sum, item) => sum + item.quantinity, 0),
      );
    }
  };

  useEffect(() => cartItemsNumber(shopinCartItems), [itemsNumber]);

  return (
    <div className="shoping-cart-indicator-container">
      <div className="shoping-cart-icon-container">
        <img src={cartIcon} alt="shoping cart icon" />
      </div>
      {itemsNumber > 0 && (
        <div className="shoping-cart-indicator">{itemsNumber}</div>
      )}
    </div>
  );
}
export default ShopingCartIndicator;
