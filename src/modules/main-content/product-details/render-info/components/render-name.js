import React from "react";

function RenderName({ product: { brand, name }, providedClass })
{
  return (
    <div className={`${providedClass}-name-container`}>
      <p className={`${providedClass}-name-brand`}>{brand}</p>
      <p className={`${providedClass}-name`}>{name}</p>
    </div>
  );
}

export default RenderName;
