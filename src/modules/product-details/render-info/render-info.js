/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import RenderAttributes from "./components/render-attributes/render-attributes";
import RenderPrice from "./components/render-price";
import RenderDescription from "./components/render-description";

function RenderInfo(
  {
    product,
    selectedCurrency,
    shopinCartItems,
    setShopinCartItems,
  },
)
{
  const [selectedAttributes, setSelectedAttributes] = useState(() =>
  {
    const obj = {};
    product.attributes.map((atribute) =>
    {
      obj[atribute.name] = "";
    });
    return obj;
  });

  const [showWarning, setShowWarning] = useState(false);

  const generateCartiD = product.id + Object.values(selectedAttributes)
    .join("")
    .replace(/\s/g, "");

  const checkAttributes = Object.values(selectedAttributes)
    .every(
      (attribute) => attribute !== "",
    );

  function warning()
  {
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 3000);
  }

  function addToCart()
  {
    if (checkAttributes)
    {
      if (shopinCartItems.some((item) => item.cartId === generateCartiD))
      {
        setShopinCartItems(shopinCartItems.map((item) => (
          item.cartId === generateCartiD ? { ...item, quantinity: item.quantinity + 1 } : item
        )));
      }
      else
      {
        setShopinCartItems([...shopinCartItems,
          {
            ...product,
            cartId: generateCartiD,
            quantinity: 1,
          }]);
      }
    }
    else warning();
  }

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
      <div className="product-details-info-button-container">
        <button
          type="button"
          className="product-details-info-button"
          onClick={() => addToCart()}
        >
          ADD TO CART
        </button>
        {showWarning && (
        <span
          className="product-details-info-warning"
        >
          {`Please select: ${Object.keys(selectedAttributes)
            .map((attribute) => (selectedAttributes[attribute] === "" ? attribute : ""))}`}
        </span>
        )}
      </div>
      <RenderPrice
        prices={product.prices}
        selectedCurrency={selectedCurrency}
      />
      <RenderDescription description={product.description} />
    </div>
  );
}
export default RenderInfo;
