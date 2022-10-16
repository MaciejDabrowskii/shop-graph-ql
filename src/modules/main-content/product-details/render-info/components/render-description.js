/* eslint-disable react/no-danger */
// import DOMPurify from "dompurify";
import React, { Component } from "react";
import { Markup } from "interweave";

class RenderDescription extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const { description } = this.props;

    return (
      <div className="product-details-info-description-container">
        {/* <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} //using sanitize approach
        />
      </div> */}
        <Markup content={description} />
        {/* using interweave approach */}
      </div>
    );
  }
}

export default RenderDescription;
