/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import "./render-products.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../../assets/EmptyCart-white.svg";
import RenderInfo from "../product-details/render-info/render-info";

function RenderProducts(
  {
    products,
    selectedCurrency,
    categoryName,
    shoppingCartItems,
    setShoppingCartItems,

  },
)
{
  function setCleanState()
  {
    const obj = {};
    products.map((product) =>
    {
      obj[product.id] = false;
    });
    return obj;
  }

  function addToCart(product)
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
          selectedAttributes: {},
        },
      ]);
    }
  }

  const [isHovering, setIsHovering] = useState(() => setCleanState());

  const [renderInfo, setRenderInfo] = useState(() => setCleanState());

  const handleRenderInfo = (product) =>
  {
    setRenderInfo({ ...renderInfo, [product.id]: !renderInfo[product.id] });
  };

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
      <p className="category-heading">{categoryName.toUpperCase()}</p>
      <div className="category-products-container">
        {products.map((product) => (
          <div
            onMouseOver={() => handleMouseOver(product.id)}
            onMouseOut={() => handleMouseOut(product.id)}
            className="category-product"
            key={product.id}
            id={product.id}
          >
            {renderInfo[product.id] ? (
              <div className="category-product-details-wrapper">
                <button
                  className="category-product-details-button"
                  type="button"
                  onClick={() => handleRenderInfo(product)}
                >
                  ✖
                </button>
                <RenderInfo
                  product={product}
                  selectedCurrency={selectedCurrency}
                  shoppingCartItems={shoppingCartItems}
                  setShoppingCartItems={setShoppingCartItems}
                  showDetails={false}
                  providedClass="category-product"
                />
              </div>

            )
              : (
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
                  <div
                    className="category-product-outOfStock-overlay-container"
                  >
                    <p
                      className="category-product-outOfStock-overlay"
                    >
                      OUT OF STOCK

                    </p>
                  </div>
                  )}
                </Link>
              )}

            {
            (isHovering[product.id] && !renderInfo[product.id])
             && product.inStock && (
             <button
               type="button"
               className="category-product-add-button"
               onClick={() => (product.attributes.length > 0
                 ? handleRenderInfo(product) : addToCart(product))}
             >
               <img
                 src={emptyCart}
                 alt="shopping cart"
                 className="category-product-add-icon"
               />
             </button>
            )
            }
          </div>
        ))}
      </div>
    </div>
  );
}
export default RenderProducts;
