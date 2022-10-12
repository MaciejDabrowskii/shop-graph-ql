/* eslint-disable consistent-return */
import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import Loading from "./loading-component/loading-component";
import RenderProducts from "./render-products/render-products";
import ProductDetails from "./product-details/product-details";
import ShoppingCartDetails from "./shopping-cart-details/shopping-cart-details";

const GET_CATEGORY_PRODUCTS = gql`
  query category($name: String!) {
    category(input: { title: $name }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

class MainContent extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      selectedCurrency,
      selectedCategory,
      shoppingCartItems,
      isOverlayVisible,
      addItem,
      incrementQuantity,
      decrementQuantity,
      removeItem,
      clearCart,
      addToCartAttributeless,
    } = this.props;

    return (
      <Query
        query={GET_CATEGORY_PRODUCTS}
        variables={{ name: selectedCategory }}
      >
        {({ data, loading, error }) =>
        {
          if (loading) return <Loading height="600px" />;

          if (error)
          {
            console.log(error); return <p>Error, check out the console</p>;
          }

          if (!loading)
          {
            const { category: { products, name } } = data;

            return (
              <div className="main-content-container">
                <Routes>
                  <Route
                    path="/"
                    element={(
                      <RenderProducts
                        products={products}
                        selectedCurrency={selectedCurrency}
                        categoryName={name}
                        shoppingCartItems={shoppingCartItems}
                        addItem={addItem}
                        incrementQuantity={incrementQuantity}
                        addToCartAttributeless={addToCartAttributeless}
                      />
                    )}
                  />
                  {products.map(({ id }) => (
                    <Route
                      path={`/${id}`}
                      key={id}
                      element={(
                        <ProductDetails
                          productId={id}
                          selectedCurrency={selectedCurrency}
                          shoppingCartItems={shoppingCartItems}
                          addItem={addItem}
                          incrementQuantity={incrementQuantity}

                        />
                      )}
                    />
                  ))}
                  <Route
                    path="/your-bag"
                    element={(
                      <ShoppingCartDetails
                        shoppingCartItems={shoppingCartItems}
                        selectedCurrency={selectedCurrency}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        removeItem={removeItem}
                        providedClass="shoppingCartDetails"
                        clearCart={clearCart}
                      />
                    )}
                  />
                </Routes>
                {isOverlayVisible && <div className="category-overlay" />}
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default MainContent;
