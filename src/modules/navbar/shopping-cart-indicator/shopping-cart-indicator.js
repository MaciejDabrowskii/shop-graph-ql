/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
import React, { Component, createRef } from "react";
import cartIcon from "../../../assets/EmptyCart.svg";
import ShoppingCartOverlay
  from "../shopping-cart-overlay/shopping-cart-overlay";
import { calculateCartItemsQuantity }
  from "../../shopping-cart-functions/shopping-cart-functions";

class ShoppingCartIndicator extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      itemsQuantity: 6,
      cartOverlayVisible: false,
    };
    this.cartCpntainerDiv = createRef();
    this.cartIndicator = createRef();
  }

  componentDidMount()
  {

  }

  render()
  {
    const {
      shoppingCartItems,
      setOverlayVisible,
      selectedCurrency,
      setShoppingCartItems,
    } = this.props;

    const {
      itemsQuantity,
      cartOverlayVisible,
    } = this.state;

    return (
      <div className="shopping-cart-indicator-container" ref={this.cartCpntainerDiv}>
        <div
          className="shopping-cart-icon-container"
          ref={this.cartIndicator}
          // onClick={(e) => handleClickInside(e)}
        >
          <img src={cartIcon} alt="shopping cart icon" />
          {itemsQuantity > 0 && (
          <div className="shopping-cart-indicator">{itemsQuantity}</div>
          )}
        </div>
        {cartOverlayVisible && (
        <ShoppingCartOverlay
          itemsQuantity={itemsQuantity}
          shoppingCartItems={shoppingCartItems}
          selectedCurrency={selectedCurrency}
          setShoppingCartItems={setShoppingCartItems}
        />
        )}
      </div>
    );
  }
}

// function ShoppingCartIndicator({
//   shoppingCartItems,
//   setOverlayVisible,
//   selectedCurrency,
//   setShoppingCartItems,
// })
// {
//   const cartCpntainerDiv = useRef();
//   const cartIndicator = useRef();
//   const [itemsQuantity, setItemsQuantity] = useState(0);

//   const [cartOverlayVisible, setCartOverlayVisible] = useState(false);

//   const handleClickInside = (e) =>
//   {
//     if (cartIndicator.current.contains(e.target))
//     {
//       setCartOverlayVisible((current) => !current);
//       setOverlayVisible((current) => !current);
//     }
//   };

//   const handleClickOutside = (e) =>
//   {
//     if (!cartCpntainerDiv.current.contains(e.target))
//     {
//       setCartOverlayVisible(false);
//       setOverlayVisible(false);
//     }
//   };

//   useEffect(() =>
//   {
//     setItemsQuantity(() => calculateCartItemsQuantity(shoppingCartItems));
//   }, [shoppingCartItems]);

//   useEffect(() =>
//   {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   });

//   return (
//     <div className="shopping-cart-indicator-container" ref={cartCpntainerDiv}>
//       <div
//         className="shopping-cart-icon-container"
//         ref={cartIndicator}
//         onClick={(e) => handleClickInside(e)}
//       >
//         <img src={cartIcon} alt="shopping cart icon" />
//         {itemsQuantity > 0 && (
//           <div className="shopping-cart-indicator">{itemsQuantity}</div>
//         )}
//       </div>
//       {cartOverlayVisible && (
//         <ShoppingCartOverlay
//           itemsQuantity={itemsQuantity}
//           shoppingCartItems={shoppingCartItems}
//           selectedCurrency={selectedCurrency}
//           setShoppingCartItems={setShoppingCartItems}
//         />
//       )}
//     </div>
//   );
// }
export default ShoppingCartIndicator;
