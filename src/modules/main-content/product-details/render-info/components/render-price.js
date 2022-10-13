/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { GlobalStatesMethods }
  from "../../../../global-state-context/global-state-context";

function RenderPrice(
  {
    prices,
    providedClass,
  },
)
{
  const { selectedCurrency } = GlobalStatesMethods();

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
