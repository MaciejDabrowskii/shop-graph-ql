/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";

const GET_CURRENCY = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;

class CurrencySelector extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { dropdownVisible: false };
    this.dropdown = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
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
    if (!this.dropdown.current.contains(event.target))
    {
      this.setState({ dropdownVisible: false });
    }
  };

  handleDropdown = () => this.setState(
    (prevState) => ({ dropdownVisible: !prevState.dropdownVisible }),
  );

  render()
  {
    const {
      selectedCurrency,
      setSelectedCurrency,
    } = this.props;

    const { dropdownVisible } = this.state;

    return (
      <Query
        query={GET_CURRENCY}
        onCompleted={(data) => setSelectedCurrency(data.currencies[0])}
      >
        {({ data, loading }) =>
        {
          if (!loading)
          {
            const { currencies } = data;
            return (
              <div
                className="currency-selector-container"
                ref={this.dropdown}
                onClick={this.handleDropdown}
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
                  style={
              { transform: dropdownVisible ? "NONE" : "rotate(180deg)" }
            }
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
