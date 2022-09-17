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
      passedClass,
    } = this.props;

    return (
      <div className={`${passedClass}-info-price-container`}>
        {prices.map(({ currency, amount }) =>
        {
          if (currency.label === selectedCurrency.label)
          {
            return (
              <p key={amount} className="product-details-info-price">
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

// function RenderPrice({ prices, selectedCurrency })
// {
//   return (
//     <div className="product-details-info-price-container">
//       {prices.map((price) =>
//       {
//         if (price.currency.label === selectedCurrency.label)
//         {
//           return (
//             <p key={price.amount} className="product-details-info-price">
//               {price.currency.symbol + price.amount}
//             </p>
//           );
//         }
//       })}
//     </div>
//   );
// }
