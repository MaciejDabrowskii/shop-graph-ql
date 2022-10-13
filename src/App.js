/* eslint-disable array-callback-return */
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./modules/navbar/navbar";
import MainContent from "./modules/main-content/main-content";
import GlobalStateContext, { GlobalStateProvider }
  from "./modules/global-state-context/global-state-context";

class App extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="App">
        <BrowserRouter>
          <link rel="stylesheet" href="https://use.typekit.net/fwk2oee.css" />
          <GlobalStateProvider>
            <Navbar />
            <MainContent />
          </GlobalStateProvider>
        </BrowserRouter>
      </div>
    );
  }
}

Navbar.contextType = GlobalStateContext;
MainContent.contextType = GlobalStateContext;

export default App;
