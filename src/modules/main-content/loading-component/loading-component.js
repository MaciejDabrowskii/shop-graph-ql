import React, { Component } from "react";
import spiner from "../../../assets/loading-spiner.svg";

class Loading extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const { height } = this.props;

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
}

export default Loading;
