import React from "react";

function CartOverlayHeading({ itemsQuantity })
{
  return (
    <div className="shoppingCart-overlay-heading">
      <p className="shoppingCart-overlay-heading-bolder">
        My Bag,
        {" "}
        <span>
          {`${itemsQuantity} ${itemsQuantity === 1 ? "item" : "items"}`}
        </span>
      </p>
    </div>
  );
}
export default CartOverlayHeading;
