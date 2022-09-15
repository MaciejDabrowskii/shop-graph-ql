import React from "react";

function RenderName({ product })
{
  return (
    <div className="product-details-info-name-container">
      <p className="product-details-info-name-brand">{product.brand}</p>
      <p className="product-details-info-name">{product.name}</p>
    </div>
  );
}
export default RenderName;
