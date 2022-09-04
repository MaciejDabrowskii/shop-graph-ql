/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from "react";

function RenderDescription(
  {
    description,
  },
)
{
  return (
    <div className="product-details-info-description-container">
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
export default RenderDescription;
