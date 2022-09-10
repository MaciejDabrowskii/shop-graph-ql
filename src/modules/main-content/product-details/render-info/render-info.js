/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import RenderAttributes from "./components/render-attributes";
import RenderPrice from "./components/render-price";
import RenderDescription from "./components/render-description";
import RenderName from "./components/render-name";

function RenderInfo({
  product,
  selectedCurrency,
  shoppingCartItems,
  setShoppingCartItems,
})
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
      if (shoppingCartItems.some((item) => item.cartId === generateCartiD))
      {
        setShoppingCartItems(
          shoppingCartItems.map((item) => (item.cartId === generateCartiD
            ? { ...item, quantity: item.quantity + 1 }
            : item)),
        );
      }
      else
      {
        setShoppingCartItems([
          ...shoppingCartItems,
          {
            ...product,
            cartId: generateCartiD,
            quantity: 1,
            selectedAttributes,
          },
        ]);
      }
    }
    else warning();
  }
  console.log("RenderInfo", product);
  return (
    <div className="product-details-info-container">
      <RenderName product={product} />
      <RenderAttributes
        attributes={product.attributes}
        selectedAttributes={selectedAttributes}
        setSelectedAttributes={setSelectedAttributes}
      />
      {product.inStock ? (
        <div className="product-details-info-button-container">
          <button
            type="button"
            className="product-details-info-button"
            onClick={() => addToCart()}
          >
            ADD TO CART
          </button>
          {showWarning && (
            <span className="product-details-info-warning">
              {`Please select: ${Object.keys(selectedAttributes)
                .map(
                  (attribute) => (selectedAttributes[attribute] === "" ? attribute : ""),
                )}`}
            </span>
          )}
        </div>
      ) : (
        <div className="product-details-info-outOfStock-container">
          <h3 className="product-details-info-outOfStock">OUT OF STOCK</h3>
        </div>
      )}
      <h3 className="product-details-info-price-heading">PRICE:</h3>
      <RenderPrice
        prices={product.prices}
        selectedCurrency={selectedCurrency}
      />
      <RenderDescription description={product.description} />
    </div>
  );
}
export default RenderInfo;
