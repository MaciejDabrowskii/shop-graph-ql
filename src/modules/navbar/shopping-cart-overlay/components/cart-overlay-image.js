import React, { Component } from "react";

class RenderImage extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      product: { gallery, name },
    } = this.props;
    return (
      <div className="shoppingCart-overlay-image-container">
        <img
          src={gallery[0]}
          alt={name}
          className="shoppingCart-overlay-image"
        />
      </div>
    );
  }
}
export default RenderImage;

// function RenderImage({ product })
// {
//   return (
//     <div className="shoppingCart-overlay-image-container">
//       <img
//         src={product.gallery[0]}
//         alt={product.name}
//         className="shoppingCart-overlay-image"
//       />
//     </div>
//   );
// }
