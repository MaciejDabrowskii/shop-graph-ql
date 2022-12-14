/* eslint-disable max-len */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

import "./render-products.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../../assets/EmptyCart-white.svg";
import RenderInfo from "../product-details/render-info/render-info";
import { GlobalStatesMethods } from "../../global-state-context/global-state-context";
import OutOfStockOverlay from "../outOfStock-overlay/outOfStock-overlay";
import { convertToTwoDecimals } from "../../shopping-cart-functions/shopping-cart-functions";

function RenderProducts({ products })
{
  const {
    selectedCurrency,
    shoppingCartItems,
    setShoppingCartItems,
    selectedCategory,
  } = GlobalStatesMethods();

  const setInitialState = () =>
  {
    let obj = {};

    products.map((product) =>
    {
      obj = {
        ...obj,
        [product.id]: false,
      };
    });
    return obj;
  };

  const [isHovering, setIsHovering] = useState(setInitialState());

  const [showDetails, setSwoDetails] = useState(setInitialState());

  const handleMouseOver = (id) =>
  {
    setIsHovering({ ...isHovering, [id]: true });
  };

  const handleMouseOut = (id) =>
  {
    setIsHovering({ ...isHovering, [id]: false });
  };

  const showAttributes = (id) =>
  {
    setSwoDetails({ ...showDetails, [id]: true });
  };

  const hideAttributes = (id) =>
  {
    setSwoDetails({ ...showDetails, [id]: false });
  };

  const addToCartAttributeless = (product) =>
  {
    if (shoppingCartItems.some((item) => item.cartId === product.id))
    {
      setShoppingCartItems(
        shoppingCartItems.map((item) => (item.cartId === product.id
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
          cartId: product.id,
          quantity: 1,
          selectedAttributes: product.attributes,
        },
      ]);
    }
  };

  return (
    <div className="category-products">
      <p className="category-heading">{selectedCategory.toUpperCase()}</p>
      <div className="category-products-container">
        {products.map((product) => (
          <div
            onMouseOver={() => handleMouseOver(product.id)}
            onMouseOut={() => handleMouseOut(product.id)}
            className={`category-product${
              showDetails[product.id] ? " active" : ""
            }`}
            key={product.id}
          >
            {!showDetails[product.id] ? (
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
                          {`${price.currency.symbol} ${convertToTwoDecimals(
                            price.amount,
                          )}`}
                        </p>
                      );
                    }
                  })}
                </div>
                {!product.inStock && <OutOfStockOverlay />}
              </Link>
            ) : (
              <div className="category-product-attributes-wrapper">
                <button
                  type="button"
                  onClick={() => hideAttributes(product.id)}
                >
                  ???
                </button>
                <RenderInfo
                  showDetails={false}
                  product={product}
                  providedClass="category-product"
                />
              </div>
            )}
            {isHovering[product.id]
              && !showDetails[product.id]
              && product.inStock && (
                <button
                  type="button"
                  className="category-product-add-button"
                  onClick={
                    product.attributes.length > 0
                      ? () => showAttributes(product.id)
                      : () => addToCartAttributeless(product)
                  }
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
