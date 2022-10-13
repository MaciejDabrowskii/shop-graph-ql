/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

import "./render-products.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../../assets/EmptyCart-white.svg";
import RenderInfo from "../product-details/render-info/render-info";
import { convertToTwoDecimals } from "../../shopping-cart-functions/shopping-cart-functions";
import GlobalStateContext from "../../global-state-context/global-state-context";
import OutOfStockOverlay from "../outOfStock-overlay/outOfStock-overlay";

class RenderProducts extends Component
{
  constructor(props)
  {
    super(props);

    this.state = this.setInitialState();

    this.setInitialState = this.setInitialState.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.showAttributes = this.showAttributes.bind(this);
    this.hideAttributes = this.hideAttributes.bind(this);
  }

  componentWillUnmount()
  {
    const {
      closeOverlay,
      closeCurrencyDropdown,
    } = this.context;

    closeOverlay();
    closeCurrencyDropdown();
  }

  setInitialState = () =>
  {
    const { products } = this.props;

    const initialObject = {
      showButton: {},
      showDetails: {},
    };

    products.map((product) =>
    {
      initialObject.showButton[product.id] = false;
      initialObject.showDetails[product.id] = false;
    });
    return initialObject;
  };

  handleMouseOver = (id) =>
  {
    this.setState((prevState) => ({
      ...prevState,
      showButton: { ...prevState.showButton, [id]: true },
    }));
  };

  handleMouseOut = (id) =>
  {
    this.setState((prevState) => ({
      ...prevState,
      showButton: { ...prevState.showButton, [id]: false },
    }));
  };

  showAttributes = (id) =>
  {
    this.setState((prevState) => ({
      ...prevState,
      showDetails: { ...prevState.showDetails, [id]: true },
    }));
  };

  hideAttributes = (id) =>
  {
    this.setState((prevState) => ({
      ...prevState,
      showDetails: { ...prevState.showDetails, [id]: false },
    }));
  };

  render()
  {
    const {
      products,
      categoryName,
    } = this.props;

    const {
      addToCartAttributeless,
      selectedCurrency,
    } = this.context;

    return (
      <div className="category-products">
        <p className="category-heading">{categoryName.toUpperCase()}</p>
        <div className="category-products-container">
          {products.map((product) => (
            <div
              onMouseOver={() => this.handleMouseOver(product.id)}
              onMouseOut={() => this.handleMouseOut(product.id)}
              className={`category-product${this.state.showDetails[product.id] ? " active" : ""}`}
              key={product.id}
            >
              {
                  !this.state.showDetails[product.id]
                    ? (
                      <Link to={`/${product.id}`} key={product.id}>
                        <img
                          src={product.gallery[0]}
                          className="category-product-image"
                          alt={`${product.name}`}
                        />
                        <div className="category-product-info-container">
                          <p className="category-product-name">{`${product.brand} ${product.name}`}</p>
                          {product.prices.map((price) =>
                          {
                            if (price.currency.label === selectedCurrency.label)
                            {
                              return (
                                <p
                                  key={price.currency.label}
                                  className="category-product-price"
                                >
                                  {`${price.currency.symbol} ${convertToTwoDecimals(price.amount)}`}
                                </p>
                              );
                            }
                          })}
                        </div>
                        {!product.inStock && (
                        <OutOfStockOverlay />
                        )}
                      </Link>
                    )
                    : (
                      <div
                        key={product.id}
                        className="category-product-attributes-wrapper"
                      >
                        <button
                          type="button"
                          onClick={() => this.hideAttributes(product.id)}
                        >
                          ✖
                        </button>
                        <RenderInfo
                          product={product}
                          showDetails={false}
                          providedClass="category-product"
                        />
                      </div>
                    )
                }
              { (this.state.showButton[product.id] && !this.state.showDetails[product.id] && product.inStock) && (
              <button
                type="button"
                className="category-product-add-button"
                onClick={
                  product.attributes.length > 0
                    ? () => this.showAttributes(product.id)
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
}

RenderInfo.contextType = GlobalStateContext;

export default RenderProducts;
