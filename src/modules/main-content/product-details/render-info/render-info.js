/* eslint-disable array-callback-return */

import React, { useState } from "react";
import RenderAttributes from "./components/render-attributes";
import RenderPrice from "./components/render-price";
import RenderDescription from "./components/render-description";
import RenderName from "./components/render-name";

function RenderInfo({
  product,
  selectedCurrency,
  shoppingCartItems,
  setShoppingCartItems,
  providedClass,
  showDetails,
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
  return (
    <div className={`${providedClass}-container`}>
      <RenderName
        product={product}
        providedClass={providedClass}
      />
      <RenderAttributes
        attributes={product.attributes}
        selectedAttributes={selectedAttributes}
        providedClass={providedClass}
        setSelectedAttributes={setSelectedAttributes}
      />
      <h3 className="product-details-info-price-heading">PRICE:</h3>
      <RenderPrice
        prices={product.prices}
        selectedCurrency={selectedCurrency}
        providedClass={providedClass}
      />
      {product.inStock ? (
        <div className={`${providedClass}-button-container`}>
          <button
            type="button"
            className={`${providedClass}-button`}
            onClick={() => addToCart()}
          >
            ADD TO CART
          </button>
          {showWarning && (
            <span className={`${providedClass}-warning`}>
              {`*Please select: ${Object.keys(selectedAttributes)
                .map(
                  (attribute) => (selectedAttributes[attribute] === ""
                    ? ` ${attribute}` : ""),
                )}`}
            </span>
          )}
        </div>
      ) : (
        <div className={`${providedClass}-outOfStock-container`}>
          OUT OF STOCK
        </div>
      )}
      {showDetails && (
        <RenderDescription description={product.description} />
      )}
    </div>
  );
}
export default RenderInfo;
