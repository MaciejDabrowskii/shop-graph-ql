import React, { Component } from "react";

class CartOverlayHeading extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      providedClass,
      itemsQuantity,
    } = this.props;

    return (
      <div className={`${providedClass}-heading`}>
        <p className={`${providedClass}-heading-bolder`}>
          My Bag,
          {" "}
          <span>
            {`${itemsQuantity} ${itemsQuantity === 1 ? "item" : "items"}`}
          </span>
        </p>
      </div>
    );
  }
}
export default CartOverlayHeading;
