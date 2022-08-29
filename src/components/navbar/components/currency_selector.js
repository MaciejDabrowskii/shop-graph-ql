/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CURRENCY = gql`
query{
    currencies{
        label
        symbol
    }
}`;

function CurrencySelector()
{
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, error, loading } = useQuery(GET_CURRENCY, { fetchPolicy: "cache-and-network" });

  useEffect(() =>
  {
    if (!loading)
    {
      setCurrencies(data.currencies);
      console.log(currencies);
      currencies.map((currency) =>
      {
        if (currency.label === "USD")setSelectedCurrency(currency.label);
      });
    }
  }, [loading]);

  if (error) return console.log(error);
  if (loading) return <h1>Loading...</h1>;

  return (

    <div className="currency-selector-container">
      <div className="currency-selector-symbol">
        {currencies.map((currency) =>
        {
          if (currency.label === "USD") return <p>{currency.symbol}</p>;
        })}
      </div>
      <div>{selectedCurrency}</div>
      <svg className="currency-selector-arrow" width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.5L4 0.5L7 3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    </div>
  );
}

// {data.currencies.map((currency) =>
// {
//   if (currency.label === "USD") return <p>{currency.symbol}</p>;
// })}
export default CurrencySelector;
