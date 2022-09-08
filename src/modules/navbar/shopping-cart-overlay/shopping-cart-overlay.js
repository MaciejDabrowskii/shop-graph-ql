/* eslint-disable react/prop-types */
import React from "react";

function ShoppingCartOverlay(
  {
    shoppingCartItems,
    itemsQuantity,
  },
)
{
  console.log("ShoppingCartOverlay", shoppingCartItems);
  return (
    <div className="shoppingCart-overlay-container">
      <div className="shoppingCart-overlay-heading">
        <p
          style={{ fontWeight: "700", display: "inline-block" }}
        >
          My Bag,
        </p>
        <p
          style={{ display: "inline-block", paddingLeft: "4px" }}
        >
          {`${itemsQuantity} ${itemsQuantity > 1 ? "items" : "item"}`}
        </p>
      </div>

      {shoppingCartItems.map((item) => (
        <div
          key={item.cartId}
          className="shoppingCart-overlay-item-container"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
export default ShoppingCartOverlay;
