import React from "react";

function CartOverlayHeading({ providedClass, itemsQuantity })
{
  return (
    <div className={`${providedClass}-heading`}>
      <p className={`${providedClass}-heading-bolder`}>
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
