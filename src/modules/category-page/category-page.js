/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderProducts from "./render-products/render-products";
import ProductDetails from "../product-details/product-details";

const GET_CATEGORY_PRODUCTS = gql`
query category($name: String!){
  category(input: {title: $name}){
    name
    products{
      id
      name
      inStock
      gallery
      description
      category
      attributes{
          id
          name
          type
          items{
              displayValue
              value
              id
          }
      }
      prices{
          currency{
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

function CategoryPage(
  {
    categoryName,
    selectedCurrency,
    selectedCategory,
  },
)
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
      console.log(data);
    }
  }, [data]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <BrowserRouter>
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
          {
            products.map((product) => (
              <Route
                path={`/${product.id}`}
                key={product.id}
                element={(
                  <ProductDetails
                    productId={product.id}
                    selectedCurrency={selectedCurrency}
                  />
                )}
              />
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default CategoryPage;
