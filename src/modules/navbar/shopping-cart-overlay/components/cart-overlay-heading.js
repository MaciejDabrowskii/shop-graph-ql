/* eslint-disable react/prop-types */
import React from "react";

function CartOverlayHeading({ itemsQuantity })
{
  return (
    <div className="shoppingCart-overlay-heading">
      <p style={{ fontWeight: "700", display: "inline-block" }}>My Bag,</p>
      <p style={{ display: "inline-block", paddingLeft: "4px" }}>
        {`${itemsQuantity} ${itemsQuantity === 1 ? "item" : "items"}`}
      </p>
    </div>
  );
}
export default CartOverlayHeading;
