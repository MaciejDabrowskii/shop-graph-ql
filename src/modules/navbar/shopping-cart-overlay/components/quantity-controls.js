/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from "react";

// className={`${passedClass}`}
class QuantityControls extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      product,
      passedClass,
      incrementQuantity,
      decrementQuantity,
      removeItem,
    } = this.props;
    return (
      <div className={`${passedClass}-quantityControl-container`}>
        <button
          type="button"
          onClick={incrementQuantity(product)}
        >
          {"\u002B"}
        </button>
        <p>{product.quantity}</p>
        <button
          type="button"
          onClick={
          product.quantity > 1
            ? decrementQuantity(product)
            : removeItem(product)
          }
        >
          {"\u2212"}
        </button>
      </div>
    );
  }
}
export default QuantityControls;

// function QuantityControls({
//   product,
//   shoppingCartItems,
//   setShoppingCartItems,
// })
// {
//   return (
//     <div className="shoppingCart-overlay-quantityControl-container">
//       <button
//         type="button"
//         onClick={() => setShoppingCartItems(
//           () => shoppingCartItems.map(
//             (item) => (item.cartId === product.cartId
//               ? increaseQuantity(item) : item),
//           ),
//         )}
//       >
//         {"\u002B"}

//       </button>
//       <p>{product.quantity}</p>
//       <button
//         type="button"
//         className="shoppingCart-overlay-quantityControl-minus"
//         onClick={
//           product.quantity > 1
//             ? () => setShoppingCartItems(() => shoppingCartItems.map(
//               (item) => (item.cartId === product.cartId
//                 ? decreaseQuantity(item)
//                 : item),
//             ))
//             : () => setShoppingCartItems(() => shoppingCartItems.filter(
//               (item) => item.cartId !== product.cartId,
//             ))
//         }
//       >
//         {"\u2212"}

//       </button>

//     </div>
//   );
// }
