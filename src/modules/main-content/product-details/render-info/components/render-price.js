/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { convertToTwoDecimals }
  from "../../../../shopping-cart-functions/shopping-cart-functions";

class RenderPrice extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      providedClass,
      prices,
    } = this.props;

    const {
      selectedCurrency,
    } = this.context;

    return (
      <div className={`${providedClass}-price-container`}>
        {prices.map(({ currency, amount }) =>
        {
          if (currency.label === selectedCurrency.label)
          {
            return (
              <p key={amount} className={`${providedClass}-price`}>
                {`${currency.symbol}${convertToTwoDecimals(amount)}`}
              </p>
            );
          }
        })}
      </div>
    );
  }
}

export default RenderPrice;
