import React, { Component } from "react";

class RenderName extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      product: { brand, name },
      passedClass,
    } = this.props;
    return (
      <div className={`${passedClass}-info-name-container`}>
        <p className={`${passedClass}-info-name-brand`}>{brand}</p>
        <p className={`${passedClass}-info-name-brand`}>{name}</p>
      </div>
    );
  }
}

export default RenderName;

// function RenderName({ product })
// {
//   return (
//     <div className="product-details-info-name-container">
//       <p className="product-details-info-name-brand">{product.brand}</p>
//       <p className="product-details-info-name">{product.name}</p>
//     </div>
//   );
// }
