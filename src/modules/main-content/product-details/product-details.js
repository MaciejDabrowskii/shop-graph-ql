/* eslint-disable consistent-return */
import { Query } from "@apollo/client/react/components";
import React, { Component } from "react";
import RenderImages from "./render-images/render-images";
import RenderInfo from "./render-info/render-info";
import Loading from "../loading-component/loading-component";
import "./product-details.css";
import GlobalStateContext
  from "../../global-state-context/global-state-context";
import { GET_PRODUCT } from "../../queries/queries";

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
      closeCurrencyDropdown,
    } = this.context;

    closeOverlay();
    closeCurrencyDropdown();
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
