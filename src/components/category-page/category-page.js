/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CATEGORY_PRODUCTS = gql`
query category($name: String!){
  category(input: {title: $name}){
    name
    products{
      id
      name
      inStock
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
      console.log(data);
    }
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;

  if (data)
  {
    return (

      <div>
        <h2 className="categoryName-heading">{categoryName}</h2>
      </div>

    );
  }
}
export default CategoryPage;
