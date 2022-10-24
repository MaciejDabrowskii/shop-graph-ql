/* eslint-disable react/no-danger */

import React from "react";
// import DOMPurify from "dompurify";
import { Markup } from "interweave";

function RenderDescription({ description })
{
  return (
    <div className="product-details-info-description-container">
      {/* <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} // sanitize approach
      /> */}
      <Markup content={description} />
      {/* using interweave approach */}
    </div>
  );
}

export default RenderDescription;
