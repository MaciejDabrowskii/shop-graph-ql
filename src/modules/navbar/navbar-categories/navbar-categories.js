/* eslint-disable array-callback-return */

import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Loading from "../../main-content/loading-component/loading-component";

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

  if (loading) return <Loading height="100%" />;
  if (error)
  {
    console.log(error); return <p>Error, check out the console</p>;
  }

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
