/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import Loading from "../../main-content/loading-component/loading-component";
import { GET_CURRENCY } from "../../queries/queries";
import { GlobalStatesMethods } from "../../global-state-context/global-state-context";

function CurrencySelector()
{
  const { selectedCurrency, setSelectedCurrency } = GlobalStatesMethods();

  const dropdown = useRef();

  const [currencies, setCurrencies] = useState([]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const { data, error, loading } = useQuery(GET_CURRENCY, {
    fetchPolicy: "cache-and-network",
  });

  const handleClickInside = () => setDropdownVisible((current) => !current);

  const handleClickOutside = (e) =>
  {
    if (!dropdown.current.contains(e.target))
    {
      setDropdownVisible(false);
    }
  };

  useEffect(() =>
  {
    if (!loading)
    {
      setCurrencies(data.currencies);
    }
  }, [loading]);

  useEffect(() =>
  {
    if (!("label" in selectedCurrency))
    {
      currencies.map((currency) =>
      {
        if (currency.label === "USD")
        {
          setSelectedCurrency({
            symbol: currency.symbol,
            label: currency.label,
          });
        }
      });
    }
  }, [currencies]);

  useEffect(() =>
  {
    setDropdownVisible(false);
  }, [selectedCurrency]);

  useEffect(() =>
  {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  if (loading) return <Loading height="100%" />;

  if (error)
  {
    console.log(error);
    return <p>Error, check out the console</p>;
  }

  return (
    <div
      className="currency-selector-container"
      ref={dropdown}
      onClick={handleClickInside}
    >
      <div className="currency-selector-symbol">{selectedCurrency.symbol}</div>
      <svg
        className="currency-selector-arrow"
        width="8"
        height="4"
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: dropdownVisible ? "NONE" : "rotate(180deg)" }}
      >
        <path
          d="M1 3.5L4 0.5L7 3.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {dropdownVisible && (
        <div className="currency-selector-dropdown">
          {currencies.map((currency) => (
            <button
              type="button"
              className="currency-selector-item"
              onClick={() => setSelectedCurrency({
                symbol: currency.symbol,
                label: currency.label,
              })}
              key={currency.label}
            >
              <p>{currency.symbol}</p>
              <p>{currency.label}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencySelector;
