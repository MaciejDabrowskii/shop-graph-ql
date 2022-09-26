/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from "react";

function RenderImages({ product })
{
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);

  return (
    <div className="product-details-images-container">
      <div className="product-details-images-sidebar">
        {product.gallery.map((image) => (
          <img
            src={image}
            key={image}
            className="product-details-images-sidebar-image"
            alt={`${product.name} small`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="product-details-images-selected-container">
        <img
          className="product-details-images-selected-image"
          src={selectedImage}
          alt={`${product.name} big`}
        />
      </div>
    </div>
  );
}

export default RenderImages;
