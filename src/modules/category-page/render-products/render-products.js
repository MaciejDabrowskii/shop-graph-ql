/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React from "react";

function RenderProducts({ products, selectedCurrency })
{
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img
            src={product.gallery[0]}
            className="product-image"
            alt={`${product.name}`}
          />
          <div className="product-info">
            <p className="product-name">
              {product.name}
            </p>
            {product.prices.map((price) =>
            {
              if (price.currency.label === selectedCurrency)
              {
                return (
                  <p>{`${price.currency.symbol} ${price.amount}`}</p>
                );
              }
            })}
          </div>
          {!product.inStock
            && (
            <div
              className="product-outOfStock-overlay"
            >
              <p className="product-overlay-text">
                OUT OF STOCK
              </p>
            </div>
            )}
        </div>
      ))}
    </div>
  );
}
export default RenderProducts;
