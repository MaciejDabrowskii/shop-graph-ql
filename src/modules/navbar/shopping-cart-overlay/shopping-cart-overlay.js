/* eslint-disable react/prop-types */
import React from "react";
import CartOverlayHeading from "./components/cart-overlay-heading";
import RenderName
  from "../../product-details/render-info/components/render-name";
import RenderPrice
  from "../../product-details/render-info/components/render-price";
import QuantityControls from "./components/quantity-controls";
import RenderImage from "./components/cart-overlay-image";
import { calculateSum }
  from "../../shopping-cart-functions/shopping-cart-functions";

function ShoppingCartOverlay(
  {
    shoppingCartItems,
    itemsQuantity,
    selectedCurrency,
    setShoppingCartItems,
  },
)
{
  return (
    <div className="shoppingCart-overlay-container">
      <CartOverlayHeading
        itemsQuantity={itemsQuantity}
      />
      {shoppingCartItems.map((item) => (
        <div
          key={item.cartId}
          className="shoppingCart-overlay-item-container"
        >
          <RenderName
            product={item}
          />
          <RenderPrice
            prices={item.prices}
            selectedCurrency={selectedCurrency}
          />
          <QuantityControls
            product={item}
            shoppingCartItems={shoppingCartItems}
            setShoppingCartItems={setShoppingCartItems}
          />
          <RenderImage
            product={item}
          />
        </div>
      ))}
      <div className="shoppingCart-overlay-sum-container">
        <p>Total</p>
        <p
          className="shoppingCart-overlay-sum"
        >
          {calculateSum(shoppingCartItems, selectedCurrency)}

        </p>
      </div>
    </div>
  );
}
export default ShoppingCartOverlay;
