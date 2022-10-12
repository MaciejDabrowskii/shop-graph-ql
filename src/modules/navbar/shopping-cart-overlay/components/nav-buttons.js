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
      closeCartOverlay,
    } = this.props;

    clearCart();
    closeCartOverlay();
  };

  render()
  {
    const {
      closeCartOverlay,
    } = this.props;

    return (
      <div className="shoppingCart-overlay-navButtons-container">
        <Link
          to="/your-bag"
          className="shoppingCart-overlay-navButtons-viewBag"
          onClick={() => closeCartOverlay()}
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
