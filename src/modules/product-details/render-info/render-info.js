/* eslint-disable react/prop-types */
import React from "react";
import RenderAttributes from "./components/render-atributes";

function RenderInfo(
  {
    product,
  },
)
{
  return (
    <div className="product-details-info-container">
      <div className="product-details-info-name-container">
        <h3 className="product-details-info-name-brand">{product.brand}</h3>
        <p className="product-details-info-name">{product.name}</p>
      </div>
      <RenderAttributes
        attributes={product.attributes}
      />
    </div>
  );
}
export default RenderInfo;
