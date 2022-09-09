/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
// import { increaseQuantity, decreaseQuantity }
//   from "../../../shopping-cart-functions/shopping-cart-functions";
import { increaseQuantity, decreaseQuantity }
  from "../../../shopping-cart-functions/shopping-cart-functions";

function QuantityControls(
  {
    product,
    shoppingCartItems,
    setShoppingCartItems,
    itemsQuantity,
  },
)
{
  return (
    <div className="shoppingCart-overlay-quantityControl-container">
      <button
        type="button"
        onClick={() => setShoppingCartItems(() => shoppingCartItems.map(
          (item) => (item.cartId === product.cartId
            ? increaseQuantity(product) : item),
        ))}
      >
        +
      </button>
      {itemsQuantity}
      <button
        type="button"
        onClick={
            product.quantity > 1
              ? () => setShoppingCartItems(() => shoppingCartItems.map(
                (item) => (item.cartId === product.cartId
                  ? decreaseQuantity(product) : item),
              ))
              : () => setShoppingCartItems(() => shoppingCartItems.filter(
                (item) => item.cartId !== product.cartId,
              ))
        }
      >
        -
      </button>
    </div>
  );
}
export default QuantityControls;
