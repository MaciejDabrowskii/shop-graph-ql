/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
import React, { Component } from "react";
import RenderAttributes from "./components/render-attributes";
import RenderPrice from "./components/render-price";
import RenderDescription from "./components/render-description";
import RenderName from "./components/render-name";

class RenderInfo extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      selectedAttributes: {},
      showWarning: false,
    };

    this.setInitialAttributes = this.setInitialAttributes.bind(this);
    this.generateCartiD = this.generateCartiD.bind(this);
    this.warning = this.warning.bind(this);
    this.checkAttributes = this.checkAttributes.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateAttributes = this.updateAttributes.bind(this);
  }

  componentDidMount()
  {
    this.setInitialAttributes();
  }

  setInitialAttributes = () =>
  {
    const { product } = this.props;
    product.attributes.map((atribute) =>
    {
      this.setState(
        (prevState) => ({
          ...prevState,
          selectedAttributes: {
            ...prevState.selectedAttributes, [atribute.name]: "",
          },
        }),
      );
    });
  };

  generateCartiD = () =>
  {
    const { product: { id } } = this.props;
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

    setTimeout(() => this.setState((prevState) => ({
      ...prevState,
      showWarning: false,
    })), 3000);
  };

  checkAttributes = () =>
  {
    const { selectedAttributes } = this.state;
    return Object.values(selectedAttributes)
      .every((attribute) => attribute !== "");
  };

  addToCart = () =>
  {
    const {
      shoppingCartItems,
      incrementQuantity,
      addItem,
      product,
    } = this.props;
    const { selectedAttributes } = this.state;

    if (this.checkAttributes())
    {
      if (
        shoppingCartItems.some((item) => item.cartId === this.generateCartiD())
      )
      {
        shoppingCartItems.map((item) =>
        {
          if (
            item.cartId === this.generateCartiD()
          ) incrementQuantity(item);
          console.log(shoppingCartItems);
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
    console.log(shoppingCartItems);
  };

  updateAttributes = (e, attributeName) =>
  {
    const { selectedAttributes } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      selectedAttributes: {
        ...selectedAttributes, [attributeName]: e.target.value,
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
      selectedCurrency,
      showDetails,
      providedClass,
    } = this.props;

    const {
      selectedAttributes,
      showWarning,
    } = this.state;

    return (
      <div className={`${providedClass}-container`}>
        <RenderName
          product={product}
          providedClass={providedClass}
        />
        <RenderAttributes
          attributes={attributes}
          selectedAttributes={selectedAttributes}
          updateAttributes={this.updateAttributes}
          providedClass={providedClass}
        />
        <h3 className={`${providedClass}-price-heading`}>PRICE:</h3>
        <RenderPrice
          prices={prices}
          selectedCurrency={selectedCurrency}
          providedClass={providedClass}
        />
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
        <RenderDescription description={description} />
        )}
      </div>
    );
  }
}

export default RenderInfo;

// function RenderInfo({
//   product,
//   selectedCurrency,
//   shoppingCartItems,
//   setShoppingCartItems,
//   showDetails,
//   providedClass,
// })
// {
//   const [selectedAttributes, setSelectedAttributes] = useState(() => sssss
//   {
//     const obj = {};
//     product.attributes.map((atribute) =>
//     {
//       obj[atribute.name] = "";
//     });
//     return obj;
//   });

//   const [showWarning, setShowWarning] = useState(false);

//   const generateCartiD = product.id + Object.values(selectedAttributes)
//     .join("")
//     .replace(/\s/g, "");

//   const checkAttributes = Object.values(selectedAttributes)
//     .every(
//       (attribute) => attribute !== "",
//     );

//   function warning()
//   {
//     setShowWarning(true);
//     setTimeout(() => setShowWarning(false), 3000);
//   }

//   function addToCart()
//   {
//     if (checkAttributes)
//     {
//       if (shoppingCartItems.some((item) => item.cartId === generateCartiD))
//       {
//         setShoppingCartItems(
//           shoppingCartItems.map((item) => (item.cartId === generateCartiD
//             ? { ...item, quantity: item.quantity + 1 }
//             : item)),
//         );
//       }
//       else
//       {
//         setShoppingCartItems([
//           ...shoppingCartItems,
//           {
//             ...product,
//             cartId: generateCartiD,
//             quantity: 1,
//             selectedAttributes,
//           },
//         ]);
//       }
//     }
//     else warning();
//   }
//   return (
//     <div className={`${providedClass}-container`}>
//       <RenderName product={product} />
//       <RenderAttributes
//         attributes={product.attributes}
//         selectedAttributes={selectedAttributes}
//         setSelectedAttributes={setSelectedAttributes}
//       />
//       <h3 className={`${providedClass}-price-heading`}>PRICE:</h3>
//       <RenderPrice
//         prices={product.prices}
//         selectedCurrency={selectedCurrency}
//       />
//       {product.inStock ? (
//         <div className={`${providedClass}-button-container`}>
//           <button
//             type="button"
//             className={`${providedClass}-button`}
//             onClick={() => addToCart()}
//           >
//             ADD TO CART
//           </button>
//           {showWarning && (
//             <span className={`${providedClass}-warning`}>
//               {`*Please select: ${Object.keys(selectedAttributes)
//                 .map(
//                   (attribute) => (selectedAttributes[attribute] === ""
//                     ? ` ${attribute}` : ""),
//                 )}`}
//             </span>
//           )}
//         </div>
//       ) : (
//         <div className={`${providedClass}-outOfStock-container`}>
//           OUT OF STOCK
//         </div>
//       )}
//       {showDetails && (<RenderDescription description={product.description} />)}
//     </div>
//   );
// }
