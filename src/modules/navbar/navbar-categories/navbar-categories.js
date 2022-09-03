/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_CATEGORIES = gql`
  {
    categories{
      name
    }
  }`;

function NavbarCategories({
  setSelectedCategory,
  selectedCategory,
})
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
    console.log(selectedCategory);
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <div className="header_navigation">
      {data.categories.map(({ name }) => (
        <Link
          to="/"
          key={name}
        >
          <div
            type="button"
            onClick={() => setSelectedCategory(name)}
          >
            {name.toUpperCase()}
          </div>
        </Link>
      ))}
    </div>
  );
}
export default NavbarCategories;
