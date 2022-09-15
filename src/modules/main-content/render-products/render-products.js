/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import "./render-products.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../../assets/EmptyCart-white.svg";

function RenderProducts({ products, selectedCurrency, categoryName })
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
    <div className="category-products">
      <h2 className="category-heading">{categoryName.toUpperCase()}</h2>
      <div className="category-products-container">
        {products.map((product) => (
          <div
            onMouseOver={() => handleMouseOver(product.id)}
            onMouseOut={() => handleMouseOut(product.id)}
            className="category-product"
            key={product.id}
          >
            <Link to={`/${product.id}`} key={product.id}>
              <img
                src={product.gallery[0]}
                className="category-product-image"
                alt={`${product.name}`}
              />
              <div className="category-product-info-container">
                <p className="category-product-name">{product.name}</p>
                {product.prices.map((price) =>
                {
                  if (price.currency.label === selectedCurrency.label)
                  {
                    return (
                      <p
                        key={price.currency.label}
                        className="category-product-price"
                      >
                        {`${price.currency.symbol} ${price.amount}`}
                      </p>
                    );
                  }
                })}
              </div>
              {!product.inStock && (
                <div className="category-product-outOfStock-overlay-container">
                  <p
                    className="category-product-outOfStock-overlay"
                  >
                    OUT OF STOCK

                  </p>
                </div>
              )}
            </Link>
            {isHovering[product.id] && product.inStock && (
            <button
              type="button"
              className="category-product-add-button"
            >
              <img
                src={emptyCart}
                alt="shopping cart"
                className="category-product-add-icon"
              />
            </button>

            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default RenderProducts;
