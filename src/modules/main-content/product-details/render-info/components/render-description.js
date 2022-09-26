/* eslint-disable react/no-danger */
import React, { Component } from "react";

class RenderDescription extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      description,
    } = this.props;

    return (
      <div className="product-details-info-description-container">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }
}

export default RenderDescription;
