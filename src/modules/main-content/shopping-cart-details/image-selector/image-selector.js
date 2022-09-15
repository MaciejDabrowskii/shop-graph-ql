import React, { useState } from "react";

function ImageSelector({ product })
{
  const [selectedImage, setSelectedImage] = useState(0);

  function nextImage()
  {
    return selectedImage < product.gallery.length - 1
      ? setSelectedImage(selectedImage + 1)
      : setSelectedImage(0);
  }
  function previousImage()
  {
    return selectedImage === 0
      ? setSelectedImage(product.gallery.length - 1)
      : setSelectedImage(selectedImage - 1);
  }

  return (
    <div className="shoppingCartDetails-item-image-container">
      <img src={product.gallery[selectedImage]} alt={product.name} />
      {product.gallery.length > 1 && (
      <div className="shoppingCartDetails-item-image-controls-container">
        <button
          className="shoppingCartDetails-item-image-control-btn"
          onClick={previousImage}
          type="button"
        >
          {"<"}
        </button>
        <button
          className="shoppingCartDetails-item-image-control-btn"
          onClick={nextImage}
          type="button"
        >
          {">"}
        </button>
      </div>
      )}

    </div>
  );
}
export default ImageSelector;
