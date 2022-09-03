/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../../assets/EmptyCart.svg";

function RenderProducts(
  {
    products,
    selectedCurrency,
    categoryName,
  },
)
{
  const [isHovering, setIsHovering] = useState(() =>
  {
    const obj = {};
    products.map((product) =>
    {
      obj[product.id] = false;
    });
    return obj;
  });

  const handleMouseOver = (id) =>
  {
    setIsHovering({ ...isHovering, [id]: true });
  };

  const handleMouseOut = (id) =>
  {
    setIsHovering({ ...isHovering, [id]: false });
  };

  return (
    <div
      className="category-products-container"
    >
      <h2 className="categoryName-heading">{categoryName.toUpperCase()}</h2>
      {products.map((product) => (
        <Link
          to={`/${product.id}`}
          key={product.id}
        >
          <div
            className="category-product"
            key={product.id}
            onMouseOver={() => handleMouseOver(product.id)}
            onMouseOut={() => handleMouseOut(product.id)}
          >
            <img
              src={product.gallery[0]}
              className="category-product-image"
              alt={`${product.name}`}
            />
            {(isHovering[product.id] && product.inStock) && (
            <div className="category-product-add-container">
              <img
                src={emptyCart}
                alt="shopping cart icon"
                className="category-product-add-icon"
              />
            </div>
            )}
            <div className="category-product-info">
              <p className="category-product-name">
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
              className="category-product-overlay"
            >
              <p className="category-product-overlay-text">
                OUT OF STOCK
              </p>
            </div>
            )}
          </div>
        </Link>

      ))}
    </div>
  );
}
export default RenderProducts;
