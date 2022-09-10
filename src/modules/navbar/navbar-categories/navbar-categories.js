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

function NavbarCategories({ setSelectedCategory })
{
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  useEffect(() =>
  {
    if (!loading)
    {
      data.categories.map(({ name }) =>
      {
        if (name === "all") setSelectedCategory(name);
      });
    }
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <div className="header_navigation">
      {data.categories.map(({ name }) => (
        <Link to="/" key={name}>
          <button type="button" onClick={() => setSelectedCategory(name)}>
            {name.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}
export default NavbarCategories;
