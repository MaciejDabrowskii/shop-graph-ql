/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */
import React, { useState, useContext, useEffect } from "react";

const GlobalStateContext = React.createContext();

export function GlobalStatesMethods()
{
  return useContext(GlobalStateContext);
}

export function GlobalStatesProvider({ children })
{
  const [selectedCategory, setSelectedCategory] = useState(() => (localStorage.getItem("selectedCategory") !== null
    ? JSON.parse(localStorage.getItem("selectedCategory"))
    : ""));

  const [selectedCurrency, setSelectedCurrency] = useState(() => (localStorage.getItem("selectedCurrency") !== null
    ? JSON.parse(localStorage.getItem("selectedCurrency"))
    : {}));

  const [shoppingCartItems, setShoppingCartItems] = useState(() => (localStorage.getItem("shoppingCartItems") !== null
    ? JSON.parse(localStorage.getItem("shoppingCartItems"))
    : []));

  const [overlayVisible, setOverlayVisible] = useState(false);

  function setLocalStorageData(category, items, currency)
  {
    localStorage.setItem("selectedCategory", JSON.stringify(category));
    localStorage.setItem("selectedCurrency", JSON.stringify(currency));
    localStorage.setItem("shoppingCartItems", JSON.stringify(items));
  }

  useEffect(() =>
  {
    setLocalStorageData(selectedCategory, shoppingCartItems, selectedCurrency);
  }, [selectedCategory, selectedCurrency, shoppingCartItems]);

  const methods = {
    selectedCategory,
    setSelectedCategory,
    selectedCurrency,
    setSelectedCurrency,
    shoppingCartItems,
    setShoppingCartItems,
    overlayVisible,
    setOverlayVisible,
  };

  return (
    <GlobalStateContext.Provider value={methods}>
      {children}
    </GlobalStateContext.Provider>
  );
}
// /* eslint-disable react/destructuring-assignment */
// /* eslint-disable array-callback-return */
// /* eslint-disable react/jsx-no-constructed-context-values */
// import React, { Component, createContext } from "react";

// const GlobalStateContext = createContext();

// export class GlobalStateProvider extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       ...JSON.parse(localStorage.getItem("ShopData")),
//       isOverlayVisible: false,
//       isCartOverlayVisible: false,
//       isCurrencyDropdownVisible: false,
//     }
//        || {
//          selectedCategory: "",
//          selectedCurrency: {
//            symbol: "",
//            label: "",
//          },
//          shoppingCartItems: [],
//          isOverlayVisible: false,
//          isCartOverlayVisible: false,
//          isCurrencyDropdownVisible: false,
//        };

//     this.setSelectedCategory = this.setSelectedCategory.bind(this);
//     this.setSelectedCurrency = this.setSelectedCurrency.bind(this);
//     this.toggleOverlay = this.toggleOverlay.bind(this);
//     this.incrementQuantity = this.incrementQuantity.bind(this);
//     this.decrementQuantity = this.decrementQuantity.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//     this.clearCart = this.clearCart.bind(this);
//     this.addToCartAttributeless = this.addToCartAttributeless.bind(this);
//     this.closeOverlay = this.closeOverlay.bind(this);
//     this.addItem = this.addItem.bind(this);
//     this.closeCurrencyDropdown = this.closeCurrencyDropdown.bind(this);
//     this.toggleCurrencyDropdown = this.toggleCurrencyDropdown.bind(this);
//   }

//   componentDidUpdate()
//   {
//     localStorage.setItem("ShopData", JSON.stringify(this.state));
//   }

//   setSelectedCategory = (category) => this.setState((prevState) => ({
//     ...prevState,
//     selectedCategory: category,
//   }));

//   setSelectedCurrency = (currency) => this.setState((prevState) => ({
//     ...prevState,
//     selectedCurrency: currency,
//   }));

//   toggleOverlay = () => this.setState((prevState) => ({
//     ...prevState,
//     isOverlayVisible: !prevState.isOverlayVisible,
//     isCartOverlayVisible: !prevState.isCartOverlayVisible,
//   }));

//   closeOverlay = () => this.setState((prevState) => ({
//     ...prevState,
//     isOverlayVisible: false,
//     isCartOverlayVisible: false,
//   }));

//   addItem = (item) => this.setState((prevState) => ({
//     ...prevState,
//     shoppingCartItems: [...prevState.shoppingCartItems, item],
//   }));

//   incrementQuantity = (passedItem) =>
//   {
//     const { cartId } = passedItem;

//     this.setState((prevState) => ({
//       ...prevState,
//       shoppingCartItems: prevState.shoppingCartItems.map((item) => (
//         item.cartId === cartId
//           ? { ...item, quantity: item.quantity + 1 } : item)),
//     }));
//   };

//   decrementQuantity = (passedItem) =>
//   {
//     const { cartId } = passedItem;

//     this.setState((prevState) => ({
//       ...prevState,
//       shoppingCartItems: prevState.shoppingCartItems.map((item) => (
//         item.cartId === cartId
//           ? { ...item, quantity: item.quantity - 1 } : item
//       )),
//     }));
//   };

//   removeItem = (passedItem) =>
//   {
//     const { cartId } = passedItem;

//     this.setState((prevState) => ({
//       ...prevState,
//       shoppingCartItems: prevState.shoppingCartItems
//         .filter((item) => item.cartId !== cartId),
//     }));
//   };

//   clearCart = () =>
//   {
//     this.setState((prevState) => ({
//       ...prevState,
//       shoppingCartItems: [],
//     }));
//   };

//   addToCartAttributeless = (product) =>
//   {
//     const { attributes, id } = product;

//     const { shoppingCartItems } = this.state;

//     if (
//       shoppingCartItems.some((item) => item.cartId === id)
//     )
//     {
//       shoppingCartItems.map((item) =>
//       {
//         if (
//           item.cartId === id
//         ) this.incrementQuantity(item);
//       });
//     }
//     else
//     {
//       this.addItem({
//         ...product,
//         cartId: id,
//         quantity: 1,
//         selectedAttributes: attributes,
//       });
//     }
//   };

//   closeCurrencyDropdown = () => this.setState((prevState) => ({
//     ...prevState,
//     isCurrencyDropdownVisible: false,
//   }));

//   toggleCurrencyDropdown = () => this.setState((prevState) => ({
//     ...prevState,
//     isCurrencyDropdownVisible: !prevState.isCurrencyDropdownVisible,
//   }));

//   render()
//   {
//     const {
//       selectedCategory,
//       selectedCurrency,
//       shoppingCartItems,
//       isOverlayVisible,
//       isCartOverlayVisible,
//       isCurrencyDropdownVisible,
//     } = this.state;

//     const {
//       setSelectedCategory,
//       setSelectedCurrency,
//       toggleOverlay,
//       incrementQuantity,
//       decrementQuantity,
//       removeItem,
//       clearCart,
//       addToCartAttributeless,
//       closeOverlay,
//       addItem,
//       closeCurrencyDropdown,
//       toggleCurrencyDropdown,
//     } = this;

//     return (
//       <GlobalStateContext.Provider
//         value={{
//           selectedCategory,
//           selectedCurrency,
//           shoppingCartItems,
//           isOverlayVisible,
//           isCartOverlayVisible,
//           isCurrencyDropdownVisible,
//           setSelectedCategory,
//           setSelectedCurrency,
//           toggleOverlay,
//           incrementQuantity,
//           decrementQuantity,
//           removeItem,
//           clearCart,
//           addToCartAttributeless,
//           closeOverlay,
//           addItem,
//           toggleCurrencyDropdown,
//           closeCurrencyDropdown,
//         }}
//       >
//         {this.props.children}
//       </GlobalStateContext.Provider>
//     );
//   }
// }

// export default GlobalStateContext;
