/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

function NavbarCategories({ setSelectedCategory, selectedCategory })
{
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  useEffect(() =>
  {
    if (!loading)
    {
      if (selectedCategory === "")
      {
        data.categories.map(({ name }) =>
        {
          if (name === "all") setSelectedCategory(name);
        });
      }
    }
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <div className="navbar-categories-container">
      {data.categories.map(({ name }) => (
        <Link
          to="/"
          key={name}
        >
          <button
            type="button"
            onClick={() => setSelectedCategory(name)}
            className={`navbar-category${
              selectedCategory === name ? " active" : ""}`}
          >
            {name.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}
export default NavbarCategories;
