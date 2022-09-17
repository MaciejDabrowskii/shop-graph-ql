import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavButtons extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="shoppingCart-overlay-navButtons-container">
        <Link
          to="/your-bag"
          className="shoppingCart-overlay-navButtons-viewBag"
        >
          VIEW BAG
        </Link>
        <button
          type="button"
          className="shoppingCart-overlay-navButtons-checkOut"
          // onClick={() => setShoppingCartItems([])}
        >
          CHECK OUT
        </button>
      </div>
    );
  }
}

export default NavButtons;

// function NavButtons({ setShoppingCartItems })
// {
//   return (
//     <div className="shoppingCart-overlay-navButtons-container">
//       <Link
//         to="/your-bag"
//         className="shoppingCart-overlay-navButtons-viewBag"
//       >
//         VIEW BAG
//       </Link>
//       <button
//         type="button"
//         className="shoppingCart-overlay-navButtons-checkOut"
//         // onClick={() => setShoppingCartItems([])}
//       >
//         CHECK OUT
//       </button>
//     </div>
//   );
// }
