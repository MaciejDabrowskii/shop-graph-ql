/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import Loading from "../../main-content/loading-component/loading-component";
import { CATEGORIES_QUERY } from "../../queries/queries";

const GET_CATEGORIES = gql`${CATEGORIES_QUERY}`;

class NavbarCategories extends Component
{
  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (name) =>
  {
    const {
      setSelectedCategory,
      closeOverlay,
      closeCurrencyDropdown,
    } = this.context;

    setSelectedCategory(name);
    closeOverlay();
    closeCurrencyDropdown();
  };

  render()
  {
    const {
      selectedCategory,
      setSelectedCategory,
    } = this.context;

    return (
      <Query
        query={GET_CATEGORIES}
        onCompleted={(data) =>
        {
          if (selectedCategory === "")
          {
            setSelectedCategory(data.categories[0].name);
          }
        }}
      >
        {({ data, loading, error }) =>
        {
          if (loading)
          {
            return (
              <div className="navbar-spinner-container">
                <Loading height="100%" />
              </div>
            );
          }

          if (error)
          {
            console.log(error); return <p>Error, check out the console</p>;
          }

          if (!loading)
          {
            const { categories } = data;

            return (
              <div className="navbar-categories-container">
                {categories.map(({ name }) => (
                  <Link
                    to="/"
                    key={name}
                    onClick={() => this.handleClick(name)}
                    className={`navbar-category${
                      selectedCategory === name ? " active" : ""}`}
                  >
                    {name.toUpperCase()}
                  </Link>
                ))}
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default NavbarCategories;
