import React from "react";
import Page from "./Page";
import "./App.css";
import Calculator from "components/Calculator";
import styled from "styled-components";

const PageDivider = styled.div`
  display: grid;
  grid-template-areas: 
    'header header'
    'menu content';
  grid-template-columns: 1fr 3fr;
`;


function App() {
  return (
    <PageDivider className="App">
      <Page pageName="Runecrafting">
        <Calculator />
      </Page>
      <div />
    </PageDivider>
  );
}

export default App;
