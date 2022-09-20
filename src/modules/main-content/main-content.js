import React, { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
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

function MainContent({
  categoryName,
  selectedCurrency,
  selectedCategory,
  shoppingCartItems,
  setShoppingCartItems,
  overlayVisible,
})
{
  const [products, setProducts] = useState([]);
  const [getProducts, { loading, error, data }] = useLazyQuery(
    GET_CATEGORY_PRODUCTS,
  );

  useEffect(() =>
  {
    getProducts({
      variables: {
        name: categoryName,
      },
    });
  }, [selectedCategory]);

  useEffect(() =>
  {
    if (data)
    {
      setProducts(data.category.products);
    }
  }, [data]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return console.log(error);

  return (
    <div className="main-content-container">
      <Routes>
        <Route
          path="/"
          element={(
            <RenderProducts
              products={products}
              selectedCurrency={selectedCurrency}
              categoryName={categoryName}
            />
          )}
        />
        {products.map((product) => (
          <Route
            path={`/${product.id}`}
            key={product.id}
            element={(
              <ProductDetails
                productId={product.id}
                selectedCurrency={selectedCurrency}
                shoppingCartItems={shoppingCartItems}
                setShoppingCartItems={setShoppingCartItems}
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
              setShoppingCartItems={setShoppingCartItems}
              providedClass="shoppingCartDetails"
            />
          )}
        />
      </Routes>
      {overlayVisible && <div className="category-overlay" />}
    </div>
  );
}
export default MainContent;
