import React from "react";

function CartOverlayHeading({ itemsQuantity })
{
  return (
    <div className="shoppingCart-overlay-heading">
      <p>
        My Bag,
        {" "}
        <span className="bolder">
          {`${itemsQuantity} ${itemsQuantity === 1 ? "item" : "items"}`}
        </span>
      </p>
    </div>
  );
}
export default CartOverlayHeading;
