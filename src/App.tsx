import React from "react";
import Page from "./Page";
import "./App.css";
import Calculator from "components/Calculator";

function App() {
  return (
    <div className="App">
      <Page pageName="Runecrafting">
        <Calculator />
      </Page>
    </div>
  );
}

export default App;
