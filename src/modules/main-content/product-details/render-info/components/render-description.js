/* eslint-disable react/no-danger */

import React from "react";
import DOMPurify from "dompurify";

function RenderDescription({ description })
{
  return (
    <div className="product-details-info-description-container">
      <div dangerouslySetInnerHTML={
        { __html: DOMPurify.sanitize(description) }
        }
      />
    </div>
  );
}

export default RenderDescription;
