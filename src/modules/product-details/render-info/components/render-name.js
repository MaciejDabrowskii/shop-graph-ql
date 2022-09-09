/* eslint-disable react/prop-types */
import React from "react";

function RenderName(
  {
    product,
  },
)
{
  return (
    <div className="product-details-info-name-container">
      <h3 className="product-details-info-name-brand">{product.brand}</h3>
      <p className="product-details-info-name">{product.name}</p>
    </div>
  );
}
export default RenderName;
