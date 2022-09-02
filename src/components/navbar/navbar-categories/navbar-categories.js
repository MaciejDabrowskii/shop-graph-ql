/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

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
        <button
          type="button"
          key={name}
          onClick={() => setSelectedCategory(name)}
        >
          {name.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
export default NavbarCategories;
