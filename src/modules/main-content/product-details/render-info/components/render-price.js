/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { Component } from "react";

class RenderPrice extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      prices,
      selectedCurrency,
      providedClass,
    } = this.props;

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
}
export default RenderPrice;
