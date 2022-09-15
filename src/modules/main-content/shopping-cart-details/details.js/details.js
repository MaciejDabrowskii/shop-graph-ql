import React from "react";
import {
  calculateSum,
  calculateTax,
  calculateCartItemsQuantity,
} from "../../../shopping-cart-functions/shopping-cart-functions";

function Details({ shoppingCartItems, selectedCurrency })
{
  return (
    <div className="shoppingCartDetails-details-container">
      <p>
        Tax 21%:
        {" "}
        <span className="bolder">
          {selectedCurrency.symbol}
          {calculateTax(calculateSum, shoppingCartItems, selectedCurrency)}
        </span>
      </p>
      <p>
        Quantity:
        {" "}
        <span className="bolder">
          {calculateCartItemsQuantity(shoppingCartItems)}
        </span>
      </p>
      <p className="total">
        Total:
        {" "}
        <span className="bolder">
          {selectedCurrency.symbol}
          {calculateSum(shoppingCartItems, selectedCurrency)}
        </span>
      </p>
    </div>
  );
}
export default Details;
