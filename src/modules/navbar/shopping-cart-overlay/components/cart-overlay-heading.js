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
      passedClass,
      itemsQuantity,
    } = this.props;

    return (
      <div className={`${passedClass}-heading`}>
        <p className={`${passedClass}-heading-bolder`}>
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

// function CartOverlayHeading({ itemsQuantity })
// {
//   return (
//     <div className="shoppingCart-overlay-heading">
//       <p className="shoppingCart-overlay-heading-bolder">
//         My Bag,
//         {" "}
//         <span>
//           {`${itemsQuantity} ${itemsQuantity === 1 ? "item" : "items"}`}
//         </span>
//       </p>
//     </div>
//   );
// }
