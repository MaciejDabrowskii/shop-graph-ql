/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import "./render-products.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../../assets/EmptyCart-white.svg";

class RenderProducts extends Component
{
  constructor(props)
  {
    super(props);
    this.setInitialState = this.setInitialState.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {};
  }

  componentDidMount()
  {
    this.setInitialState();
    console.log(this.state);
  }

  setInitialState = () =>
  {
    const { products } = this.props;
    products.map((product) => this.setState((prevState) => ({
      ...prevState,
      [product.id]: false,
    })));
  };

  handleMouseOver = (id) =>
  {
    this.setState((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  handleMouseOut = (id) =>
  {
    this.setState((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  render()
  {
    const {
      products,
      selectedCurrency,
      categoryName,
    } = this.props;
    return (
      <div className="category-products">
        <p className="category-heading">{categoryName.toUpperCase()}</p>
        <div className="category-products-container">
          {products.map(({
            id,
            gallery,
            name,
            prices,
            inStock,
          }) => (
            <div
              onMouseOver={() => this.handleMouseOver(id)}
              onMouseOut={() => this.handleMouseOut(id)}
              className="category-product"
              key={id}
            >
              <Link to={`/${id}`} key={id}>
                <img
                  src={gallery[0]}
                  className="category-product-image"
                  alt={`${name}`}
                />
                <div className="category-product-info-container">
                  <p className="category-product-name">{name}</p>
                  {prices.map((price) =>
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
                {!inStock && (
                <div className="category-product-outOfStock-overlay-container">
                  <p
                    className="category-product-outOfStock-overlay"
                  >
                    OUT OF STOCK

                  </p>
                </div>
                )}
              </Link>
              {this.state[id] && inStock && (
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
}
export default RenderProducts;

// function RenderProducts({ products, selectedCurrency, categoryName })
// {
//   const [isHovering, setIsHovering] = useState(() =>
//   {
//     const obj = {};
//     products.map((product) =>
//     {
//       obj[product.id] = false;
//     });
//     return obj;
//   });

//   const handleMouseOver = (id) =>
//   {
//     setIsHovering({ ...isHovering, [id]: true });
//   };

//   const handleMouseOut = (id) =>
//   {
//     setIsHovering({ ...isHovering, [id]: false });
//   };

//   return (
//     <div className="category-products">
//       <p className="category-heading">{categoryName.toUpperCase()}</p>
//       <div className="category-products-container">
//         {products.map((product) => (
//           <div
//             onMouseOver={() => handleMouseOver(product.id)}
//             onMouseOut={() => handleMouseOut(product.id)}
//             className="category-product"
//             key={product.id}
//           >
//             <Link to={`/${product.id}`} key={product.id}>
//               <img
//                 src={product.gallery[0]}
//                 className="category-product-image"
//                 alt={`${product.name}`}
//               />
//               <div className="category-product-info-container">
//                 <p className="category-product-name">{product.name}</p>
//                 {product.prices.map((price) =>
//                 {
//                   if (price.currency.label === selectedCurrency.label)
//                   {
//                     return (
//                       <p
//                         key={price.currency.label}
//                         className="category-product-price"
//                       >
//                         {`${price.currency.symbol} ${price.amount}`}
//                       </p>
//                     );
//                   }
//                 })}
//               </div>
//               {!product.inStock && (
//                 <div className="category-product-outOfStock-overlay-container">
//                   <p
//                     className="category-product-outOfStock-overlay"
//                   >
//                     OUT OF STOCK

//                   </p>
//                 </div>
//               )}
//             </Link>
//             {isHovering[product.id] && product.inStock && (
//             <button
//               type="button"
//               className="category-product-add-button"
//             >
//               <img
//                 src={emptyCart}
//                 alt="shopping cart"
//                 className="category-product-add-icon"
//               />
//             </button>

//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
