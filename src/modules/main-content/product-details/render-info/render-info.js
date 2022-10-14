/* eslint-disable array-callback-return */
import React, { Component } from "react";
import RenderAttributes from "./components/render-attributes";
import RenderPrice from "./components/render-price";
import RenderDescription from "./components/render-description";
import RenderName from "./components/render-name";
import GlobalStateContext
  from "../../../global-state-context/global-state-context";

class RenderInfo extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      selectedAttributes: this.setInitialAttributes() || {},
      showWarning: false,
    };

    this.setInitialAttributes = this.setInitialAttributes.bind(this);
    this.generateCartiD = this.generateCartiD.bind(this);
    this.warning = this.warning.bind(this);
    this.checkAttributes = this.checkAttributes.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateAttributes = this.updateAttributes.bind(this);
  }

  setInitialAttributes = () =>
  {
    const {
      product: { attributes },
    } = this.props;

    const initialObject = {};

    attributes.map((atribute) =>
    {
      initialObject[atribute.name] = "";
    });
    return initialObject;
  };

  generateCartiD = () =>
  {
    const {
      product: { id },
    } = this.props;

    const { selectedAttributes } = this.state;

    return id + Object.values(selectedAttributes)
      .join("")
      .replace(/\s/g, "");
  };

  warning = () =>
  {
    this.setState((prevState) => ({
      ...prevState,
      showWarning: true,
    }));

    setTimeout(
      () => this.setState((prevState) => ({
        ...prevState,
        showWarning: false,
      })),
      3000,
    );
  };

  checkAttributes = () =>
  {
    const { selectedAttributes } = this.state;

    return Object.values(selectedAttributes)
      .every(
        (attribute) => attribute !== "",
      );
  };

  addToCart = () =>
  {
    const { product } = this.props;

    const { shoppingCartItems, incrementQuantity, addItem } = this.context;

    const { selectedAttributes } = this.state;

    if (this.checkAttributes())
    {
      if (
        shoppingCartItems.some((item) => item.cartId === this.generateCartiD())
      )
      {
        shoppingCartItems.map((item) =>
        {
          if (item.cartId === this.generateCartiD()) incrementQuantity(item);
        });
      }
      else
      {
        addItem({
          ...product,
          cartId: this.generateCartiD(),
          quantity: 1,
          selectedAttributes,
        });
      }
    }
    else this.warning();
  };

  updateAttributes = (e, attributeName) =>
  {
    const { selectedAttributes } = this.state;

    this.setState((prevState) => ({
      ...prevState,
      selectedAttributes: {
        ...selectedAttributes,
        [attributeName]: e.target.value,
      },
    }));
  };

  render()
  {
    const {
      product: {
        attributes, prices, inStock, description,
      },
      product,
      showDetails,
      providedClass,
    } = this.props;

    const { selectedAttributes, showWarning } = this.state;

    return (
      <div className={`${providedClass}-container`}>
        <RenderName product={product} providedClass={providedClass} />
        <RenderAttributes
          attributes={attributes}
          selectedAttributes={selectedAttributes}
          updateAttributes={this.updateAttributes}
          providedClass={providedClass}
        />
        <h3 className={`${providedClass}-price-heading`}>PRICE:</h3>
        <RenderPrice prices={prices} providedClass={providedClass} />
        {inStock ? (
          <div className={`${providedClass}-button-container`}>
            <button
              type="button"
              className={`${providedClass}-button`}
              onClick={() => this.addToCart()}
            >
              ADD TO CART
            </button>
            {showWarning && (
              <span className={`${providedClass}-warning`}>
                {`*Please select: ${Object.keys(selectedAttributes)
                  .map(
                    (attribute) => (
                      selectedAttributes[attribute] === ""
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
        {showDetails && <RenderDescription description={description} />}
      </div>
    );
  }
}

RenderPrice.contextType = GlobalStateContext;

export default RenderInfo;
