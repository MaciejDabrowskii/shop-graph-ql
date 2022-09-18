/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from "react";
import {
  ApolloClient,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./modules/navbar/navbar";
import MainContent from "./modules/main-content/main-content";

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = JSON.parse(localStorage.getItem("ShopData"))
     || {
       selectedCategory: "",
       selectedCurrency: {
         symbol: "",
         label: "",
       },
       shoppingCartItems: [],
       overlayVisible: false,
     };
    this.setSelectedCategory = this.setSelectedCategory.bind(this);
    this.setSelectedCurrency = this.setSelectedCurrency.bind(this);
    this.setOverlayVisible = this.setOverlayVisible.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount()
  {

  }

  componentDidUpdate()
  {
    localStorage.setItem("ShopData", JSON.stringify(this.state));
  }

  setSelectedCategory = (category) => this.setState((prevState) => ({
    ...prevState,
    selectedCategory: category,
  }));

  setSelectedCurrency = (currency) => this.setState((prevState) => ({
    ...prevState,
    selectedCurrency: currency,
  }));

  setOverlayVisible = () => this.setState((prevState) => ({
    ...prevState,
    overlayVisible: !prevState.overlayVisible,
  }));

  addItem = (item) => this.setState((prevState) => ({
    ...prevState,
    shoppingCartItems: [...prevState.shoppingCartItems, item],
  }));

  incrementQuantity = (passedItem) =>
  {
    const { cartId } = passedItem;
    this.setState((prevState) => ({
      ...prevState,
      shoppingCartItems: prevState.shoppingCartItems.map((item) => (
        item.cartId === cartId
          ? { ...item, quantity: item.quantity + 1 } : item)),
    }));
  };

  decrementQuantity = (passedItem) =>
  {
    const { cartId } = passedItem;
    this.setState((prevState) => ({
      ...prevState,
      shoppingCartItems: prevState.shoppingCartItems.map((item) => (
        item.cartId === cartId
          ? { ...item, quantity: item.quantity - 1 } : item
      )),
    }));
  };

  removeItem = (passedItem) =>
  {
    const { cartId } = passedItem;
    this.setState((prevState) => ({
      ...prevState,
      shoppingCartItems: prevState.shoppingCartItems.filter((item) => item.cartId !== cartId),
    }));
  };

  render()
  {
    const {
      selectedCategory,
      selectedCurrency,
      shoppingCartItems,
      overlayVisible,
    } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <link rel="stylesheet" href="https://use.typekit.net/fwk2oee.css" />
          <Navbar
            selectedCategory={selectedCategory}
            selectedCurrency={selectedCurrency}
            shoppingCartItems={shoppingCartItems}
            overlayVisible={overlayVisible}
            setSelectedCategory={this.setSelectedCategory}
            setSelectedCurrency={this.setSelectedCurrency}
            setOverlayVisible={this.setOverlayVisible}
            incrementQuantity={this.incrementQuantity}
            decrementQuantity={this.decrementQuantity}
            removeItem={this.removeItem}
          />
          <MainContent
            selectedCurrency={selectedCurrency}
            selectedCategory={selectedCategory}
            shoppingCartItems={shoppingCartItems}
            overlayVisible={overlayVisible}
            addItem={this.addItem}
            incrementQuantity={this.incrementQuantity}
            decrementQuantity={this.decrementQuantity}
            removeItem={this.removeItem}
          />
        </BrowserRouter>
      </div>
    );
  }
}
// import "./App.css";
// import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import Navbar from "./modules/navbar/navbar";
// import MainContent from "./modules/main-content/main-content";

// function App()
// {
//   const [selectedCategory, setSelectedCategory] = useState(
//     () => (localStorage.getItem("selectedCategory") !== null
//       ? JSON.parse(localStorage.getItem("selectedCategory"))
//       : ""),
//   );
//   const [selectedCurrency, setSelectedCurrency] = useState(
//     () => (localStorage.getItem("selectedCurrency") !== null
//       ? JSON.parse(localStorage.getItem("selectedCurrency"))
//       : {}),
//   );
//   const [shoppingCartItems, setShoppingCartItems] = useState(
//     () => (localStorage.getItem("shoppingCartItems") !== null
//       ? JSON.parse(localStorage.getItem("shoppingCartItems"))
//       : []),
//   );
//   const [overlayVisible, setOverlayVisible] = useState(false);

//   function setLocalStorageData(category, items, currency)
//   {
//     localStorage.setItem("selectedCategory", JSON.stringify(category));
//     localStorage.setItem("selectedCurrency", JSON.stringify(currency));
//     localStorage.setItem("shoppingCartItems", JSON.stringify(items));
//   }

//   useEffect(() =>
//   {
//     setLocalStorageData(selectedCategory, shoppingCartItems, selectedCurrency);
//   }, [selectedCategory, selectedCurrency, shoppingCartItems]);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <link rel="stylesheet" href="https://use.typekit.net/fwk2oee.css" />
//         <Navbar
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//           selectedCurrency={selectedCurrency}
//           setSelectedCurrency={setSelectedCurrency}
//           shoppingCartItems={shoppingCartItems}
//           setShoppingCartItems={setShoppingCartItems}
//           setOverlayVisible={setOverlayVisible}
//         />
//         <MainContent
//           categoryName={selectedCategory}
//           selectedCurrency={selectedCurrency}
//           selectedCategory={selectedCategory}
//           shoppingCartItems={shoppingCartItems}
//           setShoppingCartItems={setShoppingCartItems}
//           overlayVisible={overlayVisible}
//         />
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
