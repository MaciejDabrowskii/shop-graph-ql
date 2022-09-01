/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useQuery, gql } from "@apollo/client";

function CategoryPage(
  {
    categoryName,
  },
)
{
  const GET_CATEGORY = gql`
    query{
        category(input: {title: ${categoryName}}){
            name products{
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
                    currency
                    amount
                }
                brand
            }
        }}`;

  return (
    <h2 className="categoryName-heading">{categoryName.toUpperCase()}</h2>

  );
}
export default CategoryPage;
