/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import RenderImages from "./render-images/render-images";
import RenderInfo from "./render-info/render-info";

const GET_PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
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
`;

function ProductDetails(
  {
    productId,
    selectedCurrency,
    shoppingCartItems,
    setShoppingCartItems,
  },
)
{
  const [product, setProduct] = useState({});
  const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCT);

  useEffect(() =>
  {
    getProducts({
      variables: {
        id: productId,
      },
    });
  }, [productId]);

  if (loading) return <h1>Loading...</h1>;
  if (data)
  {
    // console.log(data);
    return (
      <div className="product-details-container">
        <h1>{data.product.name}</h1>
        {/* <RenderImages
          product={data.product}
        /> */}
        <RenderInfo
          product={data.product}
          selectedCurrency={selectedCurrency}
          shoppingCartItems={shoppingCartItems}
          setShoppingCartItems={setShoppingCartItems}
        />
      </div>
    );
  }
}
export default ProductDetails;
