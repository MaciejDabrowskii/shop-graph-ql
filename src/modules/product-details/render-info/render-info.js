/* eslint-disable react/prop-types */
import React from "react";
import RenderAttributes from "./components/render-atributes";
import RenderPrice from "./components/render-price";
import RenderDescription from "./components/render-description";

function RenderInfo(
  {
    product,
    selectedCurrency,
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
      <RenderPrice
        prices={product.prices}
        selectedCurrency={selectedCurrency}
      />
      <RenderDescription
        description={product.description}
      />
    </div>
  );
}
export default RenderInfo;
