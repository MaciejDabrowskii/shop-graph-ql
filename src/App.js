import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./modules/navbar/navbar";
import MainContent from "./modules/main-content/main-content";
import { GlobalStatesProvider }
  from "./modules/global-state-context/global-state-context";

function App()
{
  return (
    <div className="App">
      <GlobalStatesProvider>
        <BrowserRouter>
          <link rel="stylesheet" href="https://use.typekit.net/fwk2oee.css" />
          <Navbar />
          <MainContent />
        </BrowserRouter>
      </GlobalStatesProvider>
    </div>
  );
}

export default App;
