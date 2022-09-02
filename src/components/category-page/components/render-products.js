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
            <p>
              {product.prices.map((price) =>
              {
                if (price.currency.label === selectedCurrency) return price.amount;
              })}
            </p>

          </div>

        </div>
      ))}
    </div>
  );
}
export default RenderProducts;
