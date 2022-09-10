import React from "react";

function RenderImage({ product })
{
  return (
    <div className="shoppingCart-overlay-image-container">
      <img
        src={product.gallery[0]}
        alt={product.name}
        className="shoppingCart-overlay-image"
      />
    </div>
  );
}
export default RenderImage;
