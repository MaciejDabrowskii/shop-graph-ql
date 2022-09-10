import React from "react";
import RenderName from "../product-details/render-info/components/render-name";
import RenderPrice
  from "../product-details/render-info/components/render-price";
import SelectedValues
  from "../../navbar/shopping-cart-overlay/components/selected-values";
import QuantityControls
  from "../../navbar/shopping-cart-overlay/components/quantity-controls";
import ImageSelector from "./image-selector/image-selector";
import Details from "./details.js/details";

function ShoppingCartDetails({
  shoppingCartItems,
  selectedCurrency,
  setShoppingCartItems,
})
{
  return (
    <div className="shoppingCartDetails-container">
      <h1 className="shoppingCartDetails-heading">CART</h1>
      {shoppingCartItems.map((item) => (
        <div key={item.cartId} className="shoppingCartDetails-item-container">
          <div className="shoppingCartDetails-item-data-wrapper">
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
          <div className="shoppingCartDetails-item-image-wrapper">
            <QuantityControls
              product={item}
              shoppingCartItems={shoppingCartItems}
              setShoppingCartItems={setShoppingCartItems}
            />
            <ImageSelector product={item} />
          </div>
        </div>
      ))}
      <Details
        shoppingCartItems={shoppingCartItems}
        selectedCurrency={selectedCurrency}
      />
      <button
        onClick={() => setShoppingCartItems([])}
        type="button"
      >
        ORDER

      </button>
    </div>
  );
}
export default ShoppingCartDetails;
