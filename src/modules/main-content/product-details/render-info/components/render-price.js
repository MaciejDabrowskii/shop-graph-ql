/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";

function RenderPrice({ prices, selectedCurrency })
{
  return (
    <div className="product-details-info-price-container">
      {prices.map((price) =>
      {
        if (price.currency.label === selectedCurrency.label)
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
