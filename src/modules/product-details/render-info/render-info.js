/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
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
  console.log(product);
  const [selectedAttributes, setSelectedAttributes] = useState(() =>
  {
    const obj = {};
    product.attributes.map((atribute) =>
    {
      obj[atribute.name] = "";
    });
    return obj;
  });

  const generateCartiD = (productData, atributes) => productData.id + Object.values(atributes)
    .join("");

  const checkAttributes = Object.values(selectedAttributes)
    .every((attribute) => attribute !== "");

  return (
    <div className="product-details-info-container">
      <div className="product-details-info-name-container">
        <h3 className="product-details-info-name-brand">{product.brand}</h3>
        <p className="product-details-info-name">{product.name}</p>
      </div>
      <RenderAttributes
        attributes={product.attributes}
        selectedAttributes={selectedAttributes}
        setSelectedAttributes={setSelectedAttributes}
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
