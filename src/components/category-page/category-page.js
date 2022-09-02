/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import RenderProducts from "./components/render-products";

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
  },
)
{
  const [products, setProducts] = useState([]);

  const { loading, error, data } = useQuery(
    GET_CATEGORY_PRODUCTS,
    {
      variables: {
        name: categoryName,
      },
    },
  );

  useEffect(() =>
  {
    if (!loading)
    {
      setProducts(data.category.products);
      console.log(products);
    }
  }, [loading]);

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
