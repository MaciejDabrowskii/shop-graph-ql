/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from "react";

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
      providedClass,
      incrementQuantity,
      decrementQuantity,
      removeItem,
    } = this.props;
    return (
      <div className={`${providedClass}-quantityControl-container`}>
        <button
          type="button"
          onClick={() => incrementQuantity(product)}
        >
          {"\u002B"}
        </button>
        <p>{product.quantity}</p>
        <button
          type="button"
          onClick={
          product.quantity > 1
            ? () => decrementQuantity(product)
            : () => removeItem(product)
          }
        >
          {"\u2212"}
        </button>
      </div>
    );
  }
}
export default QuantityControls;
