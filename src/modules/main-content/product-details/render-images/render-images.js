/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import OutOfStockOverlay from "../../outOfStock-overlay/outOfStock-overlay";

function RenderImages({ product })
{
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);

  const { name, inStock } = product;

  return (
    <div className="product-details-images-container">
      <div className="product-details-images-sidebar">
        {product.gallery.map((image) => (
          <div
            className="product-details-images-sidebar-image-wrapper"
            key={image}
          >
            <img
              src={image}
              key={image}
              className="product-details-images-sidebar-image"
              alt={`${name} small`}
              onClick={() => setSelectedImage(image)}
            />
            {!inStock && <OutOfStockOverlay />}
          </div>
        ))}
      </div>
      <div className="product-details-images-selected-container">
        <img
          className="product-details-images-selected-image"
          src={selectedImage}
          alt={`${name} big`}
        />
        {!inStock && <OutOfStockOverlay />}
      </div>
    </div>
  );
}

export default RenderImages;
