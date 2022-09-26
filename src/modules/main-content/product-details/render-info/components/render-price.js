/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

import React from "react";

function RenderPrice(
  {
    prices,
    selectedCurrency,
    providedClass,
  },
)
{
  return (
    <div className={`${providedClass}-price-container`}>
      {prices.map(({ currency, amount }) =>
      {
        if (currency.label === selectedCurrency.label)
        {
          return (
            <p key={amount} className={`${providedClass}-price`}>
              {currency.symbol + amount}
            </p>
          );
        }
      })}
    </div>
  );
}

export default RenderPrice;
