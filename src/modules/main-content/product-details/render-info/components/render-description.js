/* eslint-disable react/no-danger */
import React, { Component } from "react";
import { Markup } from "interweave";
// import DOMPurify from "dompurify";

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
