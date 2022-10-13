/* eslint-disable consistent-return */
import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { Routes, Route } from "react-router-dom";
import Loading from "./loading-component/loading-component";
import RenderProducts from "./render-products/render-products";
import ProductDetails from "./product-details/product-details";
import ShoppingCartDetails from "./shopping-cart-details/shopping-cart-details";
import GlobalStateContext
  from "../global-state-context/global-state-context";
import { GET_CATEGORY_PRODUCTS } from "../queries/queries";

// const GET_CATEGORY_PRODUCTS = gql`${SELECTED_CATEGORY_PRODUCTS_QUERY}`;

class MainContent extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      selectedCategory,
      isOverlayVisible,
    } = this.context;

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
                        categoryName={name}
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
                        />
                      )}
                    />
                  ))}
                  <Route
                    path="/your-bag"
                    element={(
                      <ShoppingCartDetails
                        providedClass="shoppingCartDetails"
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

RenderProducts.contextType = GlobalStateContext;
ProductDetails.contextType = GlobalStateContext;
ShoppingCartDetails.contextType = GlobalStateContext;

export default MainContent;
