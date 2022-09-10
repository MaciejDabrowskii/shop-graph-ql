import React from "react";
import CartOverlayHeading from "./components/cart-overlay-heading";
import RenderName
  from "../../main-content/product-details/render-info/components/render-name";
import RenderPrice
  from "../../main-content/product-details/render-info/components/render-price";
import QuantityControls from "./components/quantity-controls";
import RenderImage from "./components/cart-overlay-image";
import { calculateSum }
  from "../../shopping-cart-functions/shopping-cart-functions";
import SelectedValues from "./components/selected-values";
import NavButtons from "./components/nav-buttons";

function ShoppingCartOverlay({
  shoppingCartItems,
  itemsQuantity,
  selectedCurrency,
  setShoppingCartItems,
})
{
  return (
    <div className="shoppingCart-overlay-container">
      <CartOverlayHeading itemsQuantity={itemsQuantity} />
      {shoppingCartItems.map((item) => (
        <div key={item.cartId} className="shoppingCart-overlay-item-container">
          <div className="shoppingCart-overlay-item-data-wrapper">
            <RenderName product={item} />
            <RenderPrice
              prices={item.prices}
              selectedCurrency={selectedCurrency}
            />
            <SelectedValues
              attributes={item.attributes}
              selectedAttributes={item.selectedAttributes}
            />
          </div>
          <div className="shoppingCart-overlay-item-image-wrapper">
            <QuantityControls
              product={item}
              shoppingCartItems={shoppingCartItems}
              setShoppingCartItems={setShoppingCartItems}
            />
            <RenderImage product={item} />
          </div>
        </div>
      ))}
      <div className="shoppingCart-overlay-sum-container">
        <p>Total</p>
        <p className="shoppingCart-overlay-sum">
          {`${selectedCurrency.symbol}
           ${calculateSum(shoppingCartItems, selectedCurrency)}`}
        </p>
      </div>
      <NavButtons setShoppingCartItems={setShoppingCartItems} />
    </div>
  );
}
export default ShoppingCartOverlay;