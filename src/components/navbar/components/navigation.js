import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CATEGORIES = gql`
query{categories{name}}`;

function Navigation()
{
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  if (loading) return <h1>Loading...</h1>;
  if (error)
  {
    return (
      <h1>
        Error :
        {" "}
        {error}
      </h1>
    );
  }
  return (
    <div className="header_navigation">
      {data.categories.map(({ name }) => (
        <button type="button" key={name}>{name.toUpperCase()}</button>
      ))}
    </div>

  );
}
export default Navigation;
