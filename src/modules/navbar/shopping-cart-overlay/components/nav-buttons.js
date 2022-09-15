import React from "react";
import { Link } from "react-router-dom";

function NavButtons({ setShoppingCartItems })
{
  return (
    <div className="shoppingCart-overlay-navButtons-container">
      <Link to="/your-bag">
        <button
          type="button"
          className="shoppingCart-overlay-navButtons-viewBag"
        >
          VIEW BAG
        </button>
      </Link>
      <button
        type="button"
        className="shoppingCart-overlay-navButtons-checkOut"
        onClick={() => setShoppingCartItems([])}
      >
        CHECK OUT
      </button>
    </div>
  );
}
export default NavButtons;
