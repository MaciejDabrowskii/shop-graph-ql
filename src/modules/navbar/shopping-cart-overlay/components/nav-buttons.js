import React from "react";
import { Link } from "react-router-dom";
import { GlobalStatesMethods } from "../../../global-state-context/global-state-context";

function NavButtons()
{
  const { setShoppingCartItems } = GlobalStatesMethods();

  return (
    <div className="shoppingCart-overlay-navButtons-container">
      <Link to="/your-bag" className="shoppingCart-overlay-navButtons-viewBag">
        VIEW BAG
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
