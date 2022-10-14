/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from "react";
import { Query } from "@apollo/client/react/components";
import Loading from "../../main-content/loading-component/loading-component";
import { GET_CURRENCY } from "../../queries/queries";

class CurrencySelector extends Component
{
  constructor(props)
  {
    super(props);
    this.dropdown = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount()
  {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount()
  {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) =>
  {
    const { closeCurrencyDropdown } = this.context;

    if (!this.dropdown.current.contains(event.target))
    {
      closeCurrencyDropdown();
    }
  };

  render()
  {
    const {
      selectedCurrency,
      setSelectedCurrency,
      toggleCurrencyDropdown,
      isCurrencyDropdownVisible,
    } = this.context;

    return (
      <Query
        query={GET_CURRENCY}
        onCompleted={(data) => setSelectedCurrency(data.currencies[0])}
      >
        {({ data, loading, error }) =>
        {
          if (loading) return <Loading height="100%" />;

          if (error)
          {
            console.log(error);
            return <p>Error, check out the console</p>;
          }

          if (!loading)
          {
            const { currencies } = data;

            return (
              <div
                className="currency-selector-container"
                ref={this.dropdown}
                onClick={() => toggleCurrencyDropdown()}
              >
                <div className="currency-selector-symbol">
                  {selectedCurrency.symbol}
                </div>
                <svg
                  className="currency-selector-arrow"
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isCurrencyDropdownVisible
                      ? "none"
                      : "rotate(180deg)",
                  }}
                >
                  <path
                    d="M1 3.5L4 0.5L7 3.5"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {isCurrencyDropdownVisible && (
                  <div className="currency-selector-dropdown">
                    {currencies.map((currency) => (
                      <button
                        type="button"
                        className={
                          currency.symbol === selectedCurrency.symbol
                            ? "currency-selector-item selected"
                            : "currency-selector-item"
                        }
                        onClick={() => setSelectedCurrency(currency)}
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
        }}
      </Query>
    );
  }
}

export default CurrencySelector;
