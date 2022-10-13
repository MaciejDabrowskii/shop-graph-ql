/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { Component, createContext } from "react";

const GlobalStateContext = createContext();

export class GlobalStateProvider extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      ...JSON.parse(localStorage.getItem("ShopData")),
      isOverlayVisible: false,
      isCartOverlayVisible: false,
    }
       || {
         selectedCategory: "",
         selectedCurrency: {
           symbol: "",
           label: "",
         },
         shoppingCartItems: [],
         isOverlayVisible: false,
         isCartOverlayVisible: false,
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
    isCartOverlayVisible: !prevState.isCartOverlayVisible,
  }));

  closeOverlay = () => this.setState((prevState) => ({
    ...prevState,
    isOverlayVisible: false,
    isCartOverlayVisible: false,
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
      isCartOverlayVisible,
    } = this.state;

    const {
      setSelectedCategory,
      setSelectedCurrency,
      toggleOverlay,
      incrementQuantity,
      decrementQuantity,
      removeItem,
      clearCart,
      addToCartAttributeless,
      closeOverlay,
      addItem,
    } = this;

    return (
      <GlobalStateContext.Provider
        value={{
          selectedCategory,
          selectedCurrency,
          shoppingCartItems,
          isOverlayVisible,
          isCartOverlayVisible,
          setSelectedCategory,
          setSelectedCurrency,
          toggleOverlay,
          incrementQuantity,
          decrementQuantity,
          removeItem,
          clearCart,
          addToCartAttributeless,
          closeOverlay,
          addItem,
        }}
      >
        {this.props.children}
      </GlobalStateContext.Provider>
    );
  }
}

export default GlobalStateContext;
