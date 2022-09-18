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
      providedClass,
    } = this.props;
    return (
      <div className={`${providedClass}-name-container`}>
        <p className={`${providedClass}-name-brand`}>{brand}</p>
        <p className={`${providedClass}-name`}>{name}</p>
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
