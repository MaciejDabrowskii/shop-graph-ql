import React from "react";
import RenderName from "../product-details/render-info/components/render-name";
import RenderPrice from "../product-details/render-info/components/render-price";
import SelectedValues from "../../navbar/shopping-cart-overlay/components/selected-values";
import QuantityControls from "../../navbar/shopping-cart-overlay/components/quantity-controls";
import ImageSelector from "./image-selector/image-selector";
import Details from "./details.js/details";
import "./shopping-cart-details.css";
import { GlobalStatesMethods } from "../../global-state-context/global-state-context";

function ShoppingCartDetails({ providedClass })
{
  const { shoppingCartItems, setShoppingCartItems } = GlobalStatesMethods();

  return (
    <div className="shoppingCartDetails-container">
      <h1 className="shoppingCartDetails-heading">CART</h1>
      {shoppingCartItems.map((item) => (
        <div key={item.cartId} className="shoppingCartDetails-item-container">
          <div className="shoppingCartDetails-item-data-wrapper">
            <RenderName product={item} providedClass={providedClass} />
            <RenderPrice prices={item.prices} providedClass={providedClass} />
            <SelectedValues
              attributes={item.attributes}
              selectedAttributes={item.selectedAttributes}
              providedClass={providedClass}
            />
          </div>
          <div className="shoppingCartDetails-item-image-wrapper">
            <QuantityControls product={item} providedClass={providedClass} />
            <ImageSelector product={item} />
          </div>
        </div>
      ))}
      <Details />
      <button
        onClick={() => setShoppingCartItems([])}
        type="button"
        className="shoppingCartDetails-order-btn"
      >
        ORDER
      </button>
    </div>
  );
}

export default ShoppingCartDetails;
