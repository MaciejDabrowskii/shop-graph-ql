/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from "react";

function RenderPrice({ prices, selectedCurrency })
{
  return (
    <div className="product-details-info-price-container">
      <h3 className="product-details-info-price-heading">PRICE:</h3>
      {prices.map((price) =>
      {
        if (price.currency.label === selectedCurrency)
        {
          return (
            <p key={price.amount} className="product-details-info-price">
              {price.currency.symbol + price.amount}
            </p>
          );
        }
      })}
    </div>
  );
}
export default RenderPrice;
