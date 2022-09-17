import React, { Component } from "react";
import CartOverlayHeading from "./components/cart-overlay-heading";
import RenderName
  from "../../main-content/product-details/render-info/components/render-name";
import RenderPrice
  from "../../main-content/product-details/render-info/components/render-price";
import QuantityControls from "./components/quantity-controls";
import RenderImage from "./components/cart-overlay-image";
import { calculateSum }
  from "../../shopping-cart-functions/shopping-cart-functions";
import SelectedValues from "./components/selected-values";
import NavButtons from "./components/nav-buttons";

class ShoppingCartOverlay extends Component
{
  constructor(props)
  {
    super(props);
  }

  // className={`${passedClass}`}
  render()
  {
    const {
      shoppingCartItems,
      itemsQuantity,
      selectedCurrency,
      incrementQuantity,
      decrementQuantity,
      removeItem,
      // setShoppingCartItems
    } = this.props;
    return (
      <div className="shoppingCart-overlay-container">
        <CartOverlayHeading
          itemsQuantity={itemsQuantity}
          passedClass="shoppingCart-overlay"
        />
        <div className="shoppingCart-overlay-items-container">
          {shoppingCartItems.map((item) => (
            <div
              key={item.cartId}
              className="shoppingCart-overlay-item-container"
            >
              <div className="shoppingCart-overlay-item-data-wrapper">

                <RenderName
                  product={item}
                  passedClass="shoppingCart-overlay"
                />
                <RenderPrice
                  prices={item.prices}
                  selectedCurrency={selectedCurrency}
                  passedClass="shoppingCart-overlay"
                />

                <SelectedValues
                  attributes={item.attributes}
                  selectedAttributes={item.selectedAttributes}
                  passedClass="shoppingCart-overlay"
                />

              </div>
              <div className="shoppingCart-overlay-item-image-wrapper">
                <QuantityControls
                  product={item}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  removeItem={removeItem}
                  passedClass="shoppingCart-overlay"
                />
                <RenderImage product={item} />
              </div>
            </div>
          ))}
        </div>
        <div className="shoppingCart-overlay-sum-container">
          <p className="shoppingCart-overlay-total">Total</p>
          <p className="shoppingCart-overlay-sum">
            {`${selectedCurrency.symbol}
           ${calculateSum(shoppingCartItems, selectedCurrency)}`}
          </p>
        </div>
        <NavButtons />
      </div>
    );
  }
}
export default ShoppingCartOverlay;

// function ShoppingCartOverlay({
//   shoppingCartItems,
//   itemsQuantity,
//   selectedCurrency,
//   setShoppingCartItems,
// })
// {
//   return (
//     <div className="shoppingCart-overlay-container">
//       <CartOverlayHeading itemsQuantity={itemsQuantity} />
//       <div className="shoppingCart-overlay-items-container">
//         {shoppingCartItems.map((item) => (
//           <div
//             key={item.cartId}
//             className="shoppingCart-overlay-item-container"
//           >
//             <div className="shoppingCart-overlay-item-data-wrapper">

//               <RenderName product={item} />
//               <RenderPrice
//                 prices={item.prices}
//                 selectedCurrency={selectedCurrency}
//               />

//               <SelectedValues
//                 attributes={item.attributes}
//                 selectedAttributes={item.selectedAttributes}
//               />

//             </div>
//             <div className="shoppingCart-overlay-item-image-wrapper">
//               <QuantityControls
//                 product={item}
//                 shoppingCartItems={shoppingCartItems}
//                 setShoppingCartItems={setShoppingCartItems}
//               />
//               <RenderImage product={item} />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="shoppingCart-overlay-sum-container">
//         <p className="shoppingCart-overlay-total">Total</p>
//         <p className="shoppingCart-overlay-sum">
//           {`${selectedCurrency.symbol}
//            ${calculateSum(shoppingCartItems, selectedCurrency)}`}
//         </p>
//       </div>
//       <NavButtons setShoppingCartItems={setShoppingCartItems} />
//     </div>
//   );
// }
// export default ShoppingCartOverlay;
