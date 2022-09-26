import React from "react";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../shopping-cart-functions/shopping-cart-functions";

function QuantityControls({
  product: { cartId, quantity },
  shoppingCartItems,
  setShoppingCartItems,
  providedClass,
})
{
  return (
    <div className={`${providedClass}-quantityControl-container`}>
      <button
        type="button"
        onClick={() => setShoppingCartItems(
          () => shoppingCartItems.map(
            (item) => (item.cartId === cartId
              ? increaseQuantity(item) : item),
          ),
        )}
      >
        {"\u002B"}
      </button>
      <p>{quantity}</p>
      <button
        type="button"
        onClick={
          quantity > 1
            ? () => setShoppingCartItems(() => shoppingCartItems.map(
              (item) => (item.cartId === cartId
                ? decreaseQuantity(item)
                : item),
            ))
            : () => setShoppingCartItems(() => shoppingCartItems.filter(
              (item) => item.cartId !== cartId,
            ))
        }
      >
        {"\u2212"}
      </button>

    </div>
  );
}

export default QuantityControls;
