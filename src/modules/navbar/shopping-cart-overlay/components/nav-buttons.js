import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavButtons extends Component
{
  constructor(props)
  {
    super(props);
  }

  handleCheckOut = () =>
  {
    const {
      clearCart,
      closeOverlay,
    } = this.context;

    clearCart();
    closeOverlay();
  };

  render()
  {
    const {
      closeOverlay,
    } = this.context;

    return (
      <div className="shoppingCart-overlay-navButtons-container">
        <Link
          to="/your-bag"
          className="shoppingCart-overlay-navButtons-viewBag"
          onClick={() => closeOverlay()}
        >
          VIEW BAG
        </Link>
        <button
          type="button"
          className="shoppingCart-overlay-navButtons-checkOut"
          onClick={this.handleCheckOut}
        >
          CHECK OUT
        </button>
      </div>
    );
  }
}

export default NavButtons;
