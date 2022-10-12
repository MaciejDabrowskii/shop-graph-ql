import React, { Component } from "react";
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

class ShoppingCartOverlay extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      shoppingCartItems,
      itemsQuantity,
      selectedCurrency,
      incrementQuantity,
      decrementQuantity,
      removeItem,
      clearCart,
      closeCartOverlay,
    } = this.props;

    return (
      <div className="shoppingCart-overlay-container">
        <CartOverlayHeading
          itemsQuantity={itemsQuantity}
          providedClass="shoppingCart-overlay"
        />
        <div className="shoppingCart-overlay-items-container">
          {shoppingCartItems.map((item) => (
            <div
              key={item.cartId}
              className="shoppingCart-overlay-item-container"
            >
              <div className="shoppingCart-overlay-item-data-wrapper">

                <RenderName
                  product={item}
                  providedClass="shoppingCart-overlay"
                />
                <RenderPrice
                  prices={item.prices}
                  selectedCurrency={selectedCurrency}
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
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  removeItem={removeItem}
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
        <NavButtons
          closeCartOverlay={closeCartOverlay}
          clearCart={clearCart}
        />
      </div>
    );
  }
}

export default ShoppingCartOverlay;
