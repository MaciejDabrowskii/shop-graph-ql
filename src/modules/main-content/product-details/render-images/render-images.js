/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";

class RenderImages extends Component
{
  constructor(props)
  {
    super(props);

    const { product: { gallery } } = this.props;

    this.state = { selectedImg: gallery[0] };
    this.setSelectedImage = this.setSelectedImage.bind(this);
  }

  setSelectedImage = (img) => this.setState((prevState) => ({
    ...prevState,
    selectedImg: img,
  }));

  render()
  {
    const {
      product: { name, gallery },
    } = this.props;

    const { selectedImg } = this.state;

    return (
      <div className="product-details-images-container">
        <div className="product-details-images-sidebar">
          {gallery.map((image) => (
            <img
              src={image}
              key={image}
              className="product-details-images-sidebar-image"
              alt={`${name} small`}
              onClick={() => this.setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="product-details-images-selected-container">
          <img
            className="product-details-images-selected-image"
            src={selectedImg}
            alt={`${name} big`}
          />
        </div>
      </div>
    );
  }
}

export default RenderImages;
