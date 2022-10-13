/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";

class OutOfStockOverlay extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="outOfStock-overlay-container">
        <p
          className="outOfStock-overlay"
        >
          OUT OF STOCK
        </p>
      </div>
    );
  }
}

export default OutOfStockOverlay;
