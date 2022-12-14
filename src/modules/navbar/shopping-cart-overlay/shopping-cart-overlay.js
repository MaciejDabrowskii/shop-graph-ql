import React from "react";
import CartOverlayHeading from "./components/cart-overlay-heading";
import RenderName from "../../main-content/product-details/render-info/components/render-name";
import RenderPrice from "../../main-content/product-details/render-info/components/render-price";
import QuantityControls from "./components/quantity-controls";
import RenderImage from "./components/cart-overlay-image";
import { calculateSum } from "../../shopping-cart-functions/shopping-cart-functions";
import SelectedValues from "./components/selected-values";
import NavButtons from "./components/nav-buttons";
import { GlobalStatesMethods } from "../../global-state-context/global-state-context";

function ShoppingCartOverlay({ itemsQuantity })
{
  const { shoppingCartItems, selectedCurrency } = GlobalStatesMethods();

  return (
    <div className="shoppingCart-overlay-container">
      <CartOverlayHeading
        providedClass="shoppingCart-overlay"
        itemsQuantity={itemsQuantity}
      />
      <div className="shoppingCart-overlay-items-container">
        {shoppingCartItems.map((item) => (
          <div
            key={item.cartId}
            className="shoppingCart-overlay-item-container"
          >
            <div className="shoppingCart-overlay-item-data-wrapper">
              <RenderName providedClass="shoppingCart-overlay" product={item} />
              <RenderPrice
                prices={item.prices}
                providedClass="shoppingCart-overlay"
              />

              <SelectedValues
                attributes={item.attributes}
                selectedAttributes={item.selectedAttributes}
                providedClass="shoppingCart-overlay"
              />
            </div>
            <div className="shoppingCart-overlay-item-image-wrapper">
              <QuantityControls
                product={item}
                providedClass="shoppingCart-overlay"
              />
              <RenderImage product={item} />
            </div>
          </div>
        ))}
      </div>
      <div className="shoppingCart-overlay-sum-container">
        <p className="shoppingCart-overlay-total">Total</p>
        <p className="shoppingCart-overlay-sum">
          {`${selectedCurrency.symbol}
           ${calculateSum(shoppingCartItems, selectedCurrency)}`}
        </p>
      </div>
      <NavButtons />
    </div>
  );
}

export default ShoppingCartOverlay;
