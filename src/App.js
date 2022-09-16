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
    this.state = {
      selectedCategory: "aaaaaa",
      selectedCurrency: {
        symbol: "",
        label: "",
      },
      shoppingCartItems: [],
      overlayVisible: false,
    };
  }

  setSelectedCategory = (category) => this.setState({ selectedCategory: category });

  setSelectedCurrency = (currency) => this.setState({ selectedCurrency: currency });

  setOverlayVisible = () => this.setState((prevState) => ({ overlayVisible: !prevState.overlayVisible }));

  setShoppingCartItems = (item) => this.setState((prevState) => ({
    shoppingCartItems: [...prevState, item],
  }));

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
            setSelectedCategory={this.setSelectedCategory}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={this.setSelectedCurrency}
            shoppingCartItems={shoppingCartItems}
            setShoppingCartItems={this.setShoppingCartItems}
            setOverlayVisible={this.setOverlayVisible}
          />
          {/* <MainContent
            categoryName={selectedCategory}
            selectedCurrency={selectedCurrency}
            selectedCategory={selectedCategory}
            shoppingCartItems={shoppingCartItems}
            setShoppingCartItems={setShoppingCartItems}
            overlayVisible={overlayVisible}
          /> */}
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
