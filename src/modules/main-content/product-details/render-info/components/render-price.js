/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { GlobalStatesMethods }
  from "../../../../global-state-context/global-state-context";
import { convertToTwoDecimals }
  from "../../../../shopping-cart-functions/shopping-cart-functions";

function RenderPrice({ prices, providedClass })
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
              {`${currency.symbol} ${convertToTwoDecimals(amount)}`}
            </p>
          );
        }
      })}
    </div>
  );
}

export default RenderPrice;
