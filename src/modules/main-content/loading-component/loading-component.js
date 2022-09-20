import React from "react";
import spiner from "../../../assets/loading-spiner.svg";

function Loading({ height })
{
  return (
    <div className="spiner-container">
      <img
        className="loading-spiner"
        alt="Loading"
        src={spiner}
        style={{ height: `${height}` }}
      />
    </div>
  );
}
export default Loading;
