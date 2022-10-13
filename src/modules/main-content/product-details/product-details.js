/* eslint-disable consistent-return */
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import React, { Component } from "react";
import RenderImages from "./render-images/render-images";
import RenderInfo from "./render-info/render-info";
import Loading from "../loading-component/loading-component";
import "./product-details.css";
import GlobalStateContext
  from "../../global-state-context/global-state-context";
import OutOfStockOverlay from "../outOfStock-overlay/outOfStock-overlay";

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

class ProductDetails extends Component
{
  constructor(props)
  {
    super(props);
  }

  componentWillUnmount()
  {
    const {
      closeOverlay,
    } = this.context;

    closeOverlay();
  }

  render()
  {
    const {
      productId,
    } = this.props;

    return (
      <Query
        query={GET_PRODUCT}
        variables={{ id: productId }}
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
            const { product } = data;

            return (
              <div className="product-details-container">
                {!product.inStock && (
                <OutOfStockOverlay />
                )}
                <RenderImages
                  product={product}
                />
                <RenderInfo
                  product={product}
                  providedClass="product-details-info"
                  showDetails
                />
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

RenderInfo.contextType = GlobalStateContext;

export default ProductDetails;
