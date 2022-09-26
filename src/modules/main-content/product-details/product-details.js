import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import RenderImages from "./render-images/render-images";
import RenderInfo from "./render-info/render-info";
import "./product-details.css";
import Loading from "../loading-component/loading-component";

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

function ProductDetails({
  productId,
  selectedCurrency,
  shoppingCartItems,
  setShoppingCartItems,
})
{
  const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCT);

  useEffect(() =>
  {
    getProducts({
      variables: {
        id: productId,
      },
    });
  }, [productId]);

  if (loading) return <Loading height="600px" />;

  if (error)
  {
    console.log(error); return <p>Error, check out the console</p>;
  }

  if (data)
  {
    return (
      <div className="product-details-container">
        <RenderImages
          product={data.product}
        />
        <RenderInfo
          product={data.product}
          selectedCurrency={selectedCurrency}
          shoppingCartItems={shoppingCartItems}
          setShoppingCartItems={setShoppingCartItems}
          providedClass="product-details-info"
          showDetails
        />
      </div>
    );
  }
}

export default ProductDetails;
