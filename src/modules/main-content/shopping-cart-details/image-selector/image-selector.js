/* eslint-disable no-unused-expressions */
import React, { Component } from "react";

class ImageSelector extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { selectedImage: 0 };

    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  nextImage = () =>
  {
    const { selectedImage } = this.state;
    const { product: { gallery } } = this.props;
    selectedImage < gallery.length - 1
      ? this.setState((prevState) => ({
        selectedImage: prevState.selectedImage + 1,
      }))
      : this.setState({ selectedImage: 0 });
  };

  previousImage = () =>
  {
    const { selectedImage } = this.state;
    const { product: { gallery } } = this.props;
    selectedImage === 0
      ? this.setState({ selectedImage: gallery.length - 1 })
      : this.setState((prevState) => ({
        selectedImage: prevState.selectedImage - 1,
      }));
  };

  render()
  {
    const {
      product: { gallery, name },
    } = this.props;

    const { selectedImage } = this.state;

    return (
      <div className="shoppingCartDetails-item-image-container">
        <img src={gallery[selectedImage]} alt={name} />
        {gallery.length > 1 && (
        <div className="shoppingCartDetails-item-image-controls-container">
          <button
            className="shoppingCartDetails-item-image-control-btn"
            onClick={this.previousImage}
            type="button"
          >
            {"<"}
          </button>
          <button
            className="shoppingCartDetails-item-image-control-btn"
            onClick={this.nextImage}
            type="button"
          >
            {">"}
          </button>
        </div>
        )}

      </div>
    );
  }
}

export default ImageSelector;

// function ImageSelector({ product })
// {
//   const [selectedImage, setSelectedImage] = useState(0);

//   function nextImage()
//   {
//     return selectedImage < product.gallery.length - 1
//       ? setSelectedImage(selectedImage + 1)
//       : setSelectedImage(0);
//   }
//   function previousImage()
//   {
//     return selectedImage === 0
//       ? setSelectedImage(product.gallery.length - 1)
//       : setSelectedImage(selectedImage - 1);
//   }

//   return (
//     <div className="shoppingCartDetails-item-image-container">
//       <img src={product.gallery[selectedImage]} alt={product.name} />
//       {product.gallery.length > 1 && (
//       <div className="shoppingCartDetails-item-image-controls-container">
//         <button
//           className="shoppingCartDetails-item-image-control-btn"
//           onClick={previousImage}
//           type="button"
//         >
//           {"<"}
//         </button>
//         <button
//           className="shoppingCartDetails-item-image-control-btn"
//           onClick={nextImage}
//           type="button"
//         >
//           {">"}
//         </button>
//       </div>
//       )}

//     </div>
//   );
// }
