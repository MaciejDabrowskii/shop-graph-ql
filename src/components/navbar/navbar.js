import React from "react";
import Navigation from "./components/navigation";
import CurrencySelector from "./components/currency_selector";

function Navbar()
{
  return (
    <div className="navbar">
      <Navigation />
      <CurrencySelector />
    </div>
  );
}
export default Navbar;
