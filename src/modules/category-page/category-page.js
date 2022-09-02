/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import RenderProducts from "./render-products/render-products";

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
      console.log(data);
      setProducts(data.category.products);
    }
  }, [data]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h2 className="categoryName-heading">{categoryName.toUpperCase()}</h2>
      <RenderProducts
        products={products}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
}
export default CategoryPage;
