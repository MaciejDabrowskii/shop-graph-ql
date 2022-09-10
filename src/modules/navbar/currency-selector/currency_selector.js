/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CURRENCY = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;

function CurrencySelector(
  {
    selectedCurrency,
    setSelectedCurrency,
  },
)
{
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
    currencies.map((currency) =>
    {
      if (currency.label === "USD")
      {
        setSelectedCurrency(
          { sybol: currency.symbol, label: currency.label },
        );
      }
    });
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

  if (error) return console.log(error);
  if (loading) return <h1>Loading...</h1>;

  return (
    <div
      className="currency-selector-container"
      ref={dropdown}
      onClick={handleClickInside}
    >
      <div className="currency-selector-label">{selectedCurrency.label}</div>
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
          <ul>
            {currencies.map((currency) => (
              <li
                className="currency-selector-item"
                onClick={() => setSelectedCurrency(
                  { sybol: currency.symbol, label: currency.label },
                )}
                key={currency.label}
              >
                {`${currency.symbol} ${currency.label}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default CurrencySelector;
