/* eslint-disable array-callback-return */
import React, { Component } from "react";
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
       isOverlayVisible: false,
     };
    this.setSelectedCategory = this.setSelectedCategory.bind(this);
    this.setSelectedCurrency = this.setSelectedCurrency.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.addToCartAttributeless = this.addToCartAttributeless.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
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

  toggleOverlay = () => this.setState((prevState) => ({
    ...prevState,
    isOverlayVisible: !prevState.isOverlayVisible,
  }));

  closeOverlay = () => this.setState((prevState) => ({
    ...prevState,
    isOverlayVisible: false,
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
      shoppingCartItems: prevState.shoppingCartItems
        .filter((item) => item.cartId !== cartId),
    }));
  };

  clearCart = () =>
  {
    this.setState((prevState) => ({
      ...prevState,
      shoppingCartItems: [],
    }));
  };

  addToCartAttributeless = (product) =>
  {
    const { attributes, id } = product;

    const { shoppingCartItems } = this.state;

    if (
      shoppingCartItems.some((item) => item.cartId === id)
    )
    {
      shoppingCartItems.map((item) =>
      {
        if (
          item.cartId === id
        ) this.incrementQuantity(item);
      });
    }
    else
    {
      this.addItem({
        ...product,
        cartId: id,
        quantity: 1,
        selectedAttributes: attributes,
      });
    }
  };

  render()
  {
    const {
      selectedCategory,
      selectedCurrency,
      shoppingCartItems,
      isOverlayVisible,
    } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <link rel="stylesheet" href="https://use.typekit.net/fwk2oee.css" />
          <Navbar
            selectedCategory={selectedCategory}
            selectedCurrency={selectedCurrency}
            shoppingCartItems={shoppingCartItems}
            isOverlayVisible={isOverlayVisible}
            setSelectedCategory={this.setSelectedCategory}
            setSelectedCurrency={this.setSelectedCurrency}
            toggleOverlay={this.toggleOverlay}
            closeOverlay={this.closeOverlay}
            incrementQuantity={this.incrementQuantity}
            decrementQuantity={this.decrementQuantity}
            removeItem={this.removeItem}
            clearCart={this.clearCart}
          />
          <MainContent
            selectedCurrency={selectedCurrency}
            selectedCategory={selectedCategory}
            shoppingCartItems={shoppingCartItems}
            isOverlayVisible={isOverlayVisible}
            addItem={this.addItem}
            incrementQuantity={this.incrementQuantity}
            decrementQuantity={this.decrementQuantity}
            removeItem={this.removeItem}
            clearCart={this.clearCart}
            addToCartAttributeless={this.addToCartAttributeless}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
